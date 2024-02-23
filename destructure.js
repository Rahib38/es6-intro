// objects
const actor = {
    name : "Tasniya",
    age : 18,
    phone : '0162548148'
};
const {phone} = actor;
console.log (phone);

//  array

function doubleIt (a, b){
    return [a*2, b*3];
}
const [num1, num2] = doubleIt(15, 20);
console.log (num1 , num2);