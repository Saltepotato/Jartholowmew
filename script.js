// Simple cart functionality
let cart = [];

function addToCart(productName) {
    cart.push(productName);
    alert(`${productName} added to cart!`);
    console.log(`Cart: ${cart.join(', ')}`);
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});
