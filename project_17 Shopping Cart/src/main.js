// ? Adding DOM 
var shop = document.getElementById("shop");

// Data for Shop Items JSON file
let shopItemsData = [
  {
    id: "1",
    name: "Casual T-Shirt",
    price: "28",
    desc: "Deserunt officia veniam eiusmod id eu irure occaecat aute ex voluptate. Sint culpa sint commodo Lorem id esse do et est pariatur aliquip consectetur. Enim mollit laborum aliqua duis tempor voluptate.",
    img: "images/img-1.jpg"
  },{
    id: "2",
    name: "Office T-Shirt",
    price: "40",
    desc: "Officia esse amet occaecat cupidatat laborum id eu dolor elit tempor aute. Veniam ex anim est eiusmod esse incididunt consectetur ea eu nostrud aute. Culpa tempor tempor nisi incididunt aliquip. Tempor voluptate anim sit enim culpa sint est voluptate proident deserunt ipsum Lorem irure. Laborum adipisicing exercitation nisi anim in. Mollit et est nisi excepteur exercitation deserunt.",
    img: "images/img-2.jpg"
  },{
    id: "3",
    name: "New T-Shirt",
    price: "22",
    desc: "Magna amet ipsum culpa culpa aute. Nisi cillum sint et elit sint incididunt laborum officia pariatur qui laborum cillum. Et ea pariatur incididunt do id non. Ut id et sint excepteur officia ipsum reprehenderit consequat adipisicing et sunt nulla esse.",
    img: "images/img-3.jpg"
  },{
    id: "4",
    name: "Sporty T-Shirt",
    price: "30",
    desc: "Sint ex veniam amet culpa cillum nostrud nostrud qui velit excepteur ea. Ullamco nulla et laboris enim nulla consectetur exercitation qui do id Lorem dolore sint. Ipsum velit id exercitation irure laboris proident incididunt minim anim magna eiusmod id Lorem magna.",
    img: "images/img-4.jpg"
  },
];

let basket = JSON.parse(localStorage.getItem("basket")) || [];

//  Function for generating the data into HTML file 
let genShop = () => {
  return (shop.innerHTML = shopItemsData.map((x) => {
    let { id, name, price, desc, img } = x;
    let search = basket.find((x) => x.id === id) || [];
    return `
    <div id="prod-id${id}" class="item">       
      <img height="300" width="249" src="${img}" alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-qty">
          <h2>$ ${price}</h2>
          <div class="btns">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>
  `;
  })
    .join(""));
  };
  genShop();
  // ! IDK Why but website feels a lot of slow, takes a lot of time to load maybe images

//  When item increment is pressed
let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1
    });
  } else {
    search.item += 1;
  }
  // console.log(basket);
  update(selectedItem);
  localStorage.setItem("basket", JSON.stringify(basket));
};

//  When decrement is pressed
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  if (search.item === 0) return;
  else if (search === undefined) return;
  else {
    search.item -= 1;
  }
  update(selectedItem);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("basket", JSON.stringify(basket));
  // console.log(basket);
};

// Function to update the data  when a button is pressed
let update = (id) => { 
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  // console.log(search.item);
  calculation();
};
 

// Function to calculate total cart items in CartAmount
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y);
};





// Function to retrieve stored basket and update quantity display on page load
window.onload = function () {
  let storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
  basket = storedBasket;
  updateQuantityDisplay();
};


// Function to update the quantity display in the UI
let updateQuantityDisplay = () => {
  basket.forEach((x) => {
    document.getElementById(x.id).innerHTML = x.item;
  });
  calculation();
};

// !main.js:107 Uncaught TypeError: Reduce of empty array with no initial value
//! at Array.reduce (<anonymous>)
//! at calculation (main.js:107:50)
//! at updateQuantityDisplay (main.js:124:3)
 //! at window.onload (main.js:115:3)
