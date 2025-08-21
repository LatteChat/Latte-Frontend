import { useEffect, useRef, forwardRef } from 'react'

interface AutoResizeTextareaProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  maxRows?: number
  lineHeight?: number
}

const AutoResizeTextarea = forwardRef<
  HTMLTextAreaElement,
  AutoResizeTextareaProps
>(
  (
    {
      value,
      onChange,
      placeholder = '',
      className = '',
      onKeyDown,
      maxRows,
      lineHeight = 15,
    },
    ref
  ) => {
    const internalRef = useRef<HTMLTextAreaElement>(null)
    const textareaRef =
      (ref as React.RefObject<HTMLTextAreaElement>) ?? internalRef

    const adjustHeight = (element: HTMLTextAreaElement) => {
      element.style.height = '0'

      if (maxRows) {
        const scrollHeight = element.scrollHeight
        const maxHeight = maxRows * lineHeight
        element.style.height = `${Math.min(scrollHeight, maxHeight)}px`
      } else {
        element.style.height = '0'
        element.style.height = `${element.scrollHeight}px`
      }
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
        className={`resize-none outline-none ${className}`}
        onKeyDown={onKeyDown}
        style={maxRows ? { maxHeight: `${maxRows * lineHeight}px` } : undefined}
      />
    )
  }
)

AutoResizeTextarea.displayName = 'AutoResizeTextarea'
export default AutoResizeTextarea
