import type { Component } from 'solid-js'

interface CircleProps {
  class?: string
}

const Circle: Component<CircleProps> = (props) => {
  return <img class={props.class} src="/img/icon-o.7608cc08.svg" />
}

export default Circle
