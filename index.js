import orders from "/data.js";
// console.log(orders)

const divEl = document.getElementById("divEl");
const targetOrders = document.getElementById("target-order");
const items = document.getElementById("items");
const itemPrices = document.getElementById("item-prices");
const totalPriceText = document.getElementById("total-price-text");
const chosenOrder = document.getElementById("chosen-order");
const totalPrice = document.getElementById("total-price");
const form = document.getElementById("form");
let nameInbut = document.getElementById("name");
let numInput = document.getElementById("num-input");
let cvInput = document.getElementById("cv-input");
console.log(form);
console.log(nameInbut, "when");
console.log(cvInput);
console.log(numInput);
let total = 0;
console.log(totalPriceText);

console.log(targetOrders);

divEl.addEventListener("click", function (e) {
  if (e.target.dataset.plus) {
    orderhtml(e.target.dataset.plus);
  }
});

function orderhtml(id) {
  chosenOrder.style.display = "block";

  let targetId = Number(id);
  console.log(targetId);

  const targetOrder = orders.filter(function (order) {
    return order.id === targetId;
  })[0];
  

  let item = document.createElement("div");
  item.classList.add("item");
  items.appendChild(item);

  let itemLeft = document.createElement("div");
  itemLeft.classList.add("item");
  item.appendChild(itemLeft);

  let name = document.createElement("h4");
  name.textContent = targetOrder.name;
  itemLeft.appendChild(name);

  let removeBtn = document.createElement("span");
  removeBtn.textContent = "remove";
  removeBtn.classList.add("btn-remove-item");
  itemLeft.appendChild(removeBtn);

  let price = document.createElement("h5");
  price.textContent = ` $${targetOrder.price}`;
  item.appendChild(price);

  total += targetOrder.price;
  totalPrice.textContent = total;

  removeBtn.addEventListener("click", function () {
    item.remove();
    total -= targetOrder.price;
    totalPrice.textContent = total;
  });
}

function rendering() {
  // let orderhtml = ''

  return orders
    .map(function (order) {
      const { name, ingredients, id, price, emoji } = order;

      let detail = ingredients
        .map(function (ing) {
          return ing;
        })
        .join(", ");

      console.log(detail);

      return `
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


    
    `;
    })
    .join("");
}
divEl.innerHTML = rendering(orders);

console.log("soo dhawaaw abdalla");

document.getElementById("Complete").addEventListener("click", function(){
    if(total> 0){
        complete()
    }else{
        alert(' you donot have order')
    }
});

function complete() {
  document.getElementById("form").style.display = "flex";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("waan  bixiyey");
  form.style.display = "none";

  console.log(nameInbut.value);
  let dataForm = new FormData(form);
  const name = dataForm.get("name");
  console.log(name);
  document.getElementById(
    "completed-msg"
  ).textContent = ` Thanks, ${name} your order is on it's way`;
  document.getElementById("completed-msg").classList.add("message");
  nameInbut.value = "";
  numInput.value = "";
  cvInput.value = "";
});
