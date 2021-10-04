// generics in interface
interface Resource<T> {
  id: number,
  name: string,
  data: T
}

const resourece1: Resource<string> = {
  id: 1,
  name: 'mati',
  data: 'hello'
}

const resourece2: Resource<object> = {
  id: 1,
  name: 'mati',
  data: {age: 10, male: false}
}

const resourece3: Resource<string[]> = {
  id: 1,
  name: 'mati',
  data: ['javascript', 'typescript', 'html', 'nodejs']
}

console.log(resourece1, resourece2, resourece3)