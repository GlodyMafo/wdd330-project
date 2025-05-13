import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {

  let cart = [];

  const storedCart = localStorage.getItem("so-cart");

  if (storedCart) {
    try {
      const parsed = JSON.parse(storedCart);
      cart = Array.isArray(parsed) ? parsed : [parsed]; 
    } catch (e) {
      cart = [];
    }
  }

  cart.push(product);

  setLocalStorage("so-cart", cart);

}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
