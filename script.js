const dressItems = [
  {
    id: 1,
    name: "Cocktail Dress",
    price: 89,
    image: "images/black_cocktail_dress.png",
  },
  {
    id: 2,
    name: "Summer Dress",
    price: 55,
    image: "images/white_summer_dress.png",
  },
  {
    id: 3,
    name: "Red Gown",
    price: 120,
    image: "images/red_evening_gown.png",
  },
  {
    id: 4,
    name: "Luxury Dress",
    price: 150,
    image: "images/segal-jewelry-NsH-CvU0deg-unsplash.jpg",
  },
];

const ctaBtn = document.getElementById("cta-btn");
const products = document.getElementById("products");

const findProductById = (id) => {
  return dressItems.find((item) => item.id === id);
};

ctaBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const whatsappMessage =
    "Hello! I'm interested in your dresses. Could you provide more details?";
  const whatsappUrl = `https://wa.me/233246096278?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl, "_blank");
});

products.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-primary")) {
    const productCard = event.target.closest(".product-card");
    const productId = parseInt(productCard.id.split("-")[1]);
    const product = findProductById(productId);
    const whatsappMessage = `Hello! I'm interested in the ${product.name} priced at $${product.price}. Could you provide more details?`;
    const whatsappUrl = `https://wa.me/233246096278?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  } else {
    return;
  }
});
