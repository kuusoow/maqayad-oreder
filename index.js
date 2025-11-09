import orders from '/data.js'
// console.log(orders)
                   
const divEl = document.getElementById('divEl')
const targetOrders = document.getElementById('target-order')
const ulist =document.getElementById('ulist')
const itemPrices =document.getElementById('item-prices')
const totalPriceText =document.getElementById('total-price-text')
const chosenOrder = document.getElementById('chosen-order')
const totalPrice =document.getElementById('total-price')

console.log(totalPriceText)


// const itemList = document.getElementById('item')
// const removeText = document.getElementById('remove')
console.log(targetOrders)


divEl.addEventListener("click",function(e){
    if(e.target.dataset.plus){
        orderhtml(e.target.dataset.plus)
    }
})
let total = 0
 function orderhtml(id){
    chosenOrder.style.display ='block'
    
    let targetId = Number(id)
    console.log(targetId)

const targetOrder = orders.filter(function(order){
    return order.id === targetId

    
})[0]
console.log('waala taabtay')
let item = document.createElement('li')
item.classList.add('name')
item.textContent = targetOrder.name
ulist.appendChild(item)
let btn =document.createElement('button')
btn.textContent = 'remove'
btn.classList.add('btn-remove-item')

item.appendChild(btn)
let itemPrice = document.createElement('h5')
itemPrice.classList.add('price')
itemPrice.textContent = ` $${targetOrder.price}`

itemPrices.appendChild(itemPrice)

total += Number(targetOrder.price)
console.log(total)

totalPrice.textContent = `$${total}`


// let totalPrice = document.createElement('h4')
// totalPrice.classList.add('price')

// totalPrice.textContent = ` $${targetOrder.price + targetOrder.price}`
// totalPriceText.appendChild(totalPrice)

                
            



 } 


//  <div class="chosen-order">
//                                 <h3>your order</h3>
//                                 <div class="items">
//                                     <div class="item">
//                                         <!-- <div class="name">
//                                             <ul id="ulist">

//                                             </ul>
//                                         </div>
//                                         <div class="remove" id ="remove"></div> -->
//                                     </div>
//                                     <div class="item-price"></div>
//                                 </div>
//                                 <div class="border-line"></div>
//                                 <div class="total-price">
//                                     <h5>Toatal price:</h5>
//                                     <p></p>
//                                 </div>
//                                 <div class="btn">Complete order</div>
// </div>







function rendering(){
    // let orderhtml = ''
   
 return orders.map(function(order){
    const{name ,ingredients,id,price,emoji} =order
    
   let detail =  ingredients.map(function(ing){
        return ing
    }).join(", ")

    console.log(detail)
    
    return`
    <div class="all-orders">
            <div class="orders">
                    <div class="order-emoji"><p>${emoji}</p></div>
                    <div class="order-info">
                <h3>${name}</h3>
                <h4>${detail}</h4>
                <h5>$${price}</h5>
                </div>
                 <h6 data-plus="${id}"> + </h6> 
             </div>  
        
    </div>


    
    `
    
}).join('')


}
divEl.innerHTML = rendering(orders)

console.log('soo dhawaaw abdalla')