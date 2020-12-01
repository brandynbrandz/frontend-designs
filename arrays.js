const filteredItems = item.filter((item) => {
  return item.price <= 100;
});

const itemNames = items.map((item) => {
  return item.name;
});

const foundItem = items.find((item) => {
  return item.name === "Album";
});

items.forEach((item) => {
  console.log(item.price);
});

const hasInexpensiveItems = items.find((item) => {
  return item.price <= 100;
  //returns true
});

const hasExpensiveItems = items.every((item) => {
  return item.price <= 100;
  //returns false
});

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
  //returns false
}, 0);
