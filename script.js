// Cart Management
let cart = [];
const WHATSAPP_NUMBER = '916379556559'; // WhatsApp number with country code

// Load on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    setupEventListeners();
    setupFeedbackForm();
    loadProjects();
    loadCompanyProjects();
    addNavbarPadding();
});

// Add top padding to body to account for fixed navbar
function addNavbarPadding() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const navHeight = navbar.offsetHeight;
        document.body.style.paddingTop = (navHeight + 20) + 'px';
    }
}

// Load and display projects
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    projects.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Load and display company projects
function loadCompanyProjects() {
    const grid = document.getElementById('companyProjectsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    companyProjects.forEach((project) => {
        const card = createCompanyProjectCard(project);
        grid.appendChild(card);
    });
}

// Create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${project.image}" alt="${project.name}" class="project-image" loading="lazy">
        <div class="project-info">
            <h3 class="project-name">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div style="margin-top: 15px;">
                <small style="color: var(--primary-red); font-weight: 600;">₹${project.price}</small>
            </div>
        </div>
    `;
    card.onclick = () => showProjectModal(project);
    return card;
}

// Create company project card
function createCompanyProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'company-project-card';
    card.innerHTML = `
        <img src="${project.image}" alt="${project.name}" class="company-project-image" loading="lazy">
        <div class="company-project-info">
            <h3 class="company-project-name">${project.name}</h3>
            <p class="company-project-description">${project.description}</p>
        </div>
    `;
    return card;
}

// Show project details modal
function showProjectModal(project) {
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('projectModalContent');
    
    const componentsList = project.components.map((c, i) => `<li style="margin-bottom: 8px; font-size: 14px;">${i + 1}. ${c}</li>`).join('');
    
    content.innerHTML = `
        <img src="${project.image}" alt="${project.name}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
        <h2 style="font-family: 'Orbitron', sans-serif; font-size: 22px; margin-bottom: 12px; color: var(--white);">${project.name}</h2>
        <p style="font-size: 14px; color: var(--light-gray); margin-bottom: 15px; line-height: 1.5;">${project.description}</p>
        
        <h3 style="font-size: 16px; color: var(--primary-red); margin-bottom: 10px; margin-top: 15px;">Components Used:</h3>
        <ul style="list-style: none; padding-left: 0; color: var(--white); font-size: 13px; margin-bottom: 15px;">
            ${componentsList}
        </ul>
        
        <div style="background: var(--medium-gray); padding: 12px; border-radius: 8px; margin: 15px 0;">
            <p style="font-size: 16px; font-weight: 700; color: var(--primary-red); margin: 0;">
                <i class="fas fa-rupee-sign"></i> Price: ₹${project.price}
            </p>
        </div>
        
        <div style="margin-top: 15px; text-align: center;">
            <p style="color: var(--light-gray); font-size: 13px; margin-bottom: 12px;">Interested in this project?</p>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(project.name)}%20project.%20Please%20provide%20more%20details." target="_blank" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, #25D366, #20ba61); color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; font-size: 13px;">
                <i class="fab fa-whatsapp"></i>
                Enquire via WhatsApp
            </a>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close project modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Show custom project modal
function showCustomProjectModal() {
    const modal = document.getElementById('customProjectModal');
    if (modal) {
        modal.classList.add('active');
    }
}

// Close custom project modal
function closeCustomProjectModal() {
    const modal = document.getElementById('customProjectModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.remove('active');
    }
}

// Navigation
function goToHome() {
    showSection('home-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section, .home-page, .category-page').forEach(section => {
        if (section.id !== 'home-page' && section.id !== 'category-page') {
            section.style.display = 'none';
        }
    });
    
    // Hide home and category pages
    const homePage = document.getElementById('home-page');
    const categoryPage = document.getElementById('category-page');
    
    if (homePage) homePage.style.display = 'none';
    if (categoryPage) categoryPage.style.display = 'none';
    
    // Show selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCategoryPage(category) {
    // Hide all other sections first
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    const homePage = document.getElementById('home-page');
    if (homePage) homePage.style.display = 'none';
    
    // Load products
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    const filteredProducts = products.filter(p => p.category === category);
    
    const categoryTitleMap = {
        sensors: 'Sensors',
        microcontrollers: 'Microcontrollers',
        displays: 'Displays',
        boards: 'Boards',
        modules: 'Modules',
        batteries: 'Batteries',
        bluetooth: 'Bluetooth Modules',
        others: 'Other Modules',
        exclusive: 'Exclusive Products',
        'Tools': 'Tools',
        'active components': 'Active Components',
        'passive components': 'Passive Components'
    };
    
    const categoryTitle = document.getElementById('categoryTitle');
    if (categoryTitle) {
        categoryTitle.textContent = categoryTitleMap[category] || category;
        categoryTitle.style.display = 'block';
    }
    
    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });
    
    // Show category page
    const categoryPage = document.getElementById('category-page');
    if (categoryPage) {
        categoryPage.style.display = 'block';
    }
    
    // Close mobile menu if open
    closeMobileMenu();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy" onerror="this.src='https://via.placeholder.com/260x220?text=${encodeURIComponent(product.name)}'">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">₹${product.price}</span>
                <button class="add-to-cart" onclick="addToCart(event, ${product.id}, '${product.name}', ${product.price}, '${product.image}')">
                    <i class="fas fa-shopping-cart"></i>
                    <span>Add</span>
                </button>
            </div>
        </div>
    `;
    return card;
}

// Add to cart
function addToCart(event, productId, productName, productPrice, productImage) {
    event.stopPropagation();
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }
    
    updateCartUI();
    saveCartToStorage();
    showNotification(`${productName} added to cart!`);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToStorage();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
            saveCartToStorage();
        }
    }
}

// Update cart UI
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');
    const mobileCartCount = document.querySelector('.mobile-cart-count');
    const cartTotal = document.getElementById('cartTotal');
    const cartFooter = document.getElementById('cartFooter');
    
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    if (mobileCartCount) mobileCartCount.textContent = totalItems;
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = `₹${total}`;
    
    // Show/hide footer
    if (cartFooter) {
        cartFooter.style.display = cart.length > 0 ? 'block' : 'none';
    }
    
    // Update items display
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/60?text=Product'">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${item.price}</div>
                        <div class="cart-item-actions">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                                <i class="fas fa-plus"></i>
                            </button>
                            <button class="remove-item" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
}

// Toggle cart
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    if (cartSidebar && overlay) {
        cartSidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// Checkout via WhatsApp
function checkoutViaWhatsApp() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    // Create cart message
    let cartMessage = 'Hi! I would like to place an order:\n\n';
    let total = 0;
    
    cart.forEach((item, index) => {
        cartMessage += `${index + 1}. ${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
        total += item.price * item.quantity;
    });
    
    cartMessage += `\nTotal: ₹${total}\n\nPlease confirm this order.`;
    
    // Create WhatsApp link
    const encodedMessage = encodeURIComponent(cartMessage);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Close cart
    toggleCart();
    showNotification('Redirecting to WhatsApp...');
}

// Save cart to localStorage
function saveCartToStorage() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {
        console.error('Error saving cart:', e);
    }
}

// Load cart from localStorage
function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartUI();
        }
    } catch (e) {
        console.error('Error loading cart:', e);
    }
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? '#25D366' : '#ff1a1a';
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        font-weight: 600;
        animation: slideInRight 0.3s ease-out;
        font-family: 'Rajdhani', sans-serif;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Setup feedback form
function setupFeedbackForm() {
    const feedbackForm = document.getElementById('feedbackForm');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const subject = encodeURIComponent('Feedback from ' + name);
            const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            );
            const mailtoLink = `mailto:sureshsuresk807@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email
            window.location.href = mailtoLink;
            
            showNotification('Opening your email client...');
            feedbackForm.reset();
        });
    }
}

// Close modal on outside click
window.onclick = function(event) {
    const projectModal = document.getElementById('projectModal');
    const customModal = document.getElementById('customProjectModal');
    
    if (event.target === projectModal) {
        closeProjectModal();
    }
    if (event.target === customModal) {
        closeCustomProjectModal();
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('%c Bachelor of Engineer ', 'background: #dc0000; color: #fff; font-size: 20px; padding: 10px; font-weight: bold;');
console.log('%c A Student Mind Set ', 'background: #000; color: #dc0000; font-size: 14px; padding: 5px;');
console.log('Website loaded successfully! 🚀');
