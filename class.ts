// class
class Employee {
  // public name: string;
  // private age: number;
  // readonly male: boolean;

  // constructor(name: string, age: number, male: boolean) {
  //   this.name = name;
  //   this.age = age;
  //   this.male = male;
  // }
  constructor(public name: string, private age: number, readonly male: boolean){}

  getAge() {
    return this.age;
  }
}

const mati = new Employee('mati', 22, true)

console.log(mati.name);
console.log(mati.male);

mati.name = "oanh";
console.log(mati);

console.log(mati.getAge());

const no = new Employee('no', 22, false);

let emplyees: Employee[] = [];

emplyees.push(mati);
emplyees.push(no);

emplyees.forEach((emplyees) => {
  console.log(emplyees.name, emplyees.getAge(), emplyees.male)
})
