interface Person {
  name: string
  age: number
  speak(lang: string): void
  spend(amount: number): number
}

const matiOther: Person = {
  name: 'mati',
  age: 22,
  speak(lang: string): void {
    console.log(lang)
  },
  spend(amount: number): number {
    return amount;
  }
}

console.log(matiOther);

const helloPerson = (onePeron: Person) => {
  console.log('hello', onePeron.name);
  onePeron.speak('vietnames')
}

helloPerson({
  name: 'no', 
  age: 22, 
  speak(lang: string): void {
    console.log(lang);
  },
  spend(amount: number): number {
    return amount;
  }
})