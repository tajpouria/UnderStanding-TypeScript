// TYPES

//string

let str: string = 'hello'

// number

let numb: number = 2

// boolean

let bool: boolean = false

// array

let arr: any[] = [1, 'hello']
let arrS: string[] = ['hello', 'world']
let arrN: number[] = [1, 2]
let arrB: boolean[] = [true, false]

// tuple

let tup: [string, number] = ['str', 0]

// enum

enum Color {
  green,
  red = 100,
  blue // 101
}
let myColor: Color = Color.red

//any

let car: any = 'BMW'
car = { brand: 'BMW' }

// functions args and return types

function returnMyName(name: string): string {
  return name
}
function returnNoting(): void { }

// function types

let onlyAcceptGivenType: (val1: number, val2: number) => void

// object 
let obj: { name: string, age: number } = {
  name: 'Ryan', age: 25
}
let Cobj: { arr: number[], func: (val1: string) => string } = {
  arr: [1, 2], func: function (val1: string): string {
    return val1
  }
}

// type alias

type complex = { name: string, outPut: () => void }

let aliasObject: complex = {
  name: 'John',

  outPut: function () { }
}

// union types 

let myAge: number | string | [string, number] = 32
myAge = '22'
myAge = ['22', 22]

// type checking

let favNumber: number = 2

typeof favNumber == 'number' ? console.log('it is a number.') : console.log('it is actually not a number.')

// never

function neverReturn(): never {
  throw new Error('MESSAGE')
}

// nullAble assigning

//  "strictNullChecks": true will throw error if set null for type of any

let str1;
str1 = null

// solution 

let str2: string | null
str2 = null

// COMPILER

// "noEmit": true,                        /* Do not emit outputs. if it's an error */
// "sourceMap": true,                     /* Generates corresponding '.map' file. for debugging purpose */
// "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
let stri; // implicit any assigning error 
stri = 'hello'
// "strictNullChecks": true,              /* Enable strict null checks. */
// "noUnusedParameters": true,            /* Report errors on unused parameters. */

// ES6 recap

// default params 
const setDefaultParams = (num: number = 10): void => console.log(num)

// Rest and Spread operator
const findMax: number[] = [1, 2, 3, 4]
Math.max(...findMax) // spread to some list of numbers

const returnNumbers = (...numbers: number[]) => numbers
returnNumbers(1, 2, 3, 4) // turn list to an array

// Destructuring 
const [hi, world] = ['hi', 'world']
const { hi1: hi1, world1: world2 } = { hi1: 'hi', world1: 'world' }


// CLASSES

class Person {

  constructor(public name: string, private userName: string, protected password: string) {
    this.name = name
    this.userName = userName
    this.password = password
  }

  private age: string = '44'
  protected father: string = 'Omid'

  private setName(name: string) {
    this.name = name
  }
  protected setUserName(userName: string) {
    this.userName = userName
  }

}

const person: Person = new Person('Max', 'max', '123')

console.log(person) // Person {name: "Max", userName: "max", password: '123'}

// inheritance

class Max extends Person {
  constructor(name: string, username: string) {
    super(name, username, 'defaultPassword');
  }

  changeSomeThing(age: number) {
    // this.age = age undefined error private 
    this.father = 'Doe' // protected also  accessAble in other classes
  }
}

const max = new Max('Max', 'max')

// Getter and Setter

class Planet {
  private _species: string = 'default'

  get species() {
    return this._species
  }

  set species(value: string) {
    if(value.length >= 3) this._species = value;
  }
}

// > tsc index.ts --t es5

// NAME SPACES

namespace AreaCalculator {
  const PI = 3.14
  export function circleAreaCalculator(radius: number): number {
    return Math.pow(radius, 2) * PI
  }
  export function rectAngleAreaCalculator(length: number, width: number): number {
    return length * width
  }
}

console.log(AreaCalculator.circleAreaCalculator(10)) // 100

// import namespaces 
/// <reference path="circleAreaCalculator" />

// nested namespaces
namespace NumberOne {
  export namespace NumberTwo {
    export function doNothing(): void { console.log('I m doing nothing') }
  }
}

import doNothing = NumberOne.NumberTwo

// INTERFACES

interface NamedPerson {
  name: string;
  age?: number;
  [propName: string]: any;
  greet():void;
}

function greeting(person: NamedPerson): void {
  console.log(`Hello ${person.name}, you likes ${person.hobbies}`)
}
greeting({ name: 'Max', hobbies: ['cooking'], greet: () =>{} })

// class implements interface
class ImplemenedPeson implements NamedPerson {
  name: string;

  greet():void{
    console.log('Hello World')
  }

  private _walking():string{
    return 'Walking'
  }
}

// function inteface
interface IdoubleValue {
  (number1: number, number2:number):number
}

let doubleValue: IdoubleValue
doubleValue = function(val1:number, val2: number ): number{
  return (val1 + val2) * 2;
} // inteface inheritence 
interface IinhritedPerson extends NamedPerson {
  lastName: string;
}

// GENERICS

function echo<T>(data: T){
  return data
}
// generic funtions
echo<number>(12)
echo<string>('HELLO')
// generic built-in
const testResult: Array<number> = [1.94,265];
testResult.push(12)
// generic array functions
function mapAnArray<T>(args: T[]){
 args.forEach(arg => console.log(arg));
}

mapAnArray<string>(['Hello', 'World'])

// generic classes 
class SimpleMath <T extends number | string, U extends string> {
  baseValue : T
  multiplyValue : U 
  calculate(): number { 
    return +this.baseValue * +this.multiplyValue
  }
}

const mySimpleMath = new SimpleMath<number, string>()

mySimpleMath.baseValue = 10;
mySimpleMath.multiplyValue = "20";
console.log(mySimpleMath.calculate())
