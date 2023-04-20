export const getWinner: (grid: PlayGrid) => {
  winnerMark?: PlayerMark
  winningTiles: Array<{ x: number; y: number }>
} = grid => {
  const winningTiles = []

  // Columns check
  for (let i = 0; i < 3; i++) {
    if (
      grid[i][0].mark !== undefined &&
      grid[i][0].mark === grid[i][1].mark &&
      grid[i][1].mark === grid[i][2].mark
    ) {
      winningTiles.push({ x: i, y: 0 }, { x: i, y: 1 }, { x: i, y: 2 })
    }
  }

  // Rows check
  for (let i = 0; i < 3; i++) {
    if (
      grid[0][i].mark !== undefined &&
      grid[0][i].mark === grid[1][i].mark &&
      grid[1][i].mark === grid[2][i].mark
    ) {
      winningTiles.push({ x: 0, y: i }, { x: 1, y: i }, { x: 2, y: i })
    }
  }

  if (
    grid[0][0].mark !== undefined &&
    grid[0][0].mark === grid[1][1].mark &&
    grid[1][1].mark === grid[2][2].mark
  ) {
    winningTiles.push({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 })
  }

  if (
    grid[2][0].mark !== undefined &&
    grid[2][0].mark === grid[1][1].mark &&
    grid[1][1].mark === grid[0][2].mark
  ) {
    winningTiles.push({ x: 2, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 })
  }

  return {
    winnerMark:
      winningTiles.length > 0
        ? grid[winningTiles[0].x][winningTiles[0].y].mark
        : undefined,
    winningTiles,
  }
}

export const pickRandomFreeTile: (grid: PlayGrid) => {
  x: number
  y: number
} = grid => {
  const freeTiles = grid.reduce<Array<{ x: number; y: number }>>(
    (acc, currentColumn, column) => {
      return [
        ...acc,
        ...currentColumn.reduce<Array<{ x: number; y: number }>>(
          (acc2, currentTile, row) => {
            return currentTile.mark === undefined
              ? [...acc2, { x: column, y: row }]
              : acc2
          },
          []
        ),
      ]
    },
    []
  )

  return freeTiles[Math.floor(Math.random() * freeTiles.length)]
}
