import { Product } from "../types";

export const STORE_INFO = {
  name: "SUPER MARKET",
  location: "Torhayloch Roundabout, Ring Road, Addis Ababa, Ethiopia",
  landmark: "Next to the Torhayloch Traffic Square, adjacent to the Commercial Bank of Ethiopia branch",
  // Masked phone numbers for public display per request
  phone: "+2519xxxxxxxx",
  altPhone: "+2519xxxxxxxx",
  email: "info@torhaylochmarket.com",
  hours: [
    { days: "Monday - Saturday", time: "6:30 AM - 10:00 PM" },
    { days: "Sunday & Holidays", time: "7:00 AM - 9:30 PM" }
  ],
  socials: {
    facebook: "https://facebook.com/torhayloch.supermarket",
    telegram: "https://t.me/torhaylochmarket",
    instagram: "https://instagram.com/torhaylochmarket"
  }
};


export const CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "fruits", name: "Fruits" },
  { id: "vegetables", name: "Vegetables" },
  { id: "beverages", name: "Beverages" },
  { id: "dairy", name: "Dairy Products" },
  { id: "pantry", name: "Pantry & Snacks" },
  { id: "kitchenware", name: "Kitchen & Household" }
];

export const DUMMY_PRODUCTS: Product[] = [
  // --- FRUITS ---
  {
    id: "f1",
    name: "Fresh Assosa Organic Mangoes",
    price: 180,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=500",
    rating: 4.8,
    isFeatured: true,
    isPromo: false,
    description: "Indulge in sweet, juicy mangoes sourced fresh from the orchards of Assosa. Rich in Vitamin C and perfect for fresh juice.",
    unit: "1 kg",
    stock: 45
  },
  {
    id: "f2",
    name: "Sweet Yellow Bananas",
    price: 120,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=500",
    rating: 4.6,
    isFeatured: false,
    isPromo: true,
    promoPrice: 95,
    description: "Perfectly ripe, naturally sweet local yellow bananas. High in potassium and ideal for a quick healthy bite.",
    unit: "1 kg",
    stock: 120
  },
  {
    id: "f3",
    name: "Imported Royal Gala Apples",
    price: 380,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=500",
    rating: 4.5,
    isFeatured: false,
    isPromo: false,
    description: "Crisp, sweet, and juicy handpicked Royal Gala apples. Imported and strictly refrigerated to guarantee premium freshness.",
    unit: "1 kg",
    stock: 35
  },
  {
    id: "f4",
    name: "Zesty Mojo Seedless Oranges",
    price: 160,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=500",
    rating: 4.7,
    isFeatured: true,
    isPromo: true,
    promoPrice: 135,
    description: "Sun-ripened, citrus-rich premium seedless oranges grown near Mojo. High yield of delicious, refreshing orange juice.",
    unit: "1 kg",
    stock: 60
  },

  // --- VEGETABLES ---
  {
    id: "v1",
    name: "Addis Red Onion (Shinkurt)",
    price: 135,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=500",
    rating: 4.9,
    isFeatured: true,
    isPromo: false,
    description: "An absolute staple of Ethiopian cooking. Strong-flavored, premium quality dried red onions essential for preparing the perfect Wot.",
    unit: "1 kg",
    stock: 250
  },
  {
    id: "v2",
    name: "Highland Dinich (Potatoes)",
    price: 75,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=500",
    rating: 4.4,
    isFeatured: false,
    isPromo: true,
    promoPrice: 58,
    description: "Freshly harvested highland potatoes with custom starch levels perfect for rich stews, crisp chips, or baking.",
    unit: "1 kg",
    stock: 200
  },
  {
    id: "v3",
    name: "Plump Sodo Roma Tomatoes",
    price: 90,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=500",
    rating: 4.5,
    isFeatured: false,
    isPromo: false,
    description: "Firm, sun-kissed Roma tomatoes. Ideal for authentic tomato salads, sauces, and local pasta recipes.",
    unit: "1 kg",
    stock: 150
  },
  {
    id: "v4",
    name: "Addis Fresh Green Peppers (Karia)",
    price: 110,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1588612053641-fc6af2fbe276?auto=format&fit=crop&q=80&w=500",
    rating: 4.8,
    isFeatured: true,
    isPromo: false,
    description: "Crispy, mild-to-spicy green chilies, standard for garnish. An essential finishing touch for Tibs, salad, and Kitfo toppings.",
    unit: "500g",
    stock: 80
  },

  // --- BEVERAGES ---
  {
    id: "b1",
    name: "Sparkling Ambo Mineral Water",
    price: 45,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=500", // Glass bottle layout representation
    rating: 4.9,
    isFeatured: true,
    isPromo: false,
    description: "Ethiopia's legendary naturally sparkling mineral water. Crisp, rich in natural underground minerals, since 1930.",
    unit: "1 Liter (Glass)",
    stock: 180
  },
  {
    id: "b2",
    name: "Harar Ground Coffee (Sip of Heritage)",
    price: 450,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=500",
    rating: 4.9,
    isFeatured: true,
    isPromo: true,
    promoPrice: 395,
    description: "Medium roast ground coffee beans from the Highlands of Harar. Features deep mocha tones and a robust, fruity aroma.",
    unit: "500g Bag",
    stock: 90
  },
  {
    id: "b3",
    name: "Pure Highland Spring Water",
    price: 35,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb6?auto=format&fit=crop&q=80&w=500",
    rating: 4.7,
    isFeatured: false,
    isPromo: false,
    description: "Ultra-purified local spring water. Perfect hydration for on-the-go. 100% recyclable plastic bottle.",
    unit: "1.5 Liters",
    stock: 300
  },
  {
    id: "b4",
    name: "Keribo Spiced Hibiscus Brew",
    price: 110,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=500",
    rating: 4.6,
    isFeatured: false,
    isPromo: false,
    description: "Artisanal family-recipe traditional sweet spiced drink. Made with cloves, cardamom, ginger, and organic ingredients.",
    unit: "1 Liter",
    stock: 40
  },

  // --- DAIRY PRODUCTS ---
  {
    id: "d1",
    name: "Shola Pasteurised Cow Milk",
    price: 55,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=500",
    rating: 4.8,
    isFeatured: true,
    isPromo: false,
    description: "Freshly pasteurized milk from Shola Dairies. Safely processed, nutrient-rich, and creamy. Best enjoyed chilled or boiled for macchiato.",
    unit: "500ml Pouch",
    stock: 140
  },
  {
    id: "d2",
    name: "Fresh Local Ayib (Cottage Cheese)",
    price: 290,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1486299267070-8382e214434b?auto=format&fit=crop&q=80&w=500", // Cheese block
    rating: 4.9,
    isFeatured: true,
    isPromo: false,
    description: "Traditional soft white cottage cheese. Perfectly crumbly and mild. An absolute necessity when serving Kitfo, Gomen, or special Wots.",
    unit: "500g Pack",
    stock: 50
  },
  {
    id: "d3",
    name: "Imported Cheddar Cheese Blocks",
    price: 680,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1486299267070-8382e214434b?auto=format&fit=crop&q=80&w=500",
    rating: 4.5,
    isFeatured: false,
    isPromo: true,
    promoPrice: 590,
    description: "Sharp and creamy imported yellow cheddar cheese. Perfect for breakfast sandwiches, macaroni, or grilled entrees.",
    unit: "1 kg Block",
    stock: 25
  },

  // --- SNACKS ---
  {
    id: "s1",
    name: "Traditional Roasted Kollo Mix",
    price: 140,
    category: "pantry",
    image: "https://images.unsplash.com/photo-1511224494911-d790e5e6028a?auto=format&fit=crop&q=80&w=500", // Grains
    rating: 4.8,
    isFeatured: false,
    isPromo: true,
    promoPrice: 110,
    description: "Highly nutritious traditional Ethiopian snack of roasted barley, peanuts, and parched safflower seeds. Crunchy and savory.",
    unit: "500g Pack",
    stock: 100
  },
  {
    id: "s2",
    name: "Crispy Lentil Sambusa Pack",
    price: 180,
    category: "pantry",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=500",
    rating: 4.7,
    isFeatured: true,
    isPromo: false,
    description: "Golden, crispy, freshly-fried savory pastry shells filled with spiced green lentils, onions, and jalapeno peppers.",
    unit: "6 Pieces",
    stock: 65
  },
  {
    id: "s3",
    name: "Desta Local Chocolate Wafers",
    price: 90,
    category: "pantry",
    image: "https://images.unsplash.com/photo-1549007994-cb92ca714503?auto=format&fit=crop&q=80&w=500",
    rating: 4.4,
    isFeatured: false,
    isPromo: false,
    description: "Crispy local chocolate-coated biscuit wafers. A beloved sweet treat for kids and families.",
    unit: "1 Pack (10 pcs)",
    stock: 180
  },

  // --- HOUSEHOLD ITEMS ---
  {
    id: "h1",
    name: "Ariel Laundry Detergent Powder",
    price: 360,
    category: "kitchenware",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=500",
    rating: 4.7,
    isFeatured: false,
    isPromo: true,
    promoPrice: 315,
    description: "Excellent dirt and stain removal in one single wash. Safe on colors and leaves laundry with a refreshing perfume aroma.",
    unit: "1 kg Box",
    stock: 80
  },
  {
    id: "h2",
    name: "Sunlight Lemon Dishwash Bar",
    price: 65,
    category: "kitchenware",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=500",
    rating: 4.6,
    isFeatured: false,
    isPromo: false,
    description: "Highly concentrated grease-cutting lemon power bar. Keeps your utensils sparkly clean and free of tough smells.",
    unit: "200g Bar",
    stock: 220
  },
  {
    id: "h3",
    name: "Premium Soft Tissues (Addis Pack)",
    price: 110,
    category: "kitchenware",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=500",
    rating: 4.5,
    isFeatured: false,
    isPromo: false,
    description: "Highly absorbent, extraordinarily soft facial tissues. Two-ply, hypoallergenic, and perfect for the home, car, or office.",
    unit: "Pack of 150 Sheets",
    stock: 110
  }
];
