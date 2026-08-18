import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [cursorType, setCursorType] = useState('default')
  const [visible, setVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true)
      return
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const onMouseLeave = () => setVisible(false)

    // Listen to hovered element attributes / classes
    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]')
      if (target) {
        const type = target.getAttribute('data-cursor')
        setCursorType(type)
      } else if (e.target.closest('button, a')) {
        setCursorType('click')
      } else {
        setCursorType('default')
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('mouseover', onMouseOver)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('mouseover', onMouseOver)
    }
  }, [visible])

  if (isTouchDevice || !visible) return null

  const isExpanded = cursorType !== 'default'

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${
        isExpanded
          ? 'w-16 h-16 rounded-full bg-[#ED78A8]/90 text-white backdrop-blur-sm shadow-lg shadow-[#ED78A8]/30 scale-100 font-nav text-[10px] font-bold tracking-widest uppercase'
          : 'w-4 h-4 rounded-full bg-[#ED78A8] border border-white/50 shadow-md shadow-[#ED78A8]/40 scale-100'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {cursorType === 'view' && 'VIEW'}
      {cursorType === 'drag' && 'DRAG'}
      {cursorType === 'click' && 'CLICK'}
    </div>
  )
}
