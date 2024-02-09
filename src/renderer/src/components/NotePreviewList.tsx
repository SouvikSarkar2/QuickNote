import { NotePreview } from '@/components'
import { useNotesList } from '@/hooks/useNotesList'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type NotePreviewProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({ onSelect, className, ...props }: NotePreviewProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })
  if (notes.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span> No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          isActive={selectedNoteIndex === index}
          onClick={handleNoteSelect(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
