import { filmFilter } from '../src/data.js';


test('Faz a filtragem de A-Z', () => {
  expect(filmFilter(
    [
      {
        "title": "My Neighbor Totoro"
      },
      {
        "title": "Castle in the Sky"
      }
    ], "A-Z"
  )
  ).toStrictEqual([
    {
      "title": "Castle in the Sky"
    },
    {
      "title": "My Neighbor Totoro"
    }
  ])
})
