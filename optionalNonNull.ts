// optional , non null
const add = (a: number, b?: number) => {
  return b ? a + b : a
}
console.log(add(4, 6));
console.log(5);

const addNonNull = (a: number, b?: number) => {
  return a + b!
}
console.log(addNonNull(2, 3));
console.log(addNonNull(4));