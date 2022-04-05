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

const expected = {
  designers: [
    {
      name: "Brunello Cucinelli",
      averagePrice: 1025,
    },
    {
      name: "Gucci",
      averagePrice: 850,
    },
  ],
};

function calculateAveragePricePerDesigner(inventory) {
  return inventory.reduce(
    (previousState, object, index, array) => {
      let sum = 0;
      for (let shoe of object.shoes) {
        sum += shoe.price;
      }

      const average = sum / object.shoes.length;
      const designerAverage = {
        name: object.name,
        averagePrice: average,
      };
      previousState.designers.push(designerAverage);
      return previousState;
    },
    {
      designers: [],
    }
  );
}
calculateAveragePricePerDesigner(currentInventory);
