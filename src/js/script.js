let fixdesktop = document.getElementById("fixdesktop");
window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    fixdesktop.classList.add("desktopfix");
  } else {
    fixdesktop.classList.remove("desktopfix");
  }
});
let fixmobil = document.getElementById("fixmobil");
window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    fixmobil.classList.add("mobilfix");
  } else {
    fixmobil.classList.remove("mobilfix");
  }
});
function menuOpen() {
  let menubar = document.getElementById("menubar");
  if (menubar.style.top == "-100%") {
    menubar.style.top = 0;
    menubar.classList.add("menuopen");
  } else {
    menubar.style.top = "-100%";
  }
}

const icons = ["fa-car-side", "fa-user-shield", "fa-right-left", "fa-phone"];
const titles = [
  "Free Shipping",
  "Security Payment",
  "30 Day Return",
  "24/7 Support",
];
const descriptions = [
  "Free on order over $300",
  "100% security payment",
  "30 day money guarantee",
  "Support every time fast",
];

let data = document.getElementById("data");
data.innerHTML = titles
  .map(
    (titles, i) =>
      `<div class="bg-[#f4f6f8] text-center p-[24px] rounded-2xl">
            <div class="pb-[48px]">
              <div
                class="icon flex items-center justify-center mx-auto w-30 h-30 bg-[#ffb524] rounded-[50%]"
              >
                <i class="fa-solid ${icons[i]} text-[60px] text-white"></i>
              </div>
            </div>
            <div>
              <h5 class="text-[20px] font-bold">${titles}</h5>
              <p class="open">${descriptions[i]}</p>
            </div>
          </div>`,
  )
  .join("");

const allProducts = ["All Products", "Vegetables", "Fruits", "Bread", "Meat"];
let category = document.getElementById("category");
allProducts.forEach((item) => {
  category.innerHTML += `
    <li class="rounded-3xl p-2 bg-[#f4f6f8] hover:bg-[#ffb524] hover:text-white duration-300 cursor-pointer w-[130px] rounded-[50rem] text-[#45595b] flex items-center justify-center">
      ${item}
    </li>
  `;
});

const productImg = [
  "https://themewagon.github.io/fruitables/img/fruite-item-5.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-5.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-4.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-3.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-5.jpg",
];
const productTitle = [
  "Grapes",
  "Grapes",
  "Raspberries",
  "Apricots",
  "Banana",
  "Oranges",
  "Raspberries",
  "Grapes",
];
const productDesc = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
];
const productPrice = [
  "4.99",
  "4.99",
  "4.99",
  "4.99",
  "4.99",
  "4.99",
  "4.99",
  "4.99",
];

let fruits = document.getElementById("fruits");
fruits.innerHTML = productTitle
  .map(
    (productTitle, i) =>
      `<div class='py-[12px]'>
          <div
            class=" border border-[#ffb524] rounded-xl mx-[12px] overflow-hidden hover:shadow-[0 0 55px rgba(0, 0, 0, 0.4)] hover:shadow-2xl duration-300"
          >
            <div class="relative overflow-hidden">
              <img
                src="${productImg[i]}"
                alt=""
                class="w-full rounded-t-xl hover:scale-125 duration-300"
              />
              <span
                class="absolute top-2 left-2 px-3 py-1 rounded-2xl bg-[#ffb524] text-white"
                >Fruits</span
              >
            </div>
            <div class="text-center p-[24px]">
              <div class="mb-[16px]">
                <h4 class="text-[22px] text-[#45595b] font-bold">
                  ${productTitle}
                </h4>
                <p class="open text-[#747d88]">${productDesc[i]}</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="open text-[20px] font-medium text-[#45595b]">
                  $${productPrice[i]} / kg
                </p>
                <a
                  href=""
                  class="hover:bg-[#ffb524] hover:text-white duration-300 border border-[#ffb524] font-medium rounded-4xl px-[16px] py-[6px] text-primary text-[#81c408]"
                  ><i class="fa-solid fa-bag-shopping mr-2 text-[#81c408]"></i
                  >Add to cart</a
                >
              </div>
            </div>
          </div>
      </div>`,
  )
  .join("");

let vegetables = document.getElementById("vegetables");
const productImg2 = [
  "https://themewagon.github.io/fruitables/img/vegetable-item-6.jpg",
  "https://themewagon.github.io/fruitables/img/vegetable-item-1.jpg",
  "https://themewagon.github.io/fruitables/img/vegetable-item-3.png",
  "https://themewagon.github.io/fruitables/img/vegetable-item-4.jpg",
  "https://themewagon.github.io/fruitables/img/vegetable-item-5.jpg",
  "https://themewagon.github.io/fruitables/img/vegetable-item-6.jpg",
  "https://themewagon.github.io/fruitables/img/vegetable-item-5.jpg",
  "https://themewagon.github.io/fruitables/img/vegetable-item-6.jpg",
];
const productTitle2 = [
  "Parsely",
  "Parsely",
  "Banana",
  "Bell Papper",
  "Potatoes",
  "Parsely",
  "Potatoes",
  "Parsely",
];
const productDesc2 = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
];
const productPrice2 = [
  "4.99",
  "4.99",
  "4.99",
  "4.99",
  "4.99",
  "4.99",
  "4.99",
  "4.99",
];

vegetables.innerHTML = productTitle2
  .map(
    (productTitle2, i) =>
      `<div class='py-[12px]'>
          <div
            class=" border border-[#ffb524] rounded-xl mx-[12px] overflow-hidden hover:shadow-[0 0 55px rgba(0, 0, 0, 0.4)] hover:shadow-2xl duration-300"
          >
            <div class="relative overflow-hidden">
              <img
                src="${productImg2[i]}"
                alt=""
                class="w-full rounded-t-xl hover:scale-125 duration-300"
              />
              <span
                class="absolute top-2 right-2 px-3 py-1 rounded-2xl bg-[#81c408] text-white"
                >Vegetables</span
              >
            </div>
            <div class="text-center p-[24px]">
              <div class="mb-[16px]">
                <h4 class="text-[22px] text-[#45595b] font-bold">
                  ${productTitle2}
                </h4>
                <p class="open text-[#747d88]">${productDesc2[i]}</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="open text-[20px] font-medium text-[#45595b]">
                  $${productPrice2[i]} / kg
                </p>
                <a
                  href=""
                  class="hover:bg-[#ffb524] hover:text-white duration-300 border border-[#ffb524] font-medium rounded-4xl px-[16px] py-[6px] text-primary text-[#81c408]"
                  ><i class="fa-solid fa-bag-shopping mr-2 text-[#81c408]"></i
                  >Add to cart</a
                >
              </div>
            </div>
          </div>
      </div>`,
  )
  .join("");

let best = document.getElementById("best");

let productTitle3 = [
  "Organic Tomato",
  "Organic Tomato",
  "Organic Tomato",
  "Organic Tomato",
  "Organic Tomato",
  "Organic Tomato",
];
let productImg3 = [
  "https://themewagon.github.io/fruitables/img/best-product-1.jpg",
  "https://themewagon.github.io/fruitables/img/best-product-2.jpg",
  "https://themewagon.github.io/fruitables/img/best-product-3.jpg",
  "https://themewagon.github.io/fruitables/img/best-product-4.jpg",
  "https://themewagon.github.io/fruitables/img/best-product-5.jpg",
  "https://themewagon.github.io/fruitables/img/best-product-6.jpg",
];
let productPrice3 = ["3.12", "3.12", "3.12", "3.12", "3.12", "3.12"];

best.innerHTML = productTitle3
  .map(
    (productTitle3, i) =>
      `<div
                class="flex items-center justify-between p-[24px] bg-[#f4f6f8] rounded-2xl"
              >
                <div class="px-[12px]">
                  <img
                    src="${productImg3[i]}"
                    alt=""
                    class="rounded-[50%] w-[145px]"
                  />
                </div>
                <div class="px-[12px] text-left">
                  <p class="text-[20px] text-[#45595b] font-medium">
                    ${productTitle3}
                  </p>
                  <div>
                    <i class="fa-solid fa-star text-[#81c408]"></i>
                    <i class="fa-solid fa-star text-[#81c408]"></i>
                    <i class="fa-solid fa-star text-[#81c408]"></i>
                    <i class="fa-solid fa-star text-[#81c408]"></i>
                    <i class="fa-solid fa-star text-[#747d88]"></i>
                  </div>
                  <p class="mb-[16px] text-[#45595b] text-[22px] font-bold">
                    ${productPrice3[i]} $
                  </p>
                  <a
                    href=""
                    class="whitespace-nowrap hover:bg-[#ffb524] hover:text-white duration-300 border border-[#ffb524] font-medium rounded-4xl px-[10px] py-[6px] text-primary text-[#81c408]"
                    ><i class="fa-solid fa-bag-shopping mr-2 text-[#81c408]"></i
                    >Add to cart</a
                  >
                </div>
              </div>`,
  )
  .join("");

let organic = document.getElementById("organic");

let productImg4 = [
  "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-3.jpg",
  "https://themewagon.github.io/fruitables/img/fruite-item-4.jpg",
];
let productTitle4 = [
  "Organic Tomato",
  "Organic Tomato",
  "Organic Tomato",
  "Organic Tomato",
];

let productPrice4 = ["3.12", "3.12", "3.12", "3.12"];
organic.innerHTML = productTitle4
  .map(
    (productTitle4, i) =>
      `<div class="my-[24px] mx-[12px]">
              <img
                src="${productImg4[i]}"
                alt=""
                class="rounded-2xl"
              />
              <div class="py-[24px]">
                <p class="text-[20px] text-[#45595b] font-medium">${productTitle4}</p>
                <div>
                  <i class="fa-solid fa-star text-[#81c408]"></i>
                  <i class="fa-solid fa-star text-[#81c408]"></i>
                  <i class="fa-solid fa-star text-[#81c408]"></i>
                  <i class="fa-solid fa-star text-[#81c408]"></i>
                  <i class="fa-solid fa-star text-[#747d88]"></i>
                </div>
                <p class="mb-[16px] text-[#45595b] text-[22px] font-bold">
                 ${productPrice4[i]}
                </p>
                <a
                  href=""
                  class="whitespace-nowrap hover:bg-[#ffb524] hover:text-white duration-300 border border-[#ffb524] font-medium rounded-4xl px-[10px] py-[6px] text-primary text-[#81c408]"
                  ><i class="fa-solid fa-bag-shopping mr-2 text-[#81c408]"></i
                  >Add to cart</a
                >
              </div>
            </div>`,
  )
  .join("");

let users = document.getElementById("users");
let productIcon = ["fa-users", "fa-users", "fa-users", "fa-users"];
let productTitle5 = [
  "satisfied customers",
  "quality of service",
  "quality certificates",
  "Available Products",
];
let productPrice5 = ["1963", "99%", "33", "789"];

users.innerHTML = productIcon
  .map(
    (productIcon, i) => `
          <div class="text-center bg-white rounded-2xl p-[48px]">
            <i class="fa-solid ${productIcon} text-[#ffb524] text-[60px]"></i>
            <p class="text-[24px] font-bold text-[#81c408] uppercase mt-[16px]">
              ${productTitle5[i]}
            </p>
            <p class="font-bold text-[40px] text-[#45595b]">${productPrice5[i]}</p>
          </div>
        `,
  )
  .join("");

const veg = document.getElementById("vegetables");

document.getElementById("next").onclick = () => {
  veg.scrollLeft += 300;
};

document.getElementById("prev").onclick = () => {
  veg.scrollLeft -= 300;
};

const testi = document.getElementById("testimonials");

document.getElementById("testiNext").onclick = () => {
  testi.scrollLeft += testi.clientWidth;
};

document.getElementById("testiPrev").onclick = () => {
  testi.scrollLeft -= testi.clientWidth;
};
