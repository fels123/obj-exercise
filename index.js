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
// let address = new Address("a", "b", "c");
// console.log(address);
// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

//Object equaity
// let address1 = new Address("a", "b", "c");
// let address2 = new Address("a", "b", "c");
// let address3 = address1;

// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address1, address3));

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }

// function areSame(address1, address2) {
//   return address1 === address2;
// }

//Blog post object*****

// const blog = {
//   title: "a",
//   body: "b",
//   author: "c",
//   views: 4,
//   comments: [
//     { author: "d", body: "f" },
//     { body: "e", body: "g" },
//   ],
//   isLive: "true",
// };

// console.log(blog);

//###########Constructor funtion to create a blog

let post = new Post("a", "b", "c");

console.log(post);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.view = 0;
  this.comment = []; //empty array
  this.islive = false;
}
