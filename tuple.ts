// tuple
let arr: (string | number | boolean)[] = ['no', 21, true]
arr[0] = 1;
console.log(arr);

const tuple: [string, number, boolean] = ['mati', 30, false]
tuple[0] = 'oanh';
console.log(tuple)

const last = (arr: Array<number>): number => arr[arr.length - 1];

const l = last([1, 2, 3]);
console.log(l);

const lastT = <T> (arr: Array<T>) => arr[arr.length - 1];
const l1 = lastT(['a', 'b', 'c']);
console.log(l1);