//ONLINE SHOPPING
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
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let inCart=[]
  for(let i = 0; i<cart.length; i++){
    inCart.push(cart[i].itemName+' at $'+cart[i].itemPrice)
  }
if (cart.length===1){
  return `In your cart, you have ${inCart}.`
}else if(cart.length>1){
  var last = inCart.pop()
  return `In your cart, you have ${inCart.join(', ')}, and ${last}.`
}else{
  return 'Your shopping cart is empty.'
}
}

function total() {
  // write your code here
let add = 0
  for(let i = 0; i<cart.length; i++){
 add = add + cart[i].itemPrice
}
return add
}

function removeFromCart(item) {
  // write your code here
  let isItem = false
  for(let i = 0; i<cart.length; i++){
if(cart[i].itemName===item){
  isItem = true
  cart.splice(i,1)
  return cart
}
}
if(!isItem){
  return 'That item is not in your cart.'
}
}

function placeOrder(cardNumber) {
  // write your code here
if(!cardNumber){
  return "Sorry, we don't have a credit card on file for you."
}else{
let checkOut = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
 cart =[];
return checkOut
}
}

