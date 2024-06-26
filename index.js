//Exercise -1 Address Object
//create an object with street,city ,zipcode
//function name showAddress(address)

const address = {
  street: "goal street",
  city: "Naput",
  zipCode: 7846,
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}
showAddress(address);
