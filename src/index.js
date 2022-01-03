export function calculateTotal (items, tax) {
  let itemsArray = [...items];
  let result = [];
  
  for (let item in itemsArray) {
    // console.log(itemsArray[item]);

    if (itemsArray[item].taxable === true) {
      result.push((Math.abs(tax) * itemsArray[item].price) + itemsArray[item].price);
    } else {
      result.push(itemsArray[item].price);
    }
  }
  // console.log(result);
  return result.reduce((result, item) => result + item, 0);
}
