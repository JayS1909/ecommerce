/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const categories = ["Oversized Tees", "Regular Tees", "Hoodies", "Bottoms", "Accessories"];
const types = {
    "Oversized Tees": ["Acid Wash", "Anime Print", "Minimalist", "Graphic Print", "Vintage Wash"],
    "Regular Tees": ["Basic", "Graphic", "Minimalist"],
    "Hoodies": ["Pullover", "Zip Hoodie", "Graphic Hoodie"],
    "Bottoms": ["Joggers", "Cargo Pants", "Shorts"],
    "Accessories": ["Caps", "Chains", "Socks"]
};

const colors = ["Black", "White", "Navy", "Grey", "Olive", "Maroon"];

const products = [];
let idCounter = 1;

for (let i = 0; i < 50; i++) {
    const category = categories[i % categories.length];
    const typeList = types[category];
    const type = typeList[Math.floor(Math.random() * typeList.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const name = `${color} ${type} ${category.replace(' Accessories', '')}`;
    const price = (Math.random() * 40 + 19).toFixed(2);
    const salePrice = i % 4 === 0 ? parseFloat((price * 0.85).toFixed(2)) : null;

    products.push({
        id: idCounter.toString(),
        name,
        category,
        subcategory: type,
        price: parseFloat(price),
        salePrice: salePrice,
        image: `/images/logo/logo.png`,
        hoverImage: `/images/logo/logo.png`,
        description: `Premium quality ${name.toLowerCase()} featuring our signature comfort fit. Made with high-grade fabric perfect for everyday wear.`,
        fabric: "100% Premium Cotton",
        fit: category.includes("Oversized") ? "Oversized Fit" : "Regular Fit",
        washCare: "Machine wash cold, tumble dry low",
        sizes: category !== 'Accessories' ? ['S', 'M', 'L', 'XL', 'XXL'] : ['One Size'],
        color: color,
        isNew: i < 10,
        isBestSeller: i % 5 === 0,
        collection: i % 3 === 0 ? "Acid Wash Collection" : i % 4 === 0 ? "Anime Collection" : "Minimal Collection",
        discount: i % 4 === 0 ? 15 : 0,
        inventory: Math.floor(Math.random() * 100) + 10,
        status: "Active"
    });

    idCounter++;
}

fs.mkdirSync('./src/data', { recursive: true });
fs.writeFileSync('./src/data/products.json', JSON.stringify(products, null, 2));

console.log("Created 50 products in src/data/products.json with updated categories");
