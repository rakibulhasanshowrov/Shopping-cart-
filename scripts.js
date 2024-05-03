let addBtn=document.querySelector('#product-list')
addBtn.addEventListener('click',addTocart)
let cartList=document.getElementById("cart-list");
cartList.addEventListener('click',removeFromCart)




//define Function 
function addTocart(e){
    console.log(e.target)
    let parent=e.target.parentElement.parentElement
    let productName=parent.querySelector('td:first-child').textContent
    let productPrice=parent.querySelector('td:nth-child(2)').textContent
    console.log(productName)
    console.log(productPrice)
    let cartItem=document.createElement('tr')
    cartItem.innerHTML=`
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Remove</button></td>
    `
    cartList.appendChild(cartItem)
    cartDisplay
}
function removeFromCart(e){
    let parent=e.target.parentElement.parentElement
    parent.innerHTML=''
}