// import users from "../src/adminusers";
// import dashboardOverviewTitles from "../src/dashboardContents";
// import products from "../src/products";

setTimeout(() => {
  document.querySelector(".loader").classList.add("hidden");
}, 1000);

const menubtn = document.querySelectorAll(".mobileMenu button");
menubtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    menubtn.forEach((btn) => {
      btn.classList.remove("mobileMenuActive");
    });
    btn.classList.add("mobileMenuActive");
  });
});

const burgerfullmenu = document.querySelector(".burgerfullmnu");
const burgerBtn = document.querySelector(".burgerBtn");
const burgerBtnicon = document.querySelector(".burgerBtn i");

burgerBtn.addEventListener("click", () => {
  burgerfullmenu.classList.toggle("translate-x-60");
  burgerBtn.classList.toggle("-rotate-[90deg]");
  burgerBtnicon.classList.toggle("fa-bars");
  burgerBtnicon.classList.toggle("fa-close");
});

// slider js
const slider = document.querySelector("#slider");
const slidesContainer = document.querySelector("#slides");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let autoPlayInterval;

// create dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function goToSlide(i) {
  index = i;
  updateSlider();
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// autoplay
function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 4000);
}
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

slider.addEventListener("mouseenter", stopAutoPlay);
slider.addEventListener("mouseleave", startAutoPlay);
startAutoPlay();

// swipe support
let startX = 0;
slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) prevSlide();
});

// important script

const products = [
  {
    productImage: "./images/products/01-consumer-electronics/harddisk.png",
    productName: "High speed HardDisk",
    title: "top-Ranking",
    productPrice: `$ ${12.5}`,
    productShipping: `$ ${null}`,
    productDiscount: `$ ${null}`,
    productInfo: "Experience the highest speed of transfer",
    productColor: "black",
    productAmountNumber: 14,
    categorey: "consumer",
  },
  {
    productImage: "./images/products/01-consumer-electronics/harddisk.png",
    productName: "High speed HardDisk",
    title: "discounted",
    productPrice: `$ ${12.5}`,
    productShipping: `$ ${null}`,
    productDiscount: `$ ${null}`,
    productInfo: "Experience the highest speed of transfer",
    productColor: "black",
    productAmountNumber: 14,
    categorey: "",
  },
  {
    productImage: "./images/products/01-consumer-electronics/harddisk.png",
    productName: "High speed HardDisk",
    title: "discounted",
    productPrice: `$ ${12.5}`,
    productShipping: `$ ${null}`,
    productDiscount: `$ ${null}`,
    productInfo: "Experience the highest speed of transfer",
    productColor: "black",
    productAmountNumber: 14,
    categorey: "",
  },
  {
    productImage: "./images/products/01-consumer-electronics/harddisk.png",
    productName: "High speed HardDisk",
    title: "discounted",
    productPrice: `$ ${12.5}`,
    productShipping: `$ ${null}`,
    productDiscount: `$ ${null}`,
    productInfo: "Experience the highest speed of transfer",
    productColor: "black",
    productAmountNumber: 14,
    categorey: "",
  },
  {
    productImage: "./images/products/01-consumer-electronics/harddisk.png",
    productName: "High speed HardDisk",
    title: "New-Added",
    productPrice: `$ ${12.5}`,
    productShipping: `$ ${null}`,
    productDiscount: `$ ${null}`,
    productInfo: "Experience the highest speed of transfer",
    productColor: "black",
    productAmountNumber: 14,
    categorey: "consumer",
  },
  {
    productImage: "./images/products/01-consumer-electronics/harddisk.png",
    productName: "High speed HardDisk",
    title: "New-Added",
    productPrice: `$ ${12.5}`,
    productShipping: `$ ${null}`,
    productDiscount: `$ ${null}`,
    productInfo: "Experience the highest speed of transfer",
    productColor: "black",
    productAmountNumber: 14,
    categorey: "consumer",
  },
  {
    productImage: "./images/products/01-consumer-electronics/harddisk.png",
    productName: "High speed HardDisk",
    title: "most-searched",
    productPrice: `$ ${12.5}`,
    productShipping: `$ ${null}`,
    productDiscount: `$ ${null}`,
    productInfo: "Experience the highest speed of transfer",
    productColor: "black",
    productAmountNumber: 14,
    categorey: "consumer",
  },
  {
    productImage: "./images/products/01-consumer-electronics/harddisk.png",
    productName: "High speed HardDisk",
    title: "most-searched",
    productPrice: `$ ${12.5}`,
    productShipping: `$ ${null}`,
    productDiscount: `$ ${null}`,
    productInfo: "Experience the highest speed of transfer",
    productColor: "black",
    productAmountNumber: 14,
    categorey: "consumer",
  },
];
const suppliers = [
  {
    supplierID: 1,
    supplierRole: "top",
    supplierImage: "./images/supplier.jpg",
    supplierName: "Rohullah Ahmadi",
    supplierInfo: "a short info about supplier",
    supplierProduct: "200",
    supplierCategory: "housing",
    supplierShipping: "free",
  },
  {
    supplierID: 2,
    supplierRole: "top",
    supplierImage: "./images/supplier.jpg",
    supplierName: "Masumah Farahmand",
    supplierInfo: "a short info about supplier",
    supplierProduct: "200",
    supplierCategory: "housing",
    supplierShipping: "free",
  },
  {
    supplierID: 3,
    supplierRole: "top",
    supplierImage: "./images/supplier.jpg",
    supplierName: "Hanif Sarbi",
    supplierInfo: "a short info about supplier",
    supplierProduct: "200",
    supplierCategory: "housing",
    supplierShipping: "free",
  },
  {
    supplierID: 4,
    supplierRole: "top",
    supplierImage: "./images/supplier.jpg",
    supplierName: "Mahram Amiri",
    supplierInfo: "a short info about supplier",
    supplierProduct: "200",
    supplierCategory: "housing",
    supplierShipping: "free",
  },
  {
    supplierID: 5,
    supplierRole: "",
    supplierImage: "./images/supplier.jpg",
    supplierName: "Mahram",
    supplierInfo: "a short info about supplier",
    supplierProduct: "200",
    supplierCategory: "housing",
    supplierShipping: "free",
  },
  {
    supplierID: 6,
    supplierRole: "",
    supplierImage: "./images/supplier.jpg",
    supplierName: "Mahram",
    supplierInfo: "a short info about supplier",
    supplierProduct: "200",
    supplierCategory: "housing",
    supplierShipping: "free",
  },
  {
    supplierID: 7,
    supplierRole: "",
    supplierImage: "./images/supplier2.jpg",
    supplierName: "Mahram",
    supplierInfo: "a short info about supplier",
    supplierProduct: "200",
    supplierCategory: "housing",
    supplierShipping: "free",
  },
];

const shortListedItem = document.querySelector("#shortListedItem");
const topSuppliers = document.querySelector("#topSuppliers");
const discountedItems = document.querySelector("#discountedItems");
const newArrivalItems = document.querySelector("#newArrivalItems");
const topRankingItems = document.querySelector("#topRankingItems");

// short listed products
products.forEach((product) => {
  const container = document.createElement("article");
  container.classList =
    "w-50 shrink-0 flex flex-col p-2 gap-2 rounded-xl overflow-hidden bg-white mt-4";
  container.innerHTML = ` <img src="${product.productImage}" class="w-full" />
                          <div>
                            <h1 class="font-bold">${product.productName}</h1>
                            <p class="text-sm">${product.productInfo}</p>
                          </div>
                          <span class="font-semibold">price: ${product.productPrice}</span>
                          <button class="w-full rounded-full items-center justify-center flex p-1 bg-[var(---darkGreen)] gap-2 text-white"><i class="fas fa-shopping-cart"></i>Shop </button>`;
  shortListedItem.append(container);
});

// top raneking products

products.forEach((product) => {
  if (product.title === "top-Ranking" || product.title === "most-searched") {
    const container = document.createElement("div");
    container.classList =
      "w-[220px] bg-[var(---lightgreen)] shrink-0 rounded-md p-2 flex flex-col gap-2 items-center text-center h-full";
    container.innerHTML = `<h1 class="font-bold text-2xl">${product.title}</h1>
     <img
                src="${product.productImage}"
                alt=""

                class="w-full p-4 h-[70%] rounded-md" />
              <span class="px-4 py-1 rounded-full shadow-xl text-md w-max bg-white/80"
                >${product.productName}
              </span>
      `;
    topRankingItems.appendChild(container);
  }
});

// new Arrivals products

products.forEach((product) => {
  if (product.title === "New-Added") {
    const container = document.createElement("div");
    container.classList = "shrink-0 rounded-md bg-[var(---lightgreen)] p-2 w-48 flex flex-col";
    container.innerHTML = ` 
    <img src="${product.productImage}" alt="" class="h-[70%]" />
               <p class="flex flex-col gap-1 px-2 items-start w-full text-black font-bold  rounded-full">
                 ${product.productName} <ins>${product.productPrice}</ins>
              </p>
              <button class="w-full rounded-full items-center justify-center flex p-1 bg-[var(---darkGreen)] gap-2 text-white"><i class="fas fa-shopping-cart"></i>Shop </button>
      `;
    newArrivalItems.appendChild(container);
  }
});

// dicounted products
products.forEach((product) => {
  if (product.title === "discounted") {
    const container = document.createElement("div");
    container.classList =
      "shrink-0 rounded-md bg-white p-2 h-74 justify-between w-48 flex flex-col relative";
    container.innerHTML = ` 
    <img src="${product.productImage}" alt="" class="h-[60%]" />
               <div class="flex flex-col gap-1 px-2 items-start w-full text-black font-bold  rounded-full">
                 <p>${product.productName}</p> <ins>${product.productPrice}</ins>
                 <del class="text-red-600">${product.productDiscount}</del>
                 <button class="w-full rounded-full items-center justify-center flex p-1 bg-[var(---darkGreen)] gap-2 text-white"><i class="fas fa-shopping-cart"></i>Shop </button>
              </div>
      `;
    discountedItems.appendChild(container);
  }
});

// Top Suppliers

suppliers.forEach((supplier) => {
  if (supplier.supplierRole === "top") {
    const container = document.createElement("div");
    container.classList =
      "flex flex-col w-60 flex-col items-center justify-center gap-2 shrink-0 border-[var(---darkGreen)]/20 p-4 hover:border rounded-xl back-drop-blur-xl hover:shadow-xl transition-all ease-in-out duration-100  h-60";
    container.innerHTML = `
    <img src=${supplier.supplierImage} class="rounded-full w-30 bg-black h-30" />
    <h1 class="font-bold text-lg w-full text-center">${supplier.supplierName}</h1>
    <p>${supplier.supplierInfo}</p>
    `;
    topSuppliers.appendChild(container);
  }
});

// dashboars js
