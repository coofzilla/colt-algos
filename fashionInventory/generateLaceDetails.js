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

const expectedResult = [
  {
    nameWords: ["tasselled", "black", "low-top", "lace-up"],
    targetWordIndex: 3,
  },
  {
    nameWords: ["tasselled", "green", "low-top", "lace-up"],
    targetWordIndex: 3,
  },
  {
    nameWords: ["red", "leather", "laced", "sneakers"],
    targetWordIndex: 2,
  },
  {
    nameWords: ["black", "leather", "laced", "sneakers"],
    targetWordIndex: 2,
  },
];

function generateLaceDetails(inventory) {
  const finalResult = inventory.reduce((result, element, index, array) => {
    for (let shoe of element.shoes) {
      let obj = {};
      if (shoe.name.includes("lace")) {
        obj.nameWords = shoe.name.split(" ");
        obj.targetWordIndex = getLaceIndex(obj.nameWords);
        result.push(obj);
      }
    }

    return result;
  }, []);

  console.log(finalResult);
}

function getLaceIndex(arrayWords) {
  for (let i = 0; i < arrayWords.length; i++) {
    if (arrayWords[i].indexOf("lace") !== -1) {
      return i;
    }
  }
}

generateLaceDetails(currentInventory);
