const currentInventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 },
    ],
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 },
    ],
  },
];

function listAllBlackShoes(inventory) {
  let blackShoes = "";
  for (let obj of inventory) {
    for (let shoes of obj.shoes) {
      if (shoes.name.includes("black")) {
        blackShoes += `${obj.name}, ${shoes.name}, ${shoes.price}\n`;
      }
    }
  }
  return blackShoes;
}

listAllBlackShoes(currentInventory);
