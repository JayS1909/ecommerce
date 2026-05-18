const fs = require('fs');

const categories = ["Men", "Women", "Kids", "Accessories"];
const types = {
    "Men": ["T-Shirt", "Jeans", "Jacket", "Sweater", "Shorts", "Suit"],
    "Women": ["Dress", "Blouse", "Skirt", "Jeans", "Jacket", "Cardigan"],
    "Kids": ["T-Shirt", "Pants", "Jacket", "Dress", "Shorts", "Onesie"],
    "Accessories": ["Hat", "Belt", "Scarf", "Sunglasses", "Watch", "Bag"]
};

const colors = ["Black", "White", "Blue", "Red", "Green", "Grey", "Navy"];

const products = [];
let idCounter = 1;

for (let i = 0; i < 50; i++) {
    const category = categories[i % categories.length];
    const typeList = types[category];
    const type = typeList[Math.floor(Math.random() * typeList.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const name = `${color} ${type} for ${category}`;
    const price = (Math.random() * 80 + 10).toFixed(2);

    products.push({
        id: idCounter.toString(),
        name,
        category,
        price: parseFloat(price),
        image: `https://via.placeholder.com/300x400?text=${encodeURIComponent(name)}`,
        description: `A high quality ${name.toLowerCase()} perfect for your everyday needs.`,
    });

    idCounter++;
}

fs.mkdirSync('./src/data', { recursive: true });
fs.writeFileSync('./src/data/products.json', JSON.stringify(products, null, 2));

console.log("Created 50 products in src/data/products.json");
