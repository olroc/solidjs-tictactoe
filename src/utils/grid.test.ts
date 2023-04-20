import { getWinner, pickRandomFreeTile } from './grid'

describe('getWinner', () => {
  describe('when there is no winner', () => {
    it('should return no winner and no winning tile', () => {
      const grid: PlayGrid = [
        [
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
        ],
        [
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
        ],
        [
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
        ],
      ]

      expect(getWinner(grid)).toEqual({
        winnerMark: undefined,
        winningTiles: [],
      })
    })
  })

  describe('when there is a winning column', () => {
    it('should return the winner mark and the corresponding winning tile positions', () => {
      const grid: PlayGrid = [
        [
          { mark: 'cross', winningTile: false },
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
        ],
        [
          { mark: 'cross', winningTile: false },
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
        ],
        [
          { mark: 'cross', winningTile: false },
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
        ],
      ]

      expect(getWinner(grid)).toEqual({
        winnerMark: 'cross',
        winningTiles: [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 2, y: 0 },
        ],
      })
    })
  })

  describe('when there is a winning row', () => {
    it('should return the winner mark and the corresponding winning tile positions', () => {
      const grid: PlayGrid = [
        [
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
        ],
        [
          { mark: 'circle', winningTile: false },
          { mark: 'circle', winningTile: false },
          { mark: 'circle', winningTile: false },
        ],
        [
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
        ],
      ]

      expect(getWinner(grid)).toEqual({
        winnerMark: 'circle',
        winningTiles: [
          { x: 1, y: 0 },
          { x: 1, y: 1 },
          { x: 1, y: 2 },
        ],
      })
    })
  })

  describe('when there is a winning diagonal (from up left to bottom right)', () => {
    it('should return the winner mark and the corresponding winning tile positions', () => {
      const grid: PlayGrid = [
        [
          { mark: 'cross', winningTile: false },
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
        ],
        [
          { mark: 'circle', winningTile: false },
          { mark: 'cross', winningTile: false },
          { mark: 'circle', winningTile: false },
        ],
        [
          { mark: undefined, winningTile: false },
          { mark: undefined, winningTile: false },
          { mark: 'cross', winningTile: false },
        ],
      ]

      expect(getWinner(grid)).toEqual({
        winnerMark: 'cross',
        winningTiles: [
          { x: 0, y: 0 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
        ],
      })
    })
  })

  describe('when there is a winning diagonal (from up right to bottom left)', () => {
    it('should return the winner mark and the corresponding winning tile positions', () => {
      const grid: PlayGrid = [
        [
          { mark: 'cross', winningTile: false },
          { mark: undefined, winningTile: false },
          { mark: 'circle', winningTile: false },
        ],
        [
          { mark: 'cross', winningTile: false },
          { mark: 'circle', winningTile: false },
          { mark: 'cross', winningTile: false },
        ],
        [
          { mark: 'circle', winningTile: false },
          { mark: undefined, winningTile: false },
          { mark: 'cross', winningTile: false },
        ],
      ]

      expect(getWinner(grid)).toEqual({
        winnerMark: 'circle',
        winningTiles: [
          { x: 2, y: 0 },
          { x: 1, y: 1 },
          { x: 0, y: 2 },
        ],
      })
    })
  })
})

describe('pickRandomFreeTile', () => {
  it('should randomly pick a free tile from the given grid', () => {
    const grid: PlayGrid = [
      [
        { mark: 'cross', winningTile: false },
        { mark: 'cross', winningTile: false },
        { mark: undefined, winningTile: false },
      ],
      [
        { mark: 'cross', winningTile: false },
        { mark: 'circle', winningTile: false },
        { mark: 'cross', winningTile: false },
      ],
      [
        { mark: 'circle', winningTile: false },
        { mark: undefined, winningTile: false },
        { mark: 'cross', winningTile: false },
      ],
    ]

    const availableResults = [
      { x: 2, y: 1 },
      { x: 0, y: 2 },
    ]

    for (let i = 0; i < 100; i++) {
      expect(availableResults).toContainEqual(pickRandomFreeTile(grid))
    }
  })
})
