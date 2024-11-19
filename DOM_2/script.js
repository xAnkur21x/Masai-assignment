// Product data array
let products = [];

// DOM Elements
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productRatingInput = document.getElementById("product-rating");
const addProductButton = document.getElementById("add-product");
const priceGraph = document.getElementById("price-graph");
const ratingGraph = document.getElementById("rating-graph");
const sortPriceButton = document.getElementById("sort-price");
const sortRatingButton = document.getElementById("sort-rating");

// Function to render the graphs
function renderGraphs() {
    // Clear existing graphs
    priceGraph.innerHTML = "";
    ratingGraph.innerHTML = "";

    // Render Price Graph
    products.forEach(product => {
        const priceBar = document.createElement("div");
        priceBar.className = "bar bar-price";
        priceBar.style.height = ${product.price * 2}px; // Adjust scale for visual clarity
        priceBar.textContent = ${product.name} - $${product.price};
        priceGraph.appendChild(priceBar);
    });

    // Render Rating Graph
    products.forEach(product => {
        const ratingBar = document.createElement("div");
        ratingBar.className = "bar bar-rating";
        ratingBar.style.height = ${product.rating * 40}px; // Assuming max rating is 5
        ratingBar.textContent = ${product.name} - ${product.rating}⭐;
        ratingGraph.appendChild(ratingBar);
    });
}

// Function to add a product
function addProduct() {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);
    const rating = parseFloat(productRatingInput.value);

    if (!name || isNaN(price) || isNaN(rating)) {
        alert("Please fill in all fields with valid values.");
        return;
    }

    // Add the new product to the products array
    products.push({ name, price, rating });

    // Render the updated graphs done
    renderGraphs();

    // Clear input fields after adding the product
    productNameInput.value = "";
    productPriceInput.value = "";
    productRatingInput.value = "";
}

// Function to sort by price
function sortByPrice() {
    // Sort products by price in ascending order
    products.sort((a, b) => a.price - b.price);
    renderGraphs();
}

// Function to sort by rating
function sortByRating() {
    // Sort products by rating in descending order
    products.sort((a, b) => b.rating - a.rating);
    renderGraphs();
}

// Event Listeners for button clicks
addProductButton.addEventListener("click", addProduct);
sortPriceButton.addEventListener("click", sortByPrice);
sortRatingButton.addEventListener("click", sortByRating);

// Initial Render when the page loads
renderGraphs();