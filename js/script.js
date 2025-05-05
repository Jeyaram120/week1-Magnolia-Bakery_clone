
const dropdownPairs = [
  { buttonId: 'mega-menu-order-dropdown-button', dropdownId: 'mega-menu-order-dropdown' },
  { buttonId: 'mega-menu-product-dropdown-button', dropdownId: 'mega-menu-product-dropdown' },
  { buttonId: 'mega-menu-hours-locations-dropdown-button', dropdownId: 'mega-menu-hours-locations-dropdown' },
  { buttonId: 'mega-menu-about-us-dropdown-button', dropdownId: 'mega-menu-about-us-dropdown' }
];

dropdownPairs.forEach(({ buttonId, dropdownId }) => {
  const button = document.getElementById(buttonId);
  const dropdown = document.getElementById(dropdownId);

  if (button && dropdown) {
    dropdown.style.display = 'none';

    button.addEventListener('mouseenter', () => {
      dropdown.style.display = 'block';
    });

    button.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!dropdown.matches(':hover')) {
          dropdown.style.display = 'none';
        }
      }, 200);
    });

    dropdown.addEventListener('mouseenter', () => {
      dropdown.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
      dropdown.style.display = 'none';
    });
     button.addEventListener('click', (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      }
    });
  }
});

const images = [
  {
    src: "./assets/Products/220415_CL_Magnolia_02_TableScape_Closeup_134_14770b1e-a073-4acf-a3e3-31235b1b55a7_500x600_crop_center.png",
    caption: "Banana Pudding",
  },
  {
    src: "./assets/Products/cakes_500x600_crop_center.png",
    caption: "Classic Cupcake",
  },
  {
    src: "./assets/Products/cupcakes_500x600_crop_center.png",
    caption: "Cookies",
  },
  {
    src: "./assets/Products/Peanut_Butter_Chocolate_Pudding_1_500x600_crop_center.jpg.jpeg",
    caption: "Cakes",
  },
  {
    src: "./assets/Products/Stylized_Ecomm_Mother_s_Day_Group_260x265_crop_center.avif",
    caption: "Bars & Brownies",
  },
];

const carousel = document.getElementById("carousel");

function renderCards() {
  carousel.innerHTML = "";
  images.forEach(({ src, caption }) => {
    const card = document.createElement("div");
    card.className =
      "flex-shrink-0 w-2/3 md:w-1/5 transform transition duration-300 hover:scale-105";
    card.innerHTML = `
  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <img src="${src}" alt="${caption}" class="w-full h-48 object-cover">
    <div class="p-2 text-center font-medium text-gray-700">${caption}</div>
  </div>
`;
    carousel.appendChild(card);
  });
}

function rotateCards() {
  const first = images.shift();
  images.push(first);
  renderCards();
}

renderCards();
