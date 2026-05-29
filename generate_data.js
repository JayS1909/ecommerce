/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const categories = ["Oversized Tees", "Regular Tees", "Hoodies", "Bottoms", "Accessories"];
const types = {
    "Oversized Tees": ["Acid Wash Oversized", "Anime Print Oversized", "Minimalist Oversized", "Vintage Wash Oversized"],
    "Regular Tees": ["Basic Crewneck", "Graphic Tee", "V-Neck", "Summer Drop Tee"],
    "Hoodies": ["Heavyweight Hoodie", "Zip-Up Hoodie", "Essential Pullover", "Fleece Hoodie"],
    "Bottoms": ["Cargo Pants", "Baggy Jeans", "Sweatpants", "Shorts"],
    "Accessories": ["Cap", "Tote Bag", "Socks", "Beanie"]
};

const colors = ["Black", "White", "Navy", "Grey", "Olive", "Maroon"];

const products = [];
let idCounter = 1;

for (let i = 0; i < 50; i++) {
    const category = categories[i % categories.length];
    const typeList = types[category];
    const type = typeList[Math.floor(Math.random() * typeList.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const name = `${color} ${type}`;
    const price = (Math.random() * 40 + 19).toFixed(2);

    products.push({
        id: idCounter.toString(),
        name,
        category,
        price: parseFloat(price),
        image: `https://via.placeholder.com/300x400?text=${encodeURIComponent(name)}`,
        hoverImage: `https://via.placeholder.com/300x400?text=${encodeURIComponent(name)}+Back`,
        description: `Premium quality ${name.toLowerCase()} featuring our signature comfort fit. Made with high-grade fabric perfect for everyday wear.`,
        fabric: "100% Premium Cotton",
        fit: category.includes("Oversized") ? "Oversized Fit" : "Regular Fit",
        washCare: "Machine wash cold, tumble dry low",
        isNew: i < 10,
        isBestSeller: i % 5 === 0,
        collection: i % 3 === 0 ? "Acid Wash Collection" : i % 4 === 0 ? "Anime Collection" : "Minimal Collection",
        discount: i % 4 === 0 ? 15 : 0
    });

    idCounter++;
}

fs.mkdirSync('./src/data', { recursive: true });
fs.writeFileSync('./src/data/products.json', JSON.stringify(products, null, 2));

console.log("Created 50 products in src/data/products.json with updated categories");
