const apps=[
    ['Veggies & dip', 'crisp'],
    ['Pita & hummus', 'pillowy'],
    ['Spinach artichoke dip', 'creamy'],
    ['Bread for dipping, with olive oil and flake sea salt', 'rich'],
    ['Cabbage-stuffed bao', 'surprising']
];

const mains=[
    ['Cheezeburger', 'meaty'],
    ["Chik'n sandwiches", 'refreshing'],
    ['Pasta marinara with mushrooms', 'carby'],
    ['Falafel sandwiches', 'fresh'],
    ['Nachos', 'cheesy'],
    ['Quesadillas', 'spicy'],
    ['Stir fry', 'tangy']
];

const sides=[
    ['Fries', 'crispy'],
    ['Garlic bread', 'garlickly'],
    ['Side salad', 'leafy'],
    ['Roasted broccoli', 'cruciferous'],
    ['Fried rice', 'delicious'],
    ['Dumplings', 'squishy']
];

const desserts=[
    ['Ice cream', 'cold'],
    ['Pineapple upside-down cake', 'tropical'],
    ['Chocolate chip cookies', 'gooey'],
    ['Cherry pie', 'sweet']
];

function randomApp(){
    const newApp = numGen(apps.length);
    return apps[newApp]; 
}

function randomMain(){
    const newMain = numGen(mains.length);
    return mains[newMain];
}

function randomSide(){
    const newSide = numGen(sides.length);
    return sides[newSide];
}

function randomDessert(){
    const newDessert = numGen(desserts.length);
    return desserts[newDessert];
}

function numGen(max){
    return Math.floor(Math.random()*max);
}

console.log(randomApp());
console.log(randomMain());
console.log(randomSide());
console.log(randomDessert());