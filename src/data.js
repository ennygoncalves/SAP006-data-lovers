export const ordering = (element, filter) =>{
  
  switch (filter){
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



