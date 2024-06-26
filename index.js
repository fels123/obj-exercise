//Exercise -1 Address Object
//create an object with street,city ,zipcode
//function name showAddress(address)

// const address = {
//   street: "goal street",
//   city: "Naput",
//   zipCode: 7846,
// };

// function showAddress(address) {
//   for (let key in address) console.log(key, address[key]);
// }
// showAddress(address);

// Factory and constructor function
// Exercise -2

//factory function
// let address = createAddress("a", "b", "c");
// console.log(address);

// function createAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }

//Constructor function
let address = new Address("a", "b", "c");
console.log(address);
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
