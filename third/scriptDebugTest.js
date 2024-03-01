// const users = [
//     { name: 'Kyle', age:24},
//     { name: 'Joey', age:24},
//     { name: 'Bailee', age:22},
//     { name: 'Jim', age:34},
//     { name: 'Phil' },
//     { name: 'Sarah', age:54},
//     { name: 'John', age:42},
// ]

// users.forEach(user => {
//     printUser(user)
// })

// function printUser(user) {
//     if (user.age != null) {
//         console.log(`User ${user.name} will be ${user.age + 5} years old in five years.`)
//     } else {
//         console.log(`User is called ${user.name}`)
//     }    
// }


const button = document.getElementById('btn')
const input = document.getElementById('textElement')



button.addEventListener('click', () => {
    console.log(input.value
    // debugger;
})