// Food data - in a real app, this would come from a database or API
        const foodItems = [
            {
                id: 1,
                name: "Masala Dosa",
                price: 80,
                rating: 4.5,
                image: "images/Biryani.jpg",
                description: "Crispy crepe filled with spiced potatoes, served with sambar and chutney.",
                mealType: "breakfast",
                quantity: 1
            },
            {
                id: 2,
                name: "Chole Bhature",
                price: 90,
                rating: 4.7,
                image: "chole",
                description: "Spicy chickpea curry served with deep-fried bread.",
                mealType: "breakfast",
                quantity: 1
            },
            {
                id: 3,
                name: "Vegetable Biryani",
                price: 120,
                rating: 4.6,
                image: "biryani",
                description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
                mealType: "lunch",
                quantity: 1
            },
            {
                id: 4,
                name: "Paneer Butter Masala",
                price: 150,
                rating: 4.8,
                image: "paneer",
                description: "Cottage cheese cubes in a rich tomato and cream gravy.",
                mealType: "lunch",
                quantity: 1
            },
            {
                id: 5,
                name: "Chicken Curry",
                price: 180,
                rating: 4.9,
                image: "chicken",
                description: "Tender chicken pieces in a flavorful onion-tomato gravy.",
                mealType: "dinner",
                quantity: 1
            },
            {
                id: 6,
                name: "Dal Makhani",
                price: 110,
                rating: 4.4,
                image: "dal",
                description: "Creamy black lentils slow-cooked with butter and cream.",
                mealType: "dinner, Vegetarian",
                quantity: 1
            },
            {
                id: 7,
                name: "Pav Bhaji",
                price: 85,
                rating: 4.3,
                image: "pavbhaji",
                description: "Spicy mashed vegetable curry served with buttered bread rolls.",
                mealType: "dinner",
                quantity: 1
            },
            {
                id: 8,
                name: "Idli Sambar",
                price: 70,
                rating: 4.2,
                image: "idli",
                description: "Steamed rice cakes served with lentil soup and coconut chutney.",
                mealType: "breakfast",
                quantity: 1
            }
        ];

        // Cart functionality
        let cart = [];
        const cartIcon = document.getElementById('cartIcon');
        const cartModal = document.getElementById('cartModal');
        const closeCart = document.getElementById('closeCart');
        const cartItemsContainer = document.getElementById('cartItems');
        const cartCount = document.querySelector('.cart-count');
        const subtotalElement = document.getElementById('subtotal');
        const taxElement = document.getElementById('tax');
        const totalElement = document.getElementById('total');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const orderForm = document.getElementById('orderForm');
        const checkoutForm = document.getElementById('checkoutForm');
        const foodGrid = document.getElementById('foodGrid');

        // Initialize the app
        document.addEventListener('DOMContentLoaded', () => {
            renderFoodItems();
            setupEventListeners();
        });

        // Render food items
        function renderFoodItems() {
            foodGrid.innerHTML = '';
            
            foodItems.forEach(item => {
                const foodCard = document.createElement('div');
                foodCard.className = 'food-card';
                foodCard.dataset.mealType = item.mealType;
                
                foodCard.innerHTML = `
                    <div class="food-image" style="background-image: url('https://source.unsplash.com/random/400x300/?${item.image}')"></div>
                    <div class="food-details">
                        <div class="food-header">
                            <h3 class="food-title">${item.name}</h3>
                            <div class="food-price">${item.price}tk</div>
                        </div>
                        <div class="food-rating">
                            ${renderRatingStars(item.rating)}
                            <span>${item.rating} (${Math.floor(Math.random() * 100 + 50)} reviews)</span>
                        </div>
                        <p class="food-description">${item.description}</p>
                        <div class="food-actions">
                            <div class="quantity-control">
                                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                                <span class="quantity-value" data-id="${item.id}">1</span>
                                <button class="quantity-btn plus" data-id="${item.id}">+</button>
                            </div>
                            <button class="add-to-cart" data-id="${item.id}">
                                <i class="fas fa-cart-plus"></i> Add
                            </button>
                        </div>
                    </div>
                `;
                
                foodGrid.appendChild(foodCard);
            });
        }

        // Render rating stars
        function renderRatingStars(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            if (halfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }
            
            return stars;
        }

        // Setup event listeners
        function setupEventListeners() {
            // Cart icon click
            cartIcon.addEventListener('click', () => {
                cartModal.classList.add('active');
                renderCartItems();
                calculateTotal();
            });
            
            // Close cart
            closeCart.addEventListener('click', () => {
                cartModal.classList.remove('active');
            });
            
            // Close modal when clicking outside
            cartModal.addEventListener('click', (e) => {
                if (e.target === cartModal) {
                    cartModal.classList.remove('active');
                }
            });
            
            // Quantity buttons
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('quantity-btn')) {
                    const btn = e.target;
                    const id = parseInt(btn.dataset.id);
                    const isPlus = btn.classList.contains('plus');
                    const isMinus = btn.classList.contains('minus');
                    
                    if (isPlus) {
                        increaseQuantity(id);
                    } else if (isMinus) {
                        decreaseQuantity(id);
                    }
                }
                
                // Add to cart button
                if (e.target.classList.contains('add-to-cart')) {
                    const id = parseInt(e.target.dataset.id);
                    addToCart(id);
                }
            });
            
            // Filter options
            document.querySelectorAll('.filter-option').forEach(option => {
                option.addEventListener('click', () => {
                    // Update active class
                    document.querySelectorAll('.filter-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    option.classList.add('active');
                    
                    // Apply filter
                    const filter = option.dataset.filter;
                    filterFoodItems(filter);
                });
            });
            
            // Checkout button
            checkoutBtn.addEventListener('click', () => {
                cartModal.classList.remove('active');
                orderForm.style.display = 'block';
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            });
            
            // Form submission
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                submitOrder();
            });
        }

        // Increase quantity
        function increaseQuantity(id) {
            const quantityElement = document.querySelector(`.quantity-value[data-id="${id}"]`);
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = quantity + 1;
        }

        // Decrease quantity
        function decreaseQuantity(id) {
            const quantityElement = document.querySelector(`.quantity-value[data-id="${id}"]`);
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantityElement.textContent = quantity - 1;
            }
        }

        // Add to cart
        function addToCart(id) {
            const quantity = parseInt(document.querySelector(`.quantity-value[data-id="${id}"]`).textContent);
            const foodItem = foodItems.find(item => item.id === id);
            
            const existingItem = cart.find(item => item.id === id);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    ...foodItem,
                    quantity: quantity
                });
            }
            
            // Update cart count
            updateCartCount();
            
            // Show success message
            showNotification(`${foodItem.name} added to cart!`);
        }

        // Update cart count
        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        // Render cart items
        function renderCartItems() {
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty. Add some delicious food!</p>';
                return;
            }
            
            cartItemsContainer.innerHTML = '';
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                
                cartItem.innerHTML = `
                    <div class="cart-item-image" style="background-image: url('https://source.unsplash.com/random/200x200/?${item.image}')"></div>
                    <div class="cart-item-details">
                        <div class="cart-item-header">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">${item.price * item.quantity}</div>
                        </div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-id="${item.id}" data-in-cart="true">-</button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}" data-in-cart="true">+</button>
                        </div>
                        <div class="cart-item-actions">
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                            <div>${item.price} each</div>
                        </div>
                    </div>
                `;
                
                cartItemsContainer.appendChild(cartItem);
            });
            
            // Add event listeners to cart quantity buttons
            document.querySelectorAll('.quantity-btn[data-in-cart="true"]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(btn.dataset.id);
                    const isPlus = btn.classList.contains('plus');
                    
                    if (isPlus) {
                        const item = cart.find(item => item.id === id);
                        item.quantity++;
                    } else {
                        const item = cart.find(item => item.id === id);
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            // Remove item if quantity becomes 0
                            cart = cart.filter(item => item.id !== id);
                        }
                    }
                    
                    renderCartItems();
                    calculateTotal();
                    updateCartCount();
                });
            });
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(btn.dataset.id);
                    cart = cart.filter(item => item.id !== id);
                    renderCartItems();
                    calculateTotal();
                    updateCartCount();
                });
            });
        }

        // Calculate total
        function calculateTotal() {
            const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const deliveryFee = 25;
            const tax = subtotal * 0.05;
            const total = subtotal + deliveryFee + tax;
            
            subtotalElement.textContent = `${subtotal.toFixed(2)}`;
            taxElement.textContent = `${tax.toFixed(2)}`;
            totalElement.textContent = `${total.toFixed(2)}`;
        }

        // Filter food items
        function filterFoodItems(mealType) {
            const foodCards = document.querySelectorAll('.food-card');
            
            foodCards.forEach(card => {
                if (mealType === 'all' || card.dataset.mealType === mealType) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Submit order
        // Submit order to Google Sheets
function submitOrder() {
    // Submit order to Google Sheets
function submitOrder() {
    const name = document.getElementById('name').value;
    const hall = document.getElementById('hall').value;
    const phone = document.getElementById('phone').value;
    const notes = document.getElementById('notes').value;
    
    if (!name || !hall || !phone) {
        showNotification('Please fill in all required fields!', 'error');
        return;
    }
    
    // Calculate total quantity
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Prepare order data for Google Sheets
    const orderData = {
        name: name,
        hall: hall,
        phone: phone,
        items: cart.map(item => `${item.name} (x${item.quantity})`).join(', '),
        quantity: totalQuantity,
        totalPrice: parseFloat(totalElement.textContent.replace('', '')),
        notes: notes || 'None'
    };

    // Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyrC8XIF-k3UnLziDeG-cg_3rwZ3qsxl1VJ3i0VuYG7F-d4BSZtrJYGqm126jUsvFpK/exec';
    
    // Show loading indicator
    const submitBtn = document.querySelector('.submit-order');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitBtn.disabled = true;
    
    // Create a form to submit data (bypasses CORS restrictions)
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = scriptURL;
    
    // Add data as hidden inputs
    Object.keys(orderData).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = orderData[key];
        form.appendChild(input);
    });
    
    // Add form to document and submit
    document.body.appendChild(form);
    form.submit();
    
    // After submission, reset everything
    setTimeout(() => {
        showNotification('Order placed successfully!', 'success');
        
        // Reset the form and cart
        checkoutForm.reset();
        cart = [];
        updateCartCount();
        orderForm.style.display = 'none';
        
        // Reset quantities on food cards
        document.querySelectorAll('.quantity-value').forEach(el => {
            el.textContent = '1';
        });
        
        // Restore button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        
        // Remove the form
        form.remove();
    }, 3000);
}
}

        // Show notification
        function showNotification(message, type = 'success') {
            // Remove any existing notifications
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }
            
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            // Position the notification
            notification.style.position = 'fixed';
            notification.style.top = '20px';
            notification.style.right = '20px';
            notification.style.padding = '15px 25px';
            notification.style.borderRadius = '5px';
            notification.style.color = 'white';
            notification.style.backgroundColor = type === 'success' ? 'var(--success)' : 'var(--danger)';
            notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            notification.style.zIndex = '2000';
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            notification.style.transition = 'all 0.3s ease';
            
            // Trigger the animation
            setTimeout(() => {
                notification.style.opacity = '1';
                notification.style.transform = 'translateY(0)';
            }, 10);
            
            // Remove after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        }