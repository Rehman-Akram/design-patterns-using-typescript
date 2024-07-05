/* Abstraction, Its provide a technique for hiding all the complexities of implementation and provide user with
the abstracted view to use things regardless there working details. 
*/

//Example, date class is providing methods to get year, day, month etc. and hiding all the details of implementaion.
const date = new Date()

// current year
console.log(date.getFullYear())

// currnet month
console.log(date.getMonth()+1)
console.log(date.getFullYear)
// current date
console.log(date.getDate())