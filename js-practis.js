const { STORE_NAME } = require('./constants');

const storeDescription = {
    budget: 10000,
    storeName: STORE_NAME,
    employees: ["Ken", "Hren", "Barbie"],
    products: {
        havchik: 15,
        vipivka: 13
    },
    open: true
    
};

storeDescription.products.vipivka = 25; 
storeDescription.open = false;

console.log("storeDescription : ", storeDescription );
