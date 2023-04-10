import type { Component } from 'solid-js'

interface CrossProps {
  class?: string
}

const Cross: Component<CrossProps> = (props) => (
  <img class={props.class} src="/img/icon-x.0b42b1fa.svg" />
)

export default Cross
