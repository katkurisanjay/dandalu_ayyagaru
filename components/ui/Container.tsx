import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'main' | 'article' | 'aside' | 'header' | 'footer'
  id?: string
}

export default function Container({
  children,
  className,
  as: Tag = 'div',
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'mx-auto w-full max-w-[1920px] px-4 sm:px-4 sm:px-6 lg:px-10',
        className
      )}
    >
      {children}
    </Tag>
  )
}
