import { filmFilter } from '../src/data.js';
import { filterCaracters } from '../src/data.js';
import { meanAge } from '../src/data.js';

//filmography

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

test('Faz a filtragem de Z-A', () => {
  expect(filmFilter(
    [
      {
        "title": "Kiki's Delivery Service"
      },
      {
        "title": "My Neighbor Totoro"
      }
    ], "Z-A"
  )
  ).toStrictEqual([
    {
      "title": "My Neighbor Totoro"
    },
    {
      "title": "Kiki's Delivery Service"
    }
  ])
})

test('Versão - mais antigo para o mais recente', () => {
  expect(filmFilter(
    [
      {
        "release_date": "My Neighbor Totoro"
      },
      {
        "release_date": "Castle in the Sky"
      }
    ], "Z-A"
  )
  ).toStrictEqual([
    {
      "release_date": "Castle in the Sky"
    },
    {
      "release_date": "My Neighbor Totoro"
    }
  ])
})

test('Lançamento - do mais recente ao mais antigo', () => {
  expect(filmFilter(
    [
      {
        "release_date": "Castle in the Sky"
      },
      {
        "release_date": "My Neighbor Totoro"
      }
    ], "Z-A"
  )
  ).toStrictEqual([
    {
      "release_date": "My Neighbor Totoro"
    },
    {
      "release_date": "Castle in the Sky"
    }
  ])
})


test('Classificação - alta para baixa', () => {
  expect(filmFilter(
    [
      {
        "rt_score": "My Neighbor Totoro"
      },
      {
        "rt_score": "Castle in the Sky"
      }
    ], "Z-A"
  )
  ).toStrictEqual([
    {
      "rt_score": "Castle in the Sky"
    },
    {
      "rt_score": "My Neighbor Totoro"
    }
  ])
})

test('Classificação - baixa para alta', () => {
  expect(filmFilter(
    [
      {
        "rt_score": "Castle in the Sky"
      },
      {
        "rt_score": "My Neighbor Totoro"
      }
    ], "Z-A"
  )
  ).toStrictEqual([
    {
      "rt_score": "My Neighbor Totoro"
    },
    {
      "rt_score": "Castle in the Sky"
    }
  ])
})

//characters select

test('Faz a filtragem do personagem por filme', () => {
  expect(filterCaracters(
    [
      {
        "movie_title": "My Neighbor Totoro"
      },
      {
        "movie_title": "Castle in the Sky"
      }
    ], "My Neighbor Totoro"
  )
  ).toStrictEqual([
    {
      "movie_title": "My Neighbor Totoro"
    }
  ])
})

test('Faz a filtragem com mais de um personagem por filme', () => {
  expect(filterCaracters(
    [
      {
        "movie_title": "My Neighbor Totoro"
      },
      {
        "movie_title": "My Neighbor Totoro"
      },
      {
        "movie_title": "Castle in the Sky"
      }
    ], "My Neighbor Totoro"
  )
  ).toStrictEqual([
    {
      "movie_title": "My Neighbor Totoro"
    },
    {
      "movie_title": "My Neighbor Totoro"
    }
  ])
})

