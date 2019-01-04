var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
//var cart = [];
function addToCart(item) {
 // write your code here
 let price = Math.floor(Math.random()*100)+1
 let cartItem = {itemName: item, itemPrice: price}
 cart.push(cartItem)
 return cart
}

function viewCart() {
  // write your code here

}

function total() {
  // write your code here

}

function removeFromCart(item) {
  // write your code here

}

function placeOrder(cardNumber) {
  // write your code here


}
