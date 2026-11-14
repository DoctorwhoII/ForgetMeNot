/**
 * Forget Me Not - LocalStorage & Data Manager
 * Handles persistent state for profiles, occasions, saved gifts, consultations, and subscriptions.
 */

const STORAGE_KEYS = {
    USER: 'fmn_user',
    PROFILES: 'fmn_profiles',
    OCCASIONS: 'fmn_occasions',
    SAVED_GIFTS: 'fmn_saved_gifts',
    CONSULTATIONS: 'fmn_consultations',
    NOTIFICATIONS: 'fmn_notifications',
    SUBSCRIPTION: 'fmn_subscription'
};

// Initial Demonstration Data
const DEFAULT_USER = {
    name: 'Sarah Al-Mahmoud',
    email: 'sarah@example.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    tier: 'FREE' // FREE, STANDARD, PREMIUM
};

const DEFAULT_PROFILES = [
    {
        id: 'prof-1',
        name: 'Fatima Al-Mahmoud',
        relationship: 'Mother',
        description: 'Appreciates traditional elegance, fine teas, and handmade artisanal crafts.',
        interests: ['Fine Teas', 'Gardening', 'Artisanal Ceramics', 'Cashmere Scarves'],
        favoriteColors: ['Sage Green', 'Warm Cream', 'Dusty Rose'],
        favoriteBrands: ['Wedgwood', 'Fortnum & Mason', 'Local Artisans'],
        hobbies: ['Botanical Gardening', 'Reading Poetry'],
        budget: '50-100 BHD',
        dislikes: ['Synthetic fragrances', 'Bright neon plastics']
    },
    {
        id: 'prof-2',
        name: 'Zainab Rashid',
        relationship: 'Best Friend',
        description: 'Passionate about minimalist home decor, specialty coffee, and contemporary literature.',
        interests: ['Specialty Coffee', 'Minimalist Decor', 'Baking', 'Indie Books'],
        favoriteColors: ['Muted Blue', 'Warm Off-White', 'Charcoal'],
        favoriteBrands: ['Blue Bottle', 'Muji', 'Aesop'],
        hobbies: ['Coffee Brewing', 'Pottery'],
        budget: '25-50 BHD',
        dislikes: ['Sweet perfumes', 'Cluttered knick-knacks']
    },
    {
        id: 'prof-3',
        name: 'Yousef Al-Khalifa',
        relationship: 'Partner',
        description: 'Loves gourmet cooking, mechanical watches, and weekend hiking adventures.',
        interests: ['Gourmet Cooking', 'Horology', 'Outdoor Exploration', 'Vinyl Records'],
        favoriteColors: ['Forest Green', 'Navy', 'Slate Grey'],
        favoriteBrands: ['Le Creuset', 'Seiko', 'Patagonia'],
        hobbies: ['Cooking', 'Hiking', 'Collecting Vinyl'],
        budget: '75-150 BHD',
        dislikes: ['Impractical gadgets', 'Fast fashion']
    }
];

const DEFAULT_OCCASIONS = [
    {
        id: 'occ-1',
        profileId: 'prof-1',
        name: "Mother's Birthday",
        type: 'Birthday',
        date: '2026-05-14',
        recurrence: 'annual',
        description: 'Celebrate her special day with something thoughtful and memorable.',
        notes: 'She mentioned wanting a hand-glazed ceramic tea set.'
    },
    {
        id: 'occ-2',
        profileId: 'prof-2',
        name: 'Promotion Celebration',
        type: 'Achievement',
        date: '2026-04-20',
        recurrence: 'one-time',
        description: 'Congratulate her on the well-deserved promotion to Creative Director.',
        notes: 'Loves specialty Ethiopian coffee beans.'
    },
    {
        id: 'occ-3',
        profileId: 'prof-3',
        name: 'Wedding Anniversary',
        type: 'Anniversary',
        date: '2026-08-10',
        recurrence: 'annual',
        description: 'Our annual celebration of love and companionship.',
        notes: 'Planning a quiet dinner and a meaningful keepsake.'
    }
];

const CURATED_GIFTS = [
    {
        id: 'gift-1',
        name: 'Artisanal Hand-Glazed Ceramic Tea Set',
        category: 'Home & Kitchen',
        price: 45.00,
        currency: 'BHD',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
        description: 'Exquisite handcrafted ceramic teapot and two matching cups in earthy sage tones.',
        tags: ['Fine Teas', 'Artisanal Ceramics', 'Mother', 'Home & Kitchen'],
        brand: 'Local Artisans',
        link: '#'
    },
    {
        id: 'gift-2',
        name: 'Rare Botanical Tea Selection Box',
        category: 'Food & Drink',
        price: 28.00,
        currency: 'BHD',
        image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600&auto=format&fit=crop&q=80',
        description: 'Curated collection of organic white, green, and rare floral infusion teas in a keepsake tin.',
        tags: ['Fine Teas', 'Mother', 'Food & Drink'],
        brand: 'Fortnum & Mason',
        link: '#'
    },
    {
        id: 'gift-3',
        name: 'Pour-Over Specialty Coffee Kit',
        category: 'Food & Drink',
        price: 35.00,
        currency: 'BHD',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
        description: 'Professional ceramic dripper, glass server, and single-origin Ethiopian coffee beans.',
        tags: ['Specialty Coffee', 'Best Friend', 'Food & Drink'],
        brand: 'Blue Bottle',
        link: '#'
    },
    {
        id: 'gift-4',
        name: 'Minimalist Linen Bound Journal',
        category: 'Stationery',
        price: 18.50,
        currency: 'BHD',
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
        description: 'Acid-free cream paper bound in textured natural linen cloth with ribbon bookmark.',
        tags: ['Indie Books', 'Minimalist Decor', 'Best Friend'],
        brand: 'Muji',
        link: '#'
    },
    {
        id: 'gift-5',
        name: 'Cast Iron Enameled Dutch Oven',
        category: 'Home & Kitchen',
        price: 85.00,
        currency: 'BHD',
        image: 'https://images.unsplash.com/photo-1584990347426-c585c6489f61?w=600&auto=format&fit=crop&q=80',
        description: 'Classic French oven designed for exceptional heat retention and gourmet slow-cooking.',
        tags: ['Gourmet Cooking', 'Partner', 'Home & Kitchen'],
        brand: 'Le Creuset',
        link: '#'
    },
    {
        id: 'gift-6',
        name: 'Automatic Field Watch in Matte Steel',
        category: 'Accessories',
        price: 120.00,
        currency: 'BHD',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
        description: 'Robust automatic mechanical movement with sapphire crystal and interchangeable canvas strap.',
        tags: ['Horology', 'Partner', 'Accessories'],
        brand: 'Seiko',
        link: '#'
    },
    {
        id: 'gift-7',
        name: 'Aromatherapy Botanical Diffuser',
        category: 'Wellness',
        price: 32.00,
        currency: 'BHD',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&auto=format&fit=crop&q=80',
        description: 'Pure essential oil blend infused with cedarwood, eucalyptus, and amber notes.',
        tags: ['Minimalist Decor', 'Wellness', 'Best Friend', 'Mother'],
        brand: 'Aesop',
        link: '#'
    },
    {
        id: 'gift-8',
        name: 'Handcrafted Cashmere Travel Wrap',
        category: 'Fashion',
        price: 95.00,
        currency: 'BHD',
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&auto=format&fit=crop&q=80',
        description: 'Utterly soft Mongolian cashmere wrap, perfect for chilly evenings and travel.',
        tags: ['Cashmere Scarves', 'Mother', 'Fashion'],
        brand: 'Local Artisans',
        link: '#'
    }
];

const DEFAULT_NOTIFICATIONS = [
    {
        id: 'notif-1',
        title: "Mother's Birthday in 30 days",
        message: 'Time to explore thoughtful gift recommendations for Fatima.',
        date: '2026-04-14',
        read: false
    },
    {
        id: 'notif-2',
        title: 'Promotion Celebration coming up',
        message: 'Zainab Rashid has an occasion on April 20, 2026.',
        date: '2026-04-15',
        read: false
    }
];

// Storage Helper Functions
const Storage = {
    init() {
        if (!localStorage.getItem(STORAGE_KEYS.USER)) {
            localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(DEFAULT_USER));
        }
        if (!localStorage.getItem(STORAGE_KEYS.PROFILES)) {
            localStorage.setItem(STORAGE_KEYS.PROFILES, JSON.stringify(DEFAULT_PROFILES));
        }
        if (!localStorage.getItem(STORAGE_KEYS.OCCASIONS)) {
            localStorage.setItem(STORAGE_KEYS.OCCASIONS, JSON.stringify(DEFAULT_OCCASIONS));
        }
        if (!localStorage.getItem(STORAGE_KEYS.SAVED_GIFTS)) {
            localStorage.setItem(STORAGE_KEYS.SAVED_GIFTS, JSON.stringify(['gift-1', 'gift-3']));
        }
        if (!localStorage.getItem(STORAGE_KEYS.CONSULTATIONS)) {
            localStorage.setItem(STORAGE_KEYS.CONSULTATIONS, JSON.stringify([
                {
                    id: 'cons-1',
                    profileName: 'Fatima Al-Mahmoud',
                    occasionName: "Mother's Birthday",
                    type: 'Text Consultation',
                    budget: '50-100 BHD',
                    status: 'Completed',
                    date: '2026-03-01',
                    notes: 'Consultant suggested artisanal ceramics and rare teas.'
                }
            ]));
        }
        if (!localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) {
            localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(DEFAULT_NOTIFICATIONS));
        }
    },

    getUser() {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)) || DEFAULT_USER;
    },

    updateUser(data) {
        const user = { ...this.getUser(), ...data };
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
        return user;
    },

    getProfiles() {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROFILES)) || [];
    },

    saveProfiles(profiles) {
        localStorage.setItem(STORAGE_KEYS.PROFILES, JSON.stringify(profiles));
    },

    addProfile(profileData) {
        const profiles = this.getProfiles();
        const user = this.getUser();
        
        // Enforce Free Tier limit (3 profiles)
        if (user.tier === 'FREE' && profiles.length >= 3) {
            throw new Error('Free tier is limited to 3 relationship profiles. Please upgrade to Standard or Premium for more.');
        }

        const newProfile = {
            id: 'prof-' + Date.now(),
            ...profileData
        };
        profiles.push(newProfile);
        this.saveProfiles(profiles);
        return newProfile;
    },

    updateProfile(id, profileData) {
        const profiles = this.getProfiles();
        const index = profiles.findIndex(p => p.id === id);
        if (index !== -1) {
            profiles[index] = { ...profiles[index], ...profileData };
            this.saveProfiles(profiles);
            return profiles[index];
        }
        return null;
    },

    deleteProfile(id) {
        let profiles = this.getProfiles();
        profiles = profiles.filter(p => p.id !== id);
        this.saveProfiles(profiles);
        // Also remove associated occasions
        let occasions = this.getOccasions();
        occasions = occasions.filter(o => o.profileId !== id);
        this.saveOccasions(occasions);
    },

    getOccasions() {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.OCCASIONS)) || [];
    },

    saveOccasions(occasions) {
        localStorage.setItem(STORAGE_KEYS.OCCASIONS, JSON.stringify(occasions));
    },

    addOccasion(occasionData) {
        const occasions = this.getOccasions();
        const newOccasion = {
            id: 'occ-' + Date.now(),
            ...occasionData
        };
        occasions.push(newOccasion);
        this.saveOccasions(occasions);
        return newOccasion;
    },

    updateOccasion(id, occasionData) {
        const occasions = this.getOccasions();
        const index = occasions.findIndex(o => o.id === id);
        if (index !== -1) {
            occasions[index] = { ...occasions[index], ...occasionData };
            this.saveOccasions(occasions);
            return occasions[index];
        }
        return null;
    },

    deleteOccasion(id) {
        let occasions = this.getOccasions();
        occasions = occasions.filter(o => o.id !== id);
        this.saveOccasions(occasions);
    },

    getSavedGifts() {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED_GIFTS)) || [];
    },

    toggleSaveGift(giftId) {
        let saved = this.getSavedGifts();
        if (saved.includes(giftId)) {
            saved = saved.filter(id => id !== giftId);
        } else {
            saved.push(giftId);
        }
        localStorage.setItem(STORAGE_KEYS.SAVED_GIFTS, JSON.stringify(saved));
        return saved;
    },

    getCuratedGifts() {
        return CURATED_GIFTS;
    },

    getConsultations() {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.CONSULTATIONS)) || [];
    },

    addConsultation(consultationData) {
        const list = this.getConsultations();
        const newItem = {
            id: 'cons-' + Date.now(),
            date: new Date().toISOString().split('T')[0],
            status: 'Pending Consultation',
            ...consultationData
        };
        list.unshift(newItem);
        localStorage.setItem(STORAGE_KEYS.CONSULTATIONS, JSON.stringify(list));
        return newItem;
    },

    getNotifications() {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) || [];
    },

    markNotificationsRead() {
        const notifs = this.getNotifications().map(n => ({ ...n, read: true }));
        localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifs));
    }
};

// Initialize on load
Storage.init();
