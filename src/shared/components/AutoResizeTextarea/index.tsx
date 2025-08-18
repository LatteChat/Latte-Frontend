import { useEffect, useRef, forwardRef } from 'react'

interface AutoResizeTextareaProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

const AutoResizeTextarea = forwardRef<
  HTMLTextAreaElement,
  AutoResizeTextareaProps
>(({ value, onChange, placeholder = '', className = '', onKeyDown }, ref) => {
  const internalRef = useRef<HTMLTextAreaElement>(null)
  const textareaRef =
    (ref as React.RefObject<HTMLTextAreaElement>) ?? internalRef

  const adjustHeight = (element: HTMLTextAreaElement) => {
    element.style.height = '0'
    element.style.height = `${element.scrollHeight}px`
  }

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight(textareaRef.current)
    }
  }, [value, textareaRef])

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`resize-none overflow-hidden outline-none ${className}`}
      onKeyDown={onKeyDown}
    />
  )
})

AutoResizeTextarea.displayName = 'AutoResizeTextarea'
export default AutoResizeTextarea
