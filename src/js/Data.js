const products = document.getElementById('products');

// Ana div-in klasslarını JS ilə mütləq şəkildə veririk ki, risk qalmasın
products.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4";

let title = ['Grapes', 'Raspberries', 'Apricots', 'Banana', 'Oranges', 'Apple', 'Strawberry', 'Cherry'];
let img = [
  'https://themewagon.github.io/fruitables/img/fruite-item-5.jpg',
  'https://themewagon.github.io/fruitables/img/fruite-item-2.jpg',
  'https://themewagon.github.io/fruitables/img/fruite-item-4.jpg',
  'https://themewagon.github.io/fruitables/img/fruite-item-3.jpg',
  'https://themewagon.github.io/fruitables/img/fruite-item-1.jpg',
  'https://themewagon.github.io/fruitables/img/fruite-item-6.jpg',
  'https://themewagon.github.io/fruitables/img/fruite-item-2.jpg',
  'https://themewagon.github.io/fruitables/img/fruite-item-5.jpg'
];
let price = ['2.5', '5.4', '1.4', '5.7', '10', '3.2', '6.0', '4.5'];
let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt';

products.innerHTML = ""; 

title.forEach((item, i) => {
  products.innerHTML += `
    <div class="hover:shadow-2xl duration-300 ease-in-out overflow-hidden w-full rounded-xl border border-amber-500 bg-white">
        <div class="img-card overflow-hidden relative">
            <img src="${img[i]}" class="w-full h-[200px] object-cover hover:scale-110 duration-500" alt="">
            <span class="bg-[#ffb524] text-white px-3 py-1 text-sm rounded-2xl absolute top-3 left-3">Fruits</span>
        </div>
        <div class="text-card p-5 text-center">
            <h4 class="text-[#45595b] text-xl font-bold mb-2 truncate">${item}</h4>
            <p class="text-gray-500 text-sm line-clamp-2">${text}</p>
        </div>
        <div class="button-card p-5 flex items-center justify-between border-t border-gray-100">
            <p class="text-[#45595b] text-lg font-bold">${price[i]} / Kq</p>
            <a class="text-[#81c408] border border-[#ffb524] px-3 py-2 rounded-full hover:bg-[#ffb524] hover:text-white transition-all duration-300 cursor-pointer text-sm">
                Add to cart
            </a>
        </div>
    </div>`;
});