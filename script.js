// Product data with categories and ratings
const products = [
  // Smartphones
  { 
    name: 'iPhone 14 Pro', 
    price: 189850, 
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60',
    category: 'smartphones',
    rating: 4.8,
    description: 'Latest iPhone with Dynamic Island and Pro camera system.'
  },
  { 
    name: 'Samsung Galaxy S23', 
    price: 159850, 
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60',
    category: 'smartphones',
    rating: 4.7,
    description: 'Flagship Android phone with advanced camera features.'
  },
  { name: 'Google Pixel 7 Pro', price: 149850, image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60' },
  { name: 'OnePlus 11', price: 129850, image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60' },
  
  // Laptops
  { name: 'MacBook Pro M2', price: 289850, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60' },
  { name: 'Dell XPS 15', price: 249850, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60' },
  { name: 'Lenovo ThinkPad X1', price: 219850, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60' },
  { name: 'HP Spectre x360', price: 199850, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60' },
  
  // Audio Devices
  { name: 'Sony WH-1000XM5', price: 59850, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60' },
  { name: 'Apple AirPods Pro', price: 39850, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60' },
  { name: 'Bose QuietComfort 45', price: 49850, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60' },
  { name: 'JBL Quantum 800', price: 24850, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60' },
  
  // Tablets
  { name: 'iPad Pro 12.9"', price: 199850, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60' },
  { name: 'Samsung Galaxy Tab S9', price: 159850, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60' },
  { name: 'Microsoft Surface Pro 9', price: 179850, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60' },
  { name: 'Lenovo Tab P12 Pro', price: 129850, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60' },
  
  // Smartwatches
  { name: 'Apple Watch Series 8', price: 79850, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60' },
  { name: 'Samsung Galaxy Watch 5', price: 59850, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60' },
  { name: 'Garmin Fenix 7', price: 129850, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60' },
  { name: 'Fitbit Sense 2', price: 49850, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60' },
  
  // Gaming
  { name: 'PlayStation 5', price: 89850, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=60' },
  { name: 'Xbox Series X', price: 84850, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=60' },
  { name: 'Nintendo Switch OLED', price: 54850, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=60' },
  { name: 'Gaming PC RTX 4070', price: 299850, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&auto=format&fit=crop&q=60' },
  
  // Cameras
  { name: 'Sony A7 IV', price: 399850, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60' },
  { name: 'Canon EOS R6', price: 349850, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60' },
  { name: 'DJI Air 3 Drone', price: 199850, image: 'https://images.unsplash.com/photo-1527150602-a98f7a6f2746?w=500&auto=format&fit=crop&q=60' },
  { name: 'GoPro Hero 11', price: 79850, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60' },
  
  // Smart Home
  { name: 'Smart TV 65" OLED', price: 249850, image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60' },
  { name: 'Smart Speaker Pro', price: 29850, image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60' },
  { name: 'Robot Vacuum', price: 89850, image: 'https://images.pexels.com/photos/4013157/pexels-photo-4013157.jpeg?auto=compress&cs=tinysrgb&w=500' },
  { name: 'Security Camera 4K', price: 39850, image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60' },
  
  // Accessories
  { name: 'Wireless Charger', price: 9850, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=60' },
  { name: 'Laptop Stand', price: 7850, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60' },
  { name: 'Mechanical Keyboard', price: 12850, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60' },
  { name: 'Gaming Mouse', price: 9850, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60' }
];

// Initialize cart from localStorage or create empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

// Function to update cart count display with animation
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.innerText = cart.length;
    cartCount.style.animation = 'bounce 0.5s';
    setTimeout(() => cartCount.style.animation = '', 500);
  }
}

// Cart functionality
const cartModal = document.getElementById('cartModal');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const closeCartBtn = document.querySelector('.close-cart');
const cartBtn = document.getElementById('cartBtn');
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Enhanced cart opening with animation
cartBtn.addEventListener('click', () => {
  cartModal.classList.add('active');
  overlay.classList.add('active');
  updateCartDisplay();
  document.body.style.overflow = 'hidden';
});

// Enhanced cart closing with animation
closeCartBtn.addEventListener('click', () => {
  cartModal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});

// Close cart when clicking overlay
overlay.addEventListener('click', () => {
  cartModal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});

// Enhanced cart display with animations
function updateCartDisplay() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    return;
  }

  cart.forEach(item => {
    const product = products.find(p => p.name === item.name);
    if (product) {
      total += product.price;
      
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <img src="${product.image}" alt="${item.name}">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">KSh ${product.price.toLocaleString()}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.name}')">&times;</button>
      `;
      
      cartItemsContainer.appendChild(cartItem);
    }
  });

  cartTotalPrice.textContent = `KSh ${total.toLocaleString()}`;
  updateCartCount();
}

// Enhanced add to cart with animation and notification
function addToCart(productName) {
  const product = products.find(p => p.name === productName);
  if (product) {
    cart.push({ name: productName });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${productName} added to cart!`, 'success');
    
    // Add animation to the product card
    const productCard = document.querySelector(`[onclick="addToCart('${productName}')"]`).closest('.product');
    productCard.classList.add('added-to-cart');
    setTimeout(() => productCard.classList.remove('added-to-cart'), 1000);
  }
}

// Enhanced remove from cart with animation
function removeFromCart(productName) {
  const index = cart.findIndex(item => item.name === productName);
  if (index !== -1) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification(`${productName} removed from cart`, 'warning');
  }
}

// Enhanced notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 500);
  }, 3000);
}

// Function to calculate total cart value
function calculateTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('#name').value;
    const email = this.querySelector('#email').value;
    const subject = this.querySelector('#subject').value;
    const message = this.querySelector('#message').value;
    
    // Basic form validation
    if (!name || !email || !subject || !message) {
      showNotification('Please fill in all fields!');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification('Please enter a valid email address!');
      return;
    }
    
    // Simulate form submission
    showNotification('Thank you for your message! We will get back to you soon.');
    this.reset();
  });
}

// Product search and filter functionality
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

if (searchInput && categoryFilter) {
  searchInput.addEventListener('input', filterProducts);
  categoryFilter.addEventListener('change', filterProducts);
}

// Enhanced product filtering with animations
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const products = document.querySelectorAll('.product');
  
  products.forEach(product => {
    const productName = product.querySelector('h3').textContent.toLowerCase();
    const productCategory = product.dataset.category;
    const productDescription = product.querySelector('.description').textContent.toLowerCase();
    
    const matchesSearch = productName.includes(searchTerm) || productDescription.includes(searchTerm);
    const matchesCategory = category === 'all' || productCategory === category;
    
    if (matchesSearch && matchesCategory) {
      product.style.display = 'block';
      product.classList.add('fade-in');
    } else {
      product.classList.remove('fade-in');
      product.style.display = 'none';
    }
  });
}

// Add smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add hover effects to product cards
document.querySelectorAll('.product').forEach(product => {
  product.addEventListener('mouseenter', () => {
    product.classList.add('hover');
  });
  
  product.addEventListener('mouseleave', () => {
    product.classList.remove('hover');
  });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('load', () => {
    img.classList.add('loaded');
  });
});

// Handle newsletter form submission with validation
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification('Please enter a valid email address!', 'error');
      return;
    }
    
    // Simulate form submission with loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="loading">Subscribing...</span>';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      showNotification('Thank you for subscribing to our newsletter!', 'success');
      this.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && cartModal.classList.contains('active')) {
    cartModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Initialize tooltips for product cards
document.querySelectorAll('.product').forEach(product => {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = 'Click to add to cart';
  product.appendChild(tooltip);
  
  product.addEventListener('mouseenter', () => {
    tooltip.classList.add('visible');
  });
  
  product.addEventListener('mouseleave', () => {
    tooltip.classList.remove('visible');
  });
});

// Function to clear the cart
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    document.getElementById('cart-count').textContent = '0';
    showNotification('Cart cleared successfully', 'success');
}
