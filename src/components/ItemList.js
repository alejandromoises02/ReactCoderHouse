/*export default function GetlistaProductos(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(listaProducts)
    }, 2000);
    
  });
}

const listaProducts =`
[{
  "id": 1,
  "name": "Cheese - Pont Couvert",
  "precio": 1549,
  "stock": 7
}, {
  "id": 2,
  "name": "Gherkin",
  "precio": 9413,
  "stock": 17
}, {
  "id": 3,
  "name": "Cake - Pancake",
  "precio": 3129,
  "stock": 18
}, {
  "id": 4,
  "name": "Coconut - Shredded, Unsweet",
  "precio": 8200,
  "stock": 3
}, {
  "id": 5,
  "name": "Coffee - Flavoured",
  "precio": 9182,
  "stock": 37
}, {
  "id": 6,
  "name": "Mcgillicuddy Vanilla Schnap",
  "precio": 6347,
  "stock": 38
}, {
  "id": 7,
  "name": "Wine - Ej Gallo Sonoma",
  "precio": 4777,
  "stock": 55
}, {
  "id": 8,
  "name": "Mikes Hard Lemonade",
  "precio": 1876,
  "stock": 82
}, {
  "id": 9,
  "name": "Doilies - 7, Paper",
  "precio": 2685,
  "stock": 34
}, {
  "id": 10,
  "name": "Beef - Inside Round",
  "precio": 2693,
  "stock": 63
}, {
  "id": 11,
  "name": "Sour Cream",
  "precio": 7694,
  "stock": 47
}, {
  "id": 12,
  "name": "Ice Cream - Turtles Stick Bar",
  "precio": 799,
  "stock": 84
}, {
  "id": 13,
  "name": "Barramundi",
  "precio": 3824,
  "stock": 73
}, {
  "id": 14,
  "name": "Versatainer Nc - 8288",
  "precio": 2095,
  "stock": 41
}, {
  "id": 15,
  "name": "Cheese - Fontina",
  "precio": 2653,
  "stock": 33
}, {
  "id": 16,
  "name": "Soup V8 Roasted Red Pepper",
  "precio": 4949,
  "stock": 23
}, {
  "id": 17,
  "name": "Horseradish - Prepared",
  "precio": 8205,
  "stock": 8
}, {
  "id": 18,
  "name": "Parasol Pick Stir Stick",
  "precio": 2438,
  "stock": 49
}, {
  "id": 19,
  "name": "Wine - Lamancha Do Crianza",
  "precio": 53,
  "stock": 41
}, {
  "id": 20,
  "name": "Tequila - Sauza Silver",
  "precio": 2354,
  "stock": 54
}, {
  "id": 21,
  "name": "Container - Foam Dixie 12 Oz",
  "precio": 7676,
  "stock": 95
}, {
  "id": 22,
  "name": "Shrimp - 21/25, Peel And Deviened",
  "precio": 2188,
  "stock": 10
}, {
  "id": 23,
  "name": "Shrimp - 16 - 20 Cooked, Peeled",
  "precio": 6160,
  "stock": 82
}, {
  "id": 24,
  "name": "Filo Dough",
  "precio": 1992,
  "stock": 77
}, {
  "id": 25,
  "name": "Pepper - Black, Crushed",
  "precio": 1260,
  "stock": 47
}, {
  "id": 26,
  "name": "Wine - Domaine Boyar Royal",
  "precio": 7127,
  "stock": 87
}, {
  "id": 27,
  "name": "Samosa - Veg",
  "precio": 9381,
  "stock": 18
}, {
  "id": 28,
  "name": "Fruit Salad Deluxe",
  "precio": 1180,
  "stock": 99
}, {
  "id": 29,
  "name": "Roe - White Fish",
  "precio": 6700,
  "stock": 65
}, {
  "id": 30,
  "name": "Bread - Calabrese Baguette",
  "precio": 64,
  "stock": 3
}, {
  "id": 31,
  "name": "Ginger - Crystalized",
  "precio": 3002,
  "stock": 41
}, {
  "id": 32,
  "name": "Beer - Rickards Red",
  "precio": 6356,
  "stock": 25
}, {
  "id": 33,
  "name": "Mushroom - Chanterelle Frozen",
  "precio": 6778,
  "stock": 41
}, {
  "id": 34,
  "name": "Wine - Sauvignon Blanc",
  "precio": 377,
  "stock": 7
}, {
  "id": 35,
  "name": "Wine - Red, Lurton Merlot De",
  "precio": 9494,
  "stock": 41
}, {
  "id": 36,
  "name": "Juice - Mango",
  "precio": 9396,
  "stock": 68
}, {
  "id": 37,
  "name": "Cocoa Feuilletine",
  "precio": 7333,
  "stock": 39
}, {
  "id": 38,
  "name": "Tart - Raisin And Pecan",
  "precio": 3773,
  "stock": 88
}, {
  "id": 39,
  "name": "Quail - Whole, Bone - In",
  "precio": 7526,
  "stock": 37
}, {
  "id": 40,
  "name": "Mackerel Whole Fresh",
  "precio": 2248,
  "stock": 57
}, {
  "id": 41,
  "name": "Jameson - Irish Whiskey",
  "precio": 2141,
  "stock": 82
}, {
  "id": 42,
  "name": "Plate - Foam, Bread And Butter",
  "precio": 8092,
  "stock": 98
}, {
  "id": 43,
  "name": "Bread - Pullman, Sliced",
  "precio": 6443,
  "stock": 33
}, {
  "id": 44,
  "name": "Bacardi Mojito",
  "precio": 5939,
  "stock": 3
}, {
  "id": 45,
  "name": "Pork - Loin, Boneless",
  "precio": 5782,
  "stock": 8
}, {
  "id": 46,
  "name": "Wine - White, Gewurtzraminer",
  "precio": 59,
  "stock": 84
}, {
  "id": 47,
  "name": "Amaretto",
  "precio": 3040,
  "stock": 82
}, {
  "id": 48,
  "name": "Limes",
  "precio": 1594,
  "stock": 47
}, {
  "id": 49,
  "name": "Sobe - Lizard Fuel",
  "precio": 9573,
  "stock": 20
}, {
  "id": 50,
  "name": "Dc - Sakura Fu",
  "precio": 5540,
  "stock": 83
}]`


*/

export default function getItem(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(item);
    }, 3000);
    
  });
}

const item =[1, "Cheese - Pont Couvert",1549, 7];

  
