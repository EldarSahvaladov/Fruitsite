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
      `<div data-aos="fade-up" data-aos-duration="2000" class="bg-[#f4f6f8] text-center p-[24px] rounded-2xl">
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
