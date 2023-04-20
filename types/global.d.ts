export {}

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  type PlayerMark = 'circle' | 'cross'

  type PlayGrid = Array<
    Array<{ mark: PlayerMark | undefined; winningTile: boolean }>
  >
}
