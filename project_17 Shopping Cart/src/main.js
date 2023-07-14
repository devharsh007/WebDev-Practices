// ? Adding DOM 
var shop = document.querySelector("#shop");

// ? Adding JSON Data
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

// ? Function for generating data in HTML file
let genShop = () => {
  return (shop.innerHTML = shopItemsData.map((x) => {   // Using map function to parsing the data from JSON file to shop div 
    let { id, name, price, desc, img } = x      // Adding this line so that we dont have to use x again and again for parsing values
    return `
    <div id="prod-id${id}" class="item">       
      <img id="img" height="300" width="249" src="${img}" alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-qty">
          <h2>$ ${price}</h2>
          <div class="btns">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">0</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>
  `
  }).join("")); 
  //Adding join function so comma "," in JSON will not interfare in parsing DATA
  //Adding "id" in Parent elemtent and Quantity so that we can give unique id to quantity of each product

  // ! IDK Why but website feels a lot of slow, takes a lot of time to load maybe images
}
genShop();


// ? For increment of quantity
let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem); // Use strict equality here
  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1
    });
  } else {
    search.item += 1;
  }
  console.log(basket);
  update();
}

// ? For decrement of quantity
let decrement = (id) => {
  let selectedItem = id;
   let search = basket.find((x) => x.id === selectedItem); // Use strict equality here
  if (search.item <= 0) return;
  else {
    search.item -= 1;
  }
  console.log(basket);
  update();
}

// ! UPDATE FUCNTIONN IS NOT RUNNING  SHOWING ERRRORS WILL FIX 2MOROW

// ? to update the quantity
let update = (selectedItem) => {
  console.log(basket);
 };

// ? Making a basket for cart 
let basket = [];
