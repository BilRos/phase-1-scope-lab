// Write your solution in this file!

var customerName = 'bob';

//modifies the customerName variable

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    console.log(customerName);
}


//setBestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'
    console.log(bestCustomer)
}


//overwrites the best customer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    console.log(bestCustomer);
}


//unsuccessfully tries to reassign the least favorite customer
const leastFavouriteCustomer = 'Dennis';

function changeLeastFavoriteCustomer() {
    leastFavouriteCustomer = 'Jane'
    console.log(leastFavouriteCustomer);
}
changeLeastFavoriteCustomer()
