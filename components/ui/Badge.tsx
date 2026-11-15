import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'saffron' | 'gold' | 'green' | 'neutral' | 'outline'
  size?: 'sm' | 'md'
  className?: string
  icon?: ReactNode
}

export default function Badge({
  children,
  variant = 'saffron',
  size = 'sm',
  className,
  icon,
}: BadgeProps) {
  const variants = {
    saffron: 'bg-[#FFF7ED] text-[#EA580C] border border-[#FDBA74]/40',
    gold: 'bg-[#FEF9C3] text-[#92400E] border border-[#D4A72C]/30',
    green: 'bg-[#F0FDF4] text-[#15803D] border border-[#86EFAC]/40',
    neutral: 'bg-[#F5F5F4] text-[#57534E] border border-[#E7E5E4]',
    outline: 'bg-transparent text-[#57534E] border border-[#E7E5E4]',
  }

  const sizes = {
    sm: 'text-xs px-2.5 py-1 gap-1',
    md: 'text-sm px-3 py-1.5 gap-1.5',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  )
}
