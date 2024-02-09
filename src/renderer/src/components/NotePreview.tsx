import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  const date = formatDateFromMs(lastEditTime)
  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-700/45': isActive,
          'hover:bg-slate-900/25': !isActive
        },
        className
      )}
      {...props}
    >
      <h1 className="mb-1 font-bold truncate">{title}</h1>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{date}</span>
    </div>
  )
}
