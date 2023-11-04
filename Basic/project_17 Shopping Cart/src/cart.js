let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("basket")) || [];
console.log(basket);

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);

};
calculation();

let genCartItems = () => {
    if (basket.length !== 0) {
      return (shoppingCart.innerHTML = basket
        .map((x) => {
          let { id, item } = x;
          let search = shopItemsData.find((y) => y.id === id) || [];
          // ! this serach function shows undefined IDK WHY ;(
          console.log(search);
        return `
        <div class="cart-item">
        <img width="100" src="${search.img}"/>
        <div class="details">

        <div class="title-price-x">
          <h4>
            <p>${search.name}</p>
            <p>${search.price}</p>
          </h4>
          <i class="bi bi-x-lg"></i>
        </div>
        <div class="cart-button">

        </div>
        <h3></h3>
        </div>
        `
      }).join(""));
    }
    else {
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="index.html">
        <button class = "HomeBtn">Back to Home</button></a>
        `;
    }
};
genCartItems();