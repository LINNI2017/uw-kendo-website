export const getDateStr = (dateValue) => {
   const dateYear = dateValue.getFullYear()
   const dateMonth = `0${dateValue.getMonth() + 1}`.slice(-2)
   const dateDate = `0${dateValue.getDate()}`.slice(-2)
   return `${dateYear}-${dateMonth}-${dateDate}`
}

export const reducePeopleMapToList = (peopleMap) => (
   Object.keys(peopleMap).reduce((res, position) =>
      [...res, ...peopleMap[position].map(people => ({...people, position}))], [])
)