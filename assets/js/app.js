import productCard from "./product.js";
const loadData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  const data = await res.json();

  productCard(data);

  let productCode = "";

  data.map((product) => {
    productCode += productCard(product);
  });

  document.querySelector("#root").innerHTML = productCode;
};

loadData();

// shopping cart project

const showQuantityButton = document.querySelector(".showQuantity");
let cartQuantity = 0;
showQuantityButton.addEventListener("click", () => {
  console.log(`Cart Quantity is : ${cartQuantity}`);
});

const addToCartButton = document.querySelector(".AddToCart");
addToCartButton.addEventListener("click", () => {
  console.log(`Now Cart Quantity Is : ${cartQuantity++}`);
});

const increaseDoubleButton = document.querySelector(".increaseDouble");
increaseDoubleButton.addEventListener("click", () => {
  console.log(`cartQuantity Now : ${(cartQuantity += 2)}`);
});

const increaseThreeDouble = document.querySelector(".increaseThree");
increaseThreeDouble.addEventListener("click", () => {
  console.log(`increase Three Double : ${(cartQuantity += 3)}`);
});

// Reset quantity previous position

const resetButton = document.querySelector(".ResetCart");
resetButton.addEventListener("click", () => {
  console.log(` Reset Cart : ${(cartQuantity = 0)}`);
});

const oneLine = (data) => console.log(data);
oneLine("something");

const outer = () => {
  console.log("outer function");
  return function inner() {
    console.log("inner function");
  };
};

const innerF = outer();
innerF();

const product = [
  {
    id: 1,
    img: "/assets/images/shirt1.jpg",
    title: "This is my first Image",
    text: "dream is not what you see in sleep dream is the thing which can not let you sleep",
  },
  {
    id: 2,
    img: "/assets/images/shirt2.jpg",
    title: "This is my Two Image",
    text: "dream is not what you see in sleep dream is the thing which can not let you sleep",
  },
  {
    id: 1,
    img: "/assets/images/shirt3.jpg",
    title: "This is my Third Image",
    text: "dream is not what you see in sleep dream is the thing which can not let you sleep",
  },
  {
    id: 1,
    img: "/assets/images/shirt4.jpg",
    title: "This is my first Image",
    text: "dream is not what you see in sleep dream is the thing which can not let you sleep",
  },
];

const productContainer = document.querySelector(".productContainer");

const showDataFormArray = (product) => {
  product.map((item) => {
    const { img, title, text } = item;

    const htmlCode = `

    <div class="single-product">

    <div class="singleImage">
   <img src="${img}" />
    </div>
    <h3>${title}</h3>
    <p>${text}</p>


    </div>


      `;

    productContainer.innerHTML += htmlCode;
  });
};

showDataFormArray(product);


// self invoking function
(function outer(x) {
  return (function (y) {
    console.log(x)
  })(150)
})(100)


let count = 0;

(function outer() {
  if (count ===0) {
    let count = 1;
    console.log(count)
  }
  console.log(count)
})()


// for loop

// for (let i = 0; i <= 5; i++){
//   setTimeout(() => {
// console.log(i)
//   },1000)
// }


// closure clear concept


const getCapital = (capital) => {

  return function (interest) {
    return (capital * interest) / 100;
  }
}

const business = getCapital(100000);
const profit = business(25)
console.log(profit)


let count1 = 0;


const getCount = () => {
  count++;
  return count;
}


console.log(`Count Value :`, getCount());



// This is called closure parent er property use korche tar children
const add1=()=>{
  let counter = 0;

  const plus = () => {
    counter++;
  }
  plus()

  return counter;
}

console.log(add1())

// ? javascript scope and scope chain


// showUserName
const userContainer = document.querySelector('.user-container')
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => showUserName(data))

const showUserName = (users) => {
  users.map((user) => {
    const { name, title } = user;

    const htmlCode = `

    <div class="single-user">
    <p> ${name}</p>


    </div>


    `;

    userContainer.innerHTML += htmlCode;

    })
  }


// function constructor pattern design start here


