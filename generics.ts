// generics
const makeFullNameConstrainWithGenerics = <T extends {firstName: string, lastName: string}> (obj: T) => {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  }
}

const n = makeFullNameConstrainWithGenerics({firstName: 'Pham Minh', lastName: 'Oanh', age: 22, male: true});
console.log(n);

const addNewEmployee = (emplyee: object) => {
  const uid = Math.floor(Math.random() * 10);
  return {
    ...emplyee,
    uid: uid
  }
}
const n1 = addNewEmployee({firstName: 'Nguyen Hoang', lastName: 'Anh', age: 22, male: true});
console.log(n1);
