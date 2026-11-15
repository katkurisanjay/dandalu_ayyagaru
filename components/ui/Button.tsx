'use client'

import { forwardRef, useRef, MouseEvent, ReactNode } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  magnetic?: boolean
  href?: string
  id?: string
  'aria-label'?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    className,
    onClick,
    type = 'button',
    disabled = false,
    magnetic = false,
    id,
    'aria-label': ariaLabel,
  },
  ref
) {
  const magnetRef = useRef<HTMLButtonElement>(null)
  const x = useSpring(0, { stiffness: 150, damping: 15 })
  const y = useSpring(0, { stiffness: 150, damping: 15 })
  const translateX = useTransform(x, (v) => v * 0.17)
  const translateY = useTransform(y, (v) => v * 0.17)

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !magnetRef.current) return
    const rect = magnetRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none'

  const variants = {
    primary:
      'bg-[#F97316] text-white hover:bg-[#EA580C] hover:-translate-y-px active:translate-y-0 shadow-[0_2px_8px_rgba(249,115,22,0.25)] hover:shadow-[0_4px_16px_rgba(249,115,22,0.35)]',
    secondary:
      'bg-white text-[#171717] border border-[#E7E5E4] hover:border-[#F97316] hover:text-[#F97316] hover:-translate-y-px active:translate-y-0 shadow-[0_1px_3px_rgba(23,23,23,0.06)]',
    ghost:
      'text-[#57534E] hover:text-[#F97316] hover:bg-[#FFF7ED]',
    outline:
      'border border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white hover:-translate-y-px active:translate-y-0',
  }

  const sizes = {
    sm: 'h-10 px-5 text-sm min-w-[44px] min-h-[44px]',
    md: 'h-12 px-6 text-sm min-w-[44px]',
    lg: 'h-14 px-8 text-base',
  }

  if (magnetic) {
    return (
      <motion.button
        ref={magnetRef as React.RefObject<HTMLButtonElement>}
        id={id}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel}
        style={{ translateX, translateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {children}
      </motion.button>
    )
  }

  return (
    <button
      ref={ref}
      id={id}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  )
})

export default Button
