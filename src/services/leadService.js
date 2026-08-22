/**
 * Clickmates Lead Management Service
 * Handles capturing lead data, storing local backup in localStorage,
 * submitting to Google Apps Script Web App / Webhook, and exporting CSV.
 */

// Default or configurable Google Apps Script Web App URL
export const GOOGLE_SHEET_WEBHOOK_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL || (typeof window !== 'undefined' && window.CMTS_GOOGLE_SCRIPT_URL) || ''

const LOCAL_STORAGE_KEY = 'clickmates_captured_leads'

/**
 * Submit lead to local storage backup and optional Google Sheet webhook
 */
export async function submitLead(formData) {
  const newLead = {
    id: 'LEAD-' + Date.now(),
    timestamp: new Date().toISOString(),
    formattedDate: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    name: formData.name || '',
    phone: formData.phone || '',
    email: formData.email || '',
    service: formData.service || '',
    preferredDate: formData.date || '',
    city: formData.city || 'Pune',
    message: formData.message || '',
    source: formData.isFirstVisit ? 'First-Time Visitor Offer Modal' : 'Website Booking Modal',
    pageUrl: typeof window !== 'undefined' ? window.location.href : ''
  }

  // 1. Always save to LocalStorage backup first
  let savedLocally = false
  try {
    const existingLeads = getSavedLeads()
    existingLeads.unshift(newLead)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existingLeads))
    savedLocally = true
    console.log('[Clickmates Leads] Lead saved to local backup:', newLead)
  } catch (err) {
    console.error('[Clickmates Leads] Failed to save lead locally:', err)
  }

  // 2. Submit to Google Sheets Webhook if URL is configured
  let sentToSheet = false
  const webhookUrl =
    (typeof window !== 'undefined' && window.CMTS_GOOGLE_SCRIPT_URL) ||
    GOOGLE_SHEET_WEBHOOK_URL ||
    (import.meta && import.meta.env && import.meta.env.VITE_GOOGLE_SCRIPT_URL) ||
    ''

  if (webhookUrl) {
    try {
      // Use no-cors mode and text/plain to avoid pre-flight OPTIONS check for Google Apps Script
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify(newLead)
      })
      sentToSheet = true
      console.log('[Clickmates Leads] Lead dispatched to Google Sheet Webhook:', webhookUrl)
    } catch (err) {
      console.error('[Clickmates Leads] Error submitting to Google Sheet Webhook:', err)
    }
  }

  return {
    success: true,
    lead: newLead,
    savedLocally,
    sentToSheet
  }
}

/**
 * Retrieve stored leads from localStorage
 */
export function getSavedLeads() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    console.error('[Clickmates Leads] Failed to parse local leads:', e)
    return []
  }
}

/**
 * Clear saved local leads
 */
export function clearSavedLeads() {
  try {
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    console.log('[Clickmates Leads] Local leads cleared.')
  } catch (e) {
    console.error(e)
  }
}

/**
 * Export saved leads to downloadable CSV file
 */
export function exportLeadsToCSV() {
  const leads = getSavedLeads()
  if (!leads.length) {
    alert('No leads found in local storage yet.')
    return
  }

  const headers = ['ID', 'Date & Time', 'Name', 'Phone', 'Email', 'Service', 'Preferred Date', 'City', 'Source', 'Message']
  const rows = leads.map(l => [
    `"${l.id}"`,
    `"${l.formattedDate}"`,
    `"${l.name.replace(/"/g, '""')}"`,
    `"${l.phone.replace(/"/g, '""')}"`,
    `"${l.email.replace(/"/g, '""')}"`,
    `"${l.service.replace(/"/g, '""')}"`,
    `"${l.preferredDate}"`,
    `"${l.city.replace(/"/g, '""')}"`,
    `"${l.source}"`,
    `"${(l.message || '').replace(/"/g, '""')}"`
  ])

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', `clickmates_leads_${new Date().toISOString().slice(0, 10)}.csv`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Expose helper utilities on window object for easy admin / testing access in browser console
if (typeof window !== 'undefined') {
  window.ClickmatesLeads = {
    getLeads: getSavedLeads,
    exportCSV: exportLeadsToCSV,
    clearLeads: clearSavedLeads,
    submitLead
  }
}
