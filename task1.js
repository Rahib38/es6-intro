// problem 1

// 1 
// const multiply = (num1, num2, num3) => num1* num2 * num3;
// console.log(multiply(8, 5, 3));

// 2
// const sentence = `I am a web developer. I love to code. I love to eat biryani.`
// console.log(sentence);

// 3
// const add = (num1 , num2 = 7) => num1 + num2;
// console.log(add(9, 11));

// problem 2

// const friends = ['solim', 'mahadi', 'rahman', 'kobir', 'naim'];
// const newArray = [];
// const evenFriends = (friends) => {
//     for (const friend of friends){
//         if (friend.length % 2 === 0){
//             newArray.push(friend);
            
//         }
//     }
//     return newArray;
// } 
// console.log(evenFriends(friends));


// problem 3
let sum = 0;
let i = 0;
const numbers = [10, 20, 60, 30, 70];
const elements = (numbers) => {
    
    for (const num of numbers){
      numbers[i] = num * num;
        sum += numbers[i];
        i++;
    }
    const avg = sum / numbers.length;
    return avg.toFixed(2);
}
console.log(elements(numbers))