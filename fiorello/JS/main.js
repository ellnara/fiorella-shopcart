var products = document.getElementsByClassName("product");
var productInfo = document.getElementsByClassName("product-info");
let id = 0;
window.onload = function () {
  //document.querySelector(".cart-drpdown p").remove();
  // document.querySelector("#cart .cart-total").innerHTML += item.price;
  for (let index = 0; index < localStorage.length; index++) {
    for (const item of productInfo) {
      let obj = localStorage.getItem(index + 1);
      // console.log(JSON.parse(obj).name);
      let cart = `<div class="cart-item">
                    <div class="cart-item-info"> 
                    <a href="">${JSON.parse(obj).name}</a>
                    <span>${JSON.parse(obj).price}</span>
                    </div>
                    <div class="delete">
                    <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>`;
      list.querySelector(".total-price").style.visibility = "visible";
      list.querySelector(".total-price span").innerText =
        parseInt(list.querySelector(".total-price span").innerText) +
        parseInt(JSON.parse(obj).price);
      list.innerHTML += cart;
    }
  }
};
for (const item of productInfo) {
  var add = item.querySelector("span");
  var addInfo = item.querySelector("span").innerText;
  add.onmouseover = function () {
    item.querySelector("span").innerText = "Add To Cart";
    item.querySelector("span").style.color = "red";
  };
  add.onmouseout = function () {
    item.querySelector("span").innerText = addInfo;
    item.querySelector("span").style.color = "inherit";
  };
}
let list = document.querySelector(".cart-drpdown");
for (let index = 0; index < products.length; index++) {
  var addToCart = products[index].querySelector(".product-info span");
  const item = {
    id: index + 1,
    name: productInfo[index].firstElementChild.textContent,
    price: productInfo[index].lastElementChild.textContent,
  };
  addToCart.onclick = function () {
    localStorage.setItem(index + 1, JSON.stringify(item));
  };
}
for (let index = 0; index < products.length; index++) {
  let remove = products[index].querySelector(".fa-xmark");
  remove.onclick = function () {
    JSON.parse(obj).remove();
  };
}
