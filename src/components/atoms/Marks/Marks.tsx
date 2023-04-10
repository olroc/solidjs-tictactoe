import clsx from 'clsx'
import type { Component } from 'solid-js'
import { createMemo } from 'solid-js'

export type MarksSize = 'sm' | 'md'

interface MarksProps {
  class?: string
  size?: MarksSize
}

const sizeMapper: Record<MarksSize, { pixelSize: number; imgClass: string }> = {
  sm: {
    pixelSize: 32,
    imgClass: 'w-8 h-8 mr-2',
  },
  md: {
    pixelSize: 64,
    imgClass: 'w-15 h-15 mr-3',
  },
}

const Marks: Component<MarksProps> = props => {
  const mappedSize = createMemo(() => sizeMapper[props.size ?? 'sm'])

  return (
    <div class={clsx(props.class, 'flex items-center justify-center')}>
      <img
        class={mappedSize().imgClass}
        width={mappedSize().pixelSize}
        height={mappedSize().pixelSize}
        src="/img/icon-x.0b42b1fa.svg"
      />

      <img
        class={mappedSize().imgClass}
        width={mappedSize().pixelSize}
        height={mappedSize().pixelSize}
        src="/img/icon-o.7608cc08.svg"
      />
    </div>
  )
}

export default Marks
