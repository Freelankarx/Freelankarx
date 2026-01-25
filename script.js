document.addEventListener('DOMContentLoaded', function () {
    // ==========================
    // Portfolio & Testimonial Data
    // ==========================
    const portfolioProjects = [
        {"title": "Luxury Watch Store", "category": "Shopify", "description": "High-end Shopify store for luxury timepieces with automated inventory.", "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"},
        {"title": "Eco-Friendly Apparel", "category": "Fashion", "description": "Sustainable fashion brand setup with Klaviyo email flows.", "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80"},
        {"title": "Gourmet Coffee Subscription", "category": "E-commerce", "description": "Recurring subscription model for a specialty coffee roaster.", "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"},
        {"title": "Fitness Equipment Funnel", "category": "Marketing", "description": "High-converting TikTok ad funnel for home workout gear.", "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"},
        {"title": "Organic Skincare Brand", "category": "Beauty", "description": "Complete Shopify build for a natural beauty product line.", "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"},
        {"title": "Tech Gadget Dropshipping", "category": "Dropshipping", "description": "Automated dropshipping store for trending electronics.", "image": "https://images.unsplash.com/photo-1526733158173-e1b2317199a2?auto=format&fit=crop&w=800&q=80"},
        {"title": "Handmade Jewelry Boutique", "category": "Fashion", "description": "Elegant storefront for custom artisan jewelry.", "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"},
        {"title": "Home Decor Marketplace", "category": "Shopify", "description": "Multi-vendor platform for interior design products.", "image": "https://images.unsplash.com/photo-1513519247388-4e28371197df?auto=format&fit=crop&w=800&q=80"},
        {"title": "Pet Supplies Store", "category": "E-commerce", "description": "Pet-friendly UI/UX design with product bundle features.", "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"},
        {"title": "Digital Course Platform", "category": "Education", "description": "Shopify setup for selling digital downloads and courses.", "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"},
        {"title": "Gaming Accessories Hub", "category": "Niche", "description": "Dark-themed store for pro gamers and enthusiasts.", "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"},
        {"title": "Baby Products Brand", "category": "Family", "description": "Safe and clean design for premium baby essentials.", "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"},
        {"title": "Kitchenware Specialist", "category": "Home", "description": "Optimized product pages for high-ticket kitchen tools.", "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"},
        {"title": "Outdoor Adventure Gear", "category": "Niche", "description": "Rugged Shopify store for camping and hiking equipment.", "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80"},
        {"title": "Supplement Brand Launch", "category": "Health", "description": "Compliant and professional store for health supplements.", "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"},
        {"title": "Art Print Gallery", "category": "Creative", "description": "Portfolio-style store for digital and physical art prints.", "image": "https://images.unsplash.com/photo-1513519247388-4e28371197df?auto=format&fit=crop&w=800&q=80"},
        {"title": "Vintage Clothing Store", "category": "Fashion", "description": "Unique retro design for a curated vintage collection.", "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"},
        {"title": "Smart Home Solutions", "category": "Tech", "description": "Clean, futuristic UI for IoT and smart home devices.", "image": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"},
        {"title": "Subscription Box Service", "category": "E-commerce", "description": "Complex subscription logic for monthly surprise boxes.", "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"},
        {"title": "Modern Furniture Outlet", "category": "Home", "description": "Minimalist design for high-end furniture pieces.", "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"},
        {"title": "Yoga & Wellness Shop", "category": "Health", "description": "Calm, zen-inspired Shopify build for yoga gear.", "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"},
        {"title": "Car Accessories Portal", "category": "Automotive", "description": "Search-optimized store for vehicle parts and mods.", "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80"},
        {"title": "Organic Tea Merchant", "category": "Food", "description": "Sophisticated store for premium loose-leaf teas.", "image": "https://images.unsplash.com/photo-1544787210-2283944749e8?auto=format&fit=crop&w=800&q=80"},
        {"title": "Sustainable Footwear", "category": "Fashion", "description": "Eco-conscious brand focusing on recycled materials.", "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"},
        {"title": "Phone Case Designer", "category": "Niche", "description": "Customizable product options for unique phone cases.", "image": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"},
        {"title": "Gardening Supply Store", "category": "Home", "description": "Seasonal marketing setup for garden enthusiasts.", "image": "https://images.unsplash.com/photo-1416870213410-67977533865b?auto=format&fit=crop&w=800&q=80"},
        {"title": "Luxury Bedding Brand", "category": "Home", "description": "Comfort-focused UI for high-thread-count linens.", "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"},
        {"title": "Bespoke Suit Tailor", "category": "Fashion", "description": "Lead generation and booking system for custom suits.", "image": "https://images.unsplash.com/photo-1594932224828-b4b059b6f684?auto=format&fit=crop&w=800&q=80"},
        {"title": "Coffee Roastery Site", "category": "Food", "description": "Artisan coffee brand with local delivery setup.", "image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"},
        {"title": "Pet Tech Innovations", "category": "Tech", "description": "E-commerce for smart pet feeders and trackers.", "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"},
        {"title": "Handcrafted Leather Goods", "category": "Fashion", "description": "Rustic, premium store for leather bags and belts.", "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"},
        {"title": "Organic Snack Brand", "category": "Food", "description": "Wholesale and retail Shopify setup for healthy snacks.", "image": "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?auto=format&fit=crop&w=800&q=80"}
    ];

    const testimonials = [
        {"name": "Sarah Johnson", "role": "CEO, EcoStyle", "text": "Olamilekan transformed our Shopify store. Our conversion rate increased by 40% in just one month!", "rating": 5},
        {"name": "Mark Thompson", "role": "Founder, TechHub", "text": "The best Shopify expert I've worked with. Fast, professional, and knows exactly what sells.", "rating": 5},
        {"name": "Elena Rodriguez", "role": "Owner, GlowBeauty", "text": "Incredible attention to detail. The TikTok funnel he built for us is generating consistent sales.", "rating": 5},
        {"name": "David Chen", "role": "Marketing Director, FitGear", "text": "A true growth partner. His email automation strategy recovered 15% of our abandoned carts.", "rating": 5},
        {"name": "Jessica Lee", "role": "Designer, PureArt", "text": "My store looks stunning and performs even better. Highly recommend Freelankarx!", "rating": 5},
        {"name": "Michael Brown", "role": "Entrepreneur", "text": "Professional service from start to finish. Olamilekan really understands the eCommerce landscape.", "rating": 4},
        {"name": "Sophie Martin", "role": "Boutique Owner", "text": "Exceeded my expectations. The custom features he added to my Shopify theme are perfect.", "rating": 5},
        {"name": "James Wilson", "role": "Dropshipper", "text": "He built an automated store that actually works. I'm finally seeing consistent daily profits.", "rating": 5},
        {"name": "Linda Garcia", "role": "Wellness Coach", "text": "Smooth process and great communication. My digital products are selling like crazy!", "rating": 5},
        {"name": "Robert Taylor", "role": "Furniture Importer", "text": "Managed our complex inventory setup with ease. A highly skilled Shopify developer.", "rating": 5}
    ];

    // ==========================
    // Inject Data
    // ==========================
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (portfolioGrid) {
        portfolioProjects.forEach(project => {
            const item = document.createElement('div');
            item.className = 'portfolio-item';
            item.innerHTML = `
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="portfolio-overlay">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <span class="category-tag">${project.category}</span>
                </div>
            `;
            portfolioGrid.appendChild(item);
        });
    }

    const testimonialGrid = document.getElementById('testimonialGrid');
    if (testimonialGrid) {
        testimonials.forEach(t => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.innerHTML = `
                <div class="stars">${'⭐'.repeat(t.rating)}</div>
                <p>"${t.text}"</p>
                <div class="client">
                    <div class="client-info">
                        <strong>${t.name}</strong>
                        <span>${t.role}</span>
                    </div>
                </div>
            `;
            testimonialGrid.appendChild(card);
        });
    }

    // ==========================
    // Navigation
    // ==========================
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');
    const backdrop = document.getElementById('backdrop');

    function toggleSidebar() {
        sidebar.classList.toggle('open');
        backdrop.classList.toggle('show');
    }

    if (hamburger) hamburger.addEventListener('click', toggleSidebar);
    if (closeBtn) closeBtn.addEventListener('click', toggleSidebar);
    if (backdrop) backdrop.addEventListener('click', toggleSidebar);

    // Close sidebar on link click
    document.querySelectorAll('.sidebar nav a').forEach(link => {
        link.addEventListener('click', toggleSidebar);
    });

    // ==========================
    // GSAP Animations
    // ==========================
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    gsap.from('.hero-content h1', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
    gsap.from('.hero-content p', { opacity: 0, y: 30, duration: 1, delay: 0.3, ease: 'power3.out' });
    gsap.from('.hero-btns', { opacity: 0, y: 20, duration: 1, delay: 0.6, ease: 'power3.out' });

    // Section Reveals
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out'
        });
    });

    // Portfolio & Testimonial Item Stagger
    gsap.from('.portfolio-item', {
        scrollTrigger: {
            trigger: '#portfolio',
            start: 'top 70%',
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.7)'
    });
});
