// Task 1
// function calcSum(a, b, ...other) {
//     console.log(other);
//     return a + b;
// }

// console.log(calcSum(3, 5, 20, 22));

// Task 2

// let drivers = ["Dominic", "Brian", "Letty", "Roman"];
// let antagonists = ["Deckard", "Luke"];

// concat
// let family = drivers.concat(antagonists);

//splice
// drivers.splice(drivers.length, 0, ...antagonists)
// let family = drivers;

// push.apply
// drivers.push.apply(drivers, antagonists);
// let family = drivers;

// spread
// let family = [...drivers, ...antagonists];

//forEach
// let family = [];
// drivers.forEach(item => family.push(item));
// antagonists.forEach(item => family.push(item));



// console.log(family);

// Task 3

// let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"];

// let carUnique = [...new Set(cars)];
// console.log(carUnique);


// Task 4

// function getContryAndCity(country) {
//     return function(city) {
//         return [`${city}`, `${country}`];
//     }

// }
// ContryAndCity = getContryAndCity('Беларусь');
// console.log(ContryAndCity('Минск'));


// Task 5

// const time = 1654420481877;
// const timeFullFormat = new Date(time);

// function formatDate(date) {

//     let dd = date.getDate();
//     if (dd < 10) dd = '0' + dd;

//     let mm = date.getMonth() + 1;
//     if (mm < 10) mm = '0' + mm;

//     let yyyy = date.getFullYear();

//     return yyyy + '.' + mm + '.' + dd;
// }

// console.log(timeFullFormat);
// console.log(formatDate(timeFullFormat));