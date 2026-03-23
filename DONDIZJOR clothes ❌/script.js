        // Product Data - Prices in Rands with multiple views
        const products = [
           
            {
                id: 1,
                name: "BBL008.BLACK OVERSIZED DDR T.S",
                price: 349.99,
                category: "men",
                images: {
                    front: "images/BBL008 FR.DDR.TS.jpg",
                    back: "images/BBL008.BLACK OVERSIZED DDR T.S.jpg",
                    //side: ""
                },
                mainImage: "images/BBL008 FR.DDR.TS.jpg",
                rating: 5,
                description: "Step into bold street fashion with thi oversized t-shirt. Featuring a loose , relaxed fit ang soft cotton feel , it delivers comfort without sacrificing style. Designed for those who move different and stand out effortlessly."
            },
           
            {
                id: 2,
                name: "VSL.20.WHITE OVERSIZED DDR T-1",
                price: 349.99,
                category: "men",
                images: {
                    front: "images/VSL.2O.FR.DDR T.S.png",
                    back: "images/VSL.20.WHITE OVERSIZED DDR T-1.jpg",
                    //side: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80"
                },
                mainImage: "images/VSL.2O.FR.DDR T.S.png",
                rating: 4.8,
                description: "Classic t-shirt with modern fit. Features distressed details and custom DONDIZJOR patches. Perfect for layering."
            },
            
            {
                id: 3,
                name: "DON.D.WHITE.OVERSIZED T.S PNE63",
                price: 349.99,
                category: "men",
                images: {
                    front: "images/PNE.63.FR.DDR T.S.png",
                    back: "images/DON.D.WHITE.OVERSIZED T.S PNE63.jpg",
                   // side: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80"
                },
                mainImage: "images/PNE.63.FR.DDR T.S.png",
                rating: 4.3,
                description:"More than just a fit it's a statement. with its loose silhouette and smooth feel, it blends comfort and street culcture effortlessly. perfect for those those who don't follow trends,they creat them"
            },

            {
                id: 4,
                name: "BBL008.BLACK OVERSIZED DDR T.S",
                price: 349.99,
                category: "women",
                images: {
                    front: "images/BBL008 FR.DDR.TS.jpg",
                    back: "images/BBL008.BLACK OVERSIZED DDR T.S.jpg",
                    //side: ""
                },
                mainImage: "images/BBL008 FR.DDR.TS.jpg",
                rating: 5,
                description: "Step into bold street fashion with thi oversized t-shirt. Featuring a loose , relaxed fit ang soft cotton feel , it delivers comfort without sacrificing style. Designed for those who move different and stand out effortlessly."
            },
           
            {
                id: 5,
                name: "VSL.20.WHITE OVERSIZED DDR T-1",
                price: 349.99,
                category: "women",
                images: {
                    front: "images/VSL.2O.FR.DDR T.S.png",
                    back: "images/VSL.20.WHITE OVERSIZED DDR T-1.jpg",
                    //side: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80"
                },
                mainImage: "images/VSL.2O.FR.DDR T.S.png",
                rating: 4.8,
                description: "Classic t-shirt with modern fit. Features distressed details and custom DONDIZJOR patches. Perfect for layering."
            },
            
            {
                id: 6,
                name: "DON.D.WHITE.OVERSIZED T.S PNE63",
                price: 349.99,
                category: "women",
                images: {
                    front: "images/PNE.63.FR.DDR T.S.png",
                    back: "images/DON.D.WHITE.OVERSIZED T.S PNE63.jpg",
                   // side: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80"
                },
                mainImage: "images/PNE.63.FR.DDR T.S.png",
                rating: 4.3,
                description:"More than just a fit it's a statement. with its loose silhouette and smooth feel, it blends comfort and street culcture effortlessly. perfect for those those who don't follow trends,they creat them"
            },
           
        ];

        // Cart Data
        let cart = [];
        let cartCount = 0;
        let cartTotal = 0;
        let selectedPaymentMethod = 'whatsapp';
        const whatsappNumber = '0712603615';

        // DOM Elements
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const cartIcon = document.querySelector('.cart-icon');
        const cartSidebar = document.querySelector('.cart-sidebar');
        const closeCart = document.querySelector('.close-cart');
        const overlay = document.querySelector('.overlay');
        const cartCountElement = document.querySelector('.cart-count');
        const cartItemsContainer = document.querySelector('.cart-items');
        const cartTotalElement = document.querySelector('.total-price');
        const productGrid = document.querySelector('.product-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const header = document.querySelector('header');
        const checkoutOverlay = document.querySelector('.checkout-overlay');
        const checkoutBtn = document.querySelector('.checkout-btn');
        const closeCheckout = document.querySelector('.close-checkout');
        const closeCheckoutBtn = document.querySelector('.close-checkout-btn');
        const checkoutForm = document.getElementById('checkoutForm');
        const checkoutItems = document.getElementById('checkoutItems');
        const checkoutTotal = document.getElementById('checkoutTotal');
        const completeOrderBtn = document.getElementById('completeOrderBtn');
        const paymentMethods = document.querySelectorAll('.payment-method');
        
        // Product Detail Modal Elements
        const productDetailModal = document.querySelector('.product-detail-modal');
        const closeModalBtn = document.querySelector('.close-modal');
        const modalProductName = document.getElementById('modal-product-name');
        const modalMainImage = document.getElementById('modal-main-image');
        const modalRating = document.getElementById('modal-rating');
        const modalPrice = document.getElementById('modal-price');
        const modalDescription = document.getElementById('modal-description');
        const thumbnailContainer = document.querySelector('.thumbnail-images');
        const viewToggleBtns = document.querySelectorAll('.view-btn');
        let currentProductId = null;
        let currentView = 'front';

        // Initialize the website
        document.addEventListener('DOMContentLoaded', function() {
            // Load products
            displayProducts(products);
            
            // Setup event listeners
            setupEventListeners();
            
            // Update cart
            updateCart();
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        navLinks.classList.remove('active');
                        overlay.classList.remove('active');
                    }
                });
            });
            
            // Collection view toggle
            setupCollectionViewToggle();
        });

        // Display Products
        function displayProducts(productsToShow) {
            productGrid.innerHTML = '';
            
            productsToShow.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.dataset.category = product.category;
                
                // Generate star rating
                let stars = '';
                const fullStars = Math.floor(product.rating);
                const hasHalfStar = product.rating % 1 !== 0;
                
                for (let i = 0; i < fullStars; i++) {
                    stars += '<i class="fas fa-star"></i>';
                }
                
                if (hasHalfStar) {
                    stars += '<i class="fas fa-star-half-alt"></i>';
                }
                
                const emptyStars = 5 - Math.ceil(product.rating);
                for (let i = 0; i < emptyStars; i++) {
                    stars += '<i class="far fa-star"></i>';
                }
                
                productCard.innerHTML = `
                    <div class="product-img">
                        <img src="${product.mainImage}" alt="${product.name}">
                        <div class="product-view-toggle">
                            <button class="view-toggle-btn active" data-view="front">Front</button>
                            <button class="view-toggle-btn" data-view="back">Back</button>
                            <button class="view-toggle-btn" data-view="side">Side</button>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-rating">
                            ${stars} <span>(${product.rating})</span>
                        </div>
                        <div class="product-price">R ${product.price.toFixed(2)}</div>
                        <button class="btn view-product-btn" data-id="${product.id}">View Details</button>
                        <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                `;
                
                productGrid.appendChild(productCard);
            });
            
            // Add event listeners to "Add to Cart" buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const productId = parseInt(this.dataset.id);
                    addToCart(productId);
                });
            });
            
            // Add event listeners to "View Details" buttons
            document.querySelectorAll('.view-product-btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const productId = parseInt(this.dataset.id);
                    showProductDetails(productId);
                });
            });
            
            // Add event listeners to product image view toggles
            document.querySelectorAll('.product-card').forEach(card => {
                const viewToggle = card.querySelector('.product-view-toggle');
                const productImg = card.querySelector('.product-img img');
                const viewButtons = card.querySelectorAll('.view-toggle-btn');
                const productId = parseInt(card.querySelector('.add-to-cart').dataset.id);
                
                viewButtons.forEach(button => {
                    button.addEventListener('click', function(e) {
                        e.stopPropagation();
                        
                        const view = this.dataset.view;
                        const product = products.find(p => p.id === productId);
                        
                        if (product && product.images[view]) {
                            productImg.src = product.images[view];
                            
                            // Update active button
                            viewButtons.forEach(btn => btn.classList.remove('active'));
                            this.classList.add('active');
                        }
                    });
                });
                
                // Make entire card clickable for viewing details
                card.addEventListener('click', function() {
                    const productId = parseInt(card.querySelector('.add-to-cart').dataset.id);
                    showProductDetails(productId);
                });
            });
        }

        // Filter Products
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.dataset.filter;
                
                if (filter === 'all') {
                    displayProducts(products);
                } else {
                    const filteredProducts = products.filter(product => product.category === filter);
                    displayProducts(filteredProducts);
                }
            });
        });

        // Show Product Details
        function showProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            
            if (!product) return;
            
            currentProductId = productId;
            currentView = 'front';
            
            // Update modal content
            modalProductName.textContent = product.name;
            modalMainImage.src = product.images.front;
            modalPrice.textContent = `R ${product.price.toFixed(2)}`;
            modalDescription.textContent = product.description || 'Premium quality product from DONDIZJOR collection.';
            
            // Generate rating stars
            let stars = '';
            const fullStars = Math.floor(product.rating);
            const hasHalfStar = product.rating % 1 !== 0;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - Math.ceil(product.rating);
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }
            
            modalRating.innerHTML = stars + ` <span>(${product.rating})</span>`;
            
            // Generate thumbnails
            thumbnailContainer.innerHTML = '';
            Object.entries(product.images).forEach(([view, imageUrl], index) => {
                const thumbnail = document.createElement('div');
                thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
                thumbnail.dataset.view = view;
                thumbnail.dataset.image = imageUrl;
                
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = `${product.name} - ${view} view`;
                
                thumbnail.appendChild(img);
                thumbnailContainer.appendChild(thumbnail);
                
                // Add click event to thumbnails
                thumbnail.addEventListener('click', function() {
                    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    modalMainImage.src = this.dataset.image;
                    currentView = this.dataset.view;
                    
                    // Update view toggle buttons
                    viewToggleBtns.forEach(btn => {
                        btn.classList.toggle('active', btn.dataset.view === currentView);
                    });
                });
            });
            
            // Update view toggle buttons
            viewToggleBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.view === currentView);
                
                btn.addEventListener('click', function() {
                    const view = this.dataset.view;
                    const product = products.find(p => p.id === currentProductId);
                    
                    if (product && product.images[view]) {
                        modalMainImage.src = product.images[view];
                        currentView = view;
                        
                        // Update active button
                        viewToggleBtns.forEach(b => b.classList.remove('active'));
                        this.classList.add('active');
                        
                        // Update active thumbnail
                        document.querySelectorAll('.thumbnail').forEach(t => {
                            t.classList.toggle('active', t.dataset.view === view);
                        });
                    }
                });
            });
            
            // Size selector
            document.querySelectorAll('.size-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Show modal
            productDetailModal.classList.add('active');
            overlay.classList.add('active');
        }

        // Add to Cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            
            if (product) {
                // Check if product is already in cart
                const existingItem = cart.find(item => item.id === productId);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        ...product,
                        quantity: 1
                    });
                }
                
                // Update cart
                updateCart();
                
                // Show confirmation
                showNotification(`${product.name} added to cart!`);
            }
        }

        // Remove from Cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
        }

        // Update Cart
        function updateCart() {
            // Update cart count
            cartCount = cart.reduce((total, item) => total + item.quantity, 0);
            cartCountElement.textContent = cartCount;
            
            // Update cart total
            cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            cartTotalElement.textContent = `R ${cartTotal.toFixed(2)}`;
            
            // Update cart items in sidebar
            renderCartItems();
        }

        // Render Cart Items
        function renderCartItems() {
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
                return;
            }
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                
                cartItem.innerHTML = `
                    <img src="${item.mainImage}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">R ${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove-item" data-id="${item.id}">Remove</button>
                    </div>
                `;
                
                cartItemsContainer.appendChild(cartItem);
            });
            
            // Add event listeners to cart buttons
            document.querySelectorAll('.decrease').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    updateQuantity(productId, -1);
                });
            });
            
            document.querySelectorAll('.increase').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    updateQuantity(productId, 1);
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    removeFromCart(productId);
                });
            });
        }

        // Update Quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            
            if (item) {
                item.quantity += change;
                
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCart();
                }
            }
        }

        // Show Checkout Overlay
        function showCheckoutOverlay() {
            if (cart.length === 0) {
                showNotification('Your cart is empty!');
                return;
            }
            
            // Update checkout summary
            renderCheckoutSummary();
            
            // Show checkout overlay
            checkoutOverlay.classList.add('active');
            overlay.classList.add('active');
            
            // Close cart sidebar
            cartSidebar.classList.remove('active');
        }

        // Render Checkout Summary
        function renderCheckoutSummary() {
            checkoutItems.innerHTML = '';
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                const summaryItem = document.createElement('div');
                summaryItem.className = 'summary-item';
                summaryItem.innerHTML = `
                    <span>${item.name} x ${item.quantity}</span>
                    <span>R ${itemTotal.toFixed(2)}</span>
                `;
                checkoutItems.appendChild(summaryItem);
            });
            
            checkoutTotal.textContent = `R ${cartTotal.toFixed(2)}`;
        }

        // Process Order
        function processOrder(orderData) {
            // Format order details for WhatsApp message
            let orderMessage = `*NEW ORDER - DONDIZJOR*\n\n`;
            orderMessage += `*Customer Details:*\n`;
            orderMessage += `Name: ${orderData.name}\n`;
            orderMessage += `Email: ${orderData.email}\n`;
            orderMessage += `Phone: ${orderData.phone}\n`;
            orderMessage += `Address: ${orderData.address}\n`;
            
            if (orderData.notes) {
                orderMessage += `Notes: ${orderData.notes}\n`;
            }
            
            orderMessage += `\n*Order Items:*\n`;
            
            cart.forEach((item, index) => {
                orderMessage += `${index + 1}. ${item.name} - R ${item.price.toFixed(2)} x ${item.quantity} = R ${(item.price * item.quantity).toFixed(2)}\n`;
            });
            
            orderMessage += `\n*Order Total: R ${cartTotal.toFixed(2)}*\n`;
            orderMessage += `\nPayment Method: ${selectedPaymentMethod === 'whatsapp' ? 'WhatsApp Order' : 'Cash on Delivery'}`;
            
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(orderMessage);
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp in new tab
            window.open(whatsappUrl, '_blank');
            
            // Clear cart and close checkout
            cart = [];
            updateCart();
            checkoutOverlay.classList.remove('active');
            overlay.classList.remove('active');
            
            // Show success message
            showNotification('Order placed successfully! Opening WhatsApp...');
            
            // Reset form
            checkoutForm.reset();
        }

        // Show Notification
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            // Remove notification after animation
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 2300);
        }

       
        // Setup Event Listeners
        function setupEventListeners() {
            // Mobile menu toggle
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                overlay.classList.toggle('active');
            });

            // Cart toggle
            cartIcon.addEventListener('click', function() {
                cartSidebar.classList.add('active');
                overlay.classList.add('active');
            });

            // Close cart
            closeCart.addEventListener('click', function() {
                cartSidebar.classList.remove('active');
                overlay.classList.remove('active');
            });

            // Checkout button
            checkoutBtn.addEventListener('click', showCheckoutOverlay);

            // Close checkout overlay
            closeCheckout.addEventListener('click', function() {
                checkoutOverlay.classList.remove('active');
                overlay.classList.remove('active');
            });

            closeCheckoutBtn.addEventListener('click', function() {
                checkoutOverlay.classList.remove('active');
                overlay.classList.remove('active');
            });

            // Close product detail modal
            closeModalBtn.addEventListener('click', function() {
                productDetailModal.classList.remove('active');
                overlay.classList.remove('active');
            });

            // Close all overlays with main overlay
            overlay.addEventListener('click', function() {
                cartSidebar.classList.remove('active');
                navLinks.classList.remove('active');
                checkoutOverlay.classList.remove('active');
                productDetailModal.classList.remove('active');
                overlay.classList.remove('active');
            });

            // Payment method selection
            paymentMethods.forEach(method => {
                method.addEventListener('click', function() {
                    paymentMethods.forEach(m => m.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedPaymentMethod = this.dataset.method;
                });
            });

            // Checkout form submission
            checkoutForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Validate form
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const address = document.getElementById('address').value.trim();
                
                if (!name || !email || !phone || !address) {
                    showNotification('Please fill in all required fields.');
                    return;
                }
                
                // Validate email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showNotification('Please enter a valid email address.');
                    return;
                }
                
                // Validate phone (South African format)
                const phoneRegex = /^(\+27|0)[1-9][0-9]{8}$/;
                if (!phoneRegex.test(phone)) {
                    showNotification('Please enter a valid South African phone number.');
                    return;
                }
                
                // Prepare order data
                const orderData = {
                    name: name,
                    email: email,
                    phone: phone,
                    address: address,
                    notes: document.getElementById('notes').value.trim(),
                    paymentMethod: selectedPaymentMethod,
                    cart: cart,
                    total: cartTotal
                };
                
                // Process order
                processOrder(orderData);
            });

            // Newsletter form submission
            const newsletterForm = document.querySelector('.newsletter-form');
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                if (emailInput.value) {
                    showNotification('Thank you for subscribing!');
                    emailInput.value = '';
                }
            });

            // Add to cart from modal
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('add-to-cart-modal')) {
                    if (currentProductId) {
                        addToCart(currentProductId);
                        productDetailModal.classList.remove('active');
                        overlay.classList.remove('active');
                    }
                }
            });

            // Size selector in modal
            document.querySelectorAll('.size-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        }