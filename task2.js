// problem 1

// const arr = [1,3,5,7,9 ];
// for (const array of arr){
//     const even = array+1;
//     console.log(even);
// };

// const num = arr.map(p => p+1);
// console.log(num);

// filter()

// const arr = [33, 50, 79, 78, 90, 101, 30];

// const elements = arr.filter(given=> given % 10 === 0);
// console.log(elements);
// const arr = [33, 50, 79, 78, 90, 101, 30];

// const elements = arr.find(given=> given % 10 === 0);
// console.log(elements);

// array of objects Filter()

const instructor = [
    {name: 'Nadi', age: 28, position:"Senior"},
    {name: 'Akil', age: 26, position:"junior"},
    {name: 'sobuj', age: 30, position:"Senior"}
];
// const display = instructor.filter(given=> given.position === "Senior");
// console.log(display);


// reduce()

const sum = instructor.reduce((p, current)=>{
    return p + current.age},0);
console.log(sum); 
