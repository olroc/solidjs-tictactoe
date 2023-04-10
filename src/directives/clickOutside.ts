import type { Accessor } from 'solid-js'
import { onCleanup } from 'solid-js'

export default function clickOutside(
  el: Element,
  accessor: Accessor<any>
): void {
  const onClick = (e: Event): void =>
    !el.contains(e.target as Node) && accessor()?.()
  document.body.addEventListener('click', onClick)

  onCleanup(() => {
    document.body.removeEventListener('click', onClick)
  })
}
