import clsx from 'clsx'

export type PlayerMark = 'circle' | 'cross'

type SwitchProps = {
  class?: string
  value: PlayerMark
  onSelect: (selectedValue: PlayerMark) => void
}

export default function Switch(props: SwitchProps) {
  return (
    <div
      class={clsx(
        props.class,
        'relative flex w-full rounded-xl bg-mirage p-2',
        "after:absolute after:bottom-[9px] after:top-[9px] after:z-10 after:w-[calc(50%-8px)] after:rounded-xl after:bg-casper after:content-['']",
        'after:transition-translate after:duration-300 after:ease-in',
        props.value === 'circle' ? 'after:translate-x-[100%]' : ''
      )}
    >
      <button
        class={clsx(
          'z-20 flex h-full w-[50%] items-center justify-center rounded-xl px-20 py-3 transition duration-200 ease-out hover:bg-casper/5'
        )}
        role="checkbox"
        aria-label="Cross mark"
        aria-checked={props.value === 'cross'}
        onClick={() => props.onSelect('cross')}
      >
        <svg
          class={clsx(
            'w-[32px]',
            'transition-fill duration-300 ease-in',
            props.value === 'circle' ? 'fill-casper' : 'fill-mirage'
          )}
          viewBox="0 0 64 64"
        >
          <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"></path>
        </svg>
      </button>
      <button
        class={clsx(
          'z-20 flex w-[50%] items-center justify-center rounded-xl px-20 py-3 transition duration-200 ease-out hover:bg-casper/5'
        )}
        role="checkbox"
        aria-label="Circle mark"
        aria-checked={props.value === 'circle'}
        onClick={() => props.onSelect('circle')}
      >
        <svg
          class={clsx(
            'w-[32px]',
            'transition-fill ease duration-300',
            props.value === 'cross' ? 'fill-casper' : 'fill-mirage'
          )}
          viewBox="0 0 64 64"
        >
          <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"></path>
        </svg>
      </button>
    </div>
  )
}