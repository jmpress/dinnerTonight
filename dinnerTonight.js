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

function splitArray(fullArray, index){
    //takes in an array of arrays; returns a new array that contains the 'index' element of the internal arrays from fullArray 
    //fullArray, 0 returns first element of each inner array in a new array
    //fullArray, 1 returns second element of each inner array in a new array
    //This is intended to extract the food or adjective value from the matched pairs in the arrays, but maintain the indexed relationship between the two.
    const subArray = [];
    for (let i = 0; i < fullArray.length; i++){
        subArray.push(fullArray[i][index]);
    }
    return subArray;
}


function generateSummary(adjArray){
    const sumString = `Tonight, start things off with a ${adjArray[0]} experience, followed by some ${adjArray[1]}, ${adjArray[2]} goodness, and round it all out with something a little ${adjArray[3]}.` 
    //This function takes in an array of four Adjectives and creates a random menu madlib around them.
    return sumString;
}

function displayMenu(foodArray, adjArray){
    //This function takes in the two arrays and displays them appropriately
    const summary = generateSummary(adjArray);
    console.log(summary);
    console.log(`Appetizer: ${foodArray[0]}.`);
    console.log(`Main course: ${foodArray[1]} with a side of ${foodArray[2]}.`);
    console.log(`And for dessert: ${foodArray[3]}`);
}

//Main Program
const fullRandom = [randomApp(), randomMain(), randomSide(), randomDessert()];
const tonightFoods = splitArray(fullRandom, 0);
const tonightAdj = splitArray(fullRandom, 1);
const madLib = generateSummary(tonightAdj);
displayMenu(tonightFoods, tonightAdj);

//Function Testing
//console.log(randomApp());
//console.log(randomMain());
//console.log(randomSide());
//console.log(randomDessert());
//console.log(fullRandom);
//console.log(splitArray(apps, 0));

