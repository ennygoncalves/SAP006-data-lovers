export const filmFilter = (element, filter) => {

  switch (filter) {
    case ("A-Z"):
      return element.sort((a, b) => a.title > b.title ? 1 : -1);

    case ("Z-A"):
      return element.sort((a, b) => a.title > b.title ? -1 : -1);

    case ("older"):
      return element.sort((a, b) => parseInt(a.release_date) > parseInt(b.release_date) ? 1 : -1);

    case ("newer"):
      return element.sort((a, b) => parseInt(a.release_date) > parseInt(b.release_date) ? -1 : 1);

    case ("low"):
      return element.sort((a, b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? 1 : -1);

    case ("high"):
      return element.sort((a, b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? -1 : 1);

    case ("internal"):
      return element.sort((a, b) => parseInt(a.chronological_position) > parseInt(b.chronological_position) ? 1 : -1);

  }

}

export const filterCaracters = (caracters, movieTitle) => {
  let filteredCaracters = []
  for (let caracter of caracters) {
    if (caracter.movie_title == movieTitle) {
      filteredCaracters.push(caracter)
    }
  }
  return filteredCaracters
}

export const meanAge = (film) => {
  let numberOfCharacters = film.people.length
  let sum = 0
  for (let person of film.people) {
    let age = parseInt(person.age)
    if (isNaN(age)) {
      continue
    }
    sum += parseInt(person.age)
  }
  return sum / numberOfCharacters
}


