const actor = {
    name : "Tasniya",
    age : 18,
    phone : '0162548148'
};
const property = Object.keys(actor);
console.log(property);
const values = Object.values(actor);
console.log(values);
const entries = Object.entries(actor);
console.log(entries );

// delete
const {phone, ...shortActor} = actor;
console.log (shortActor);