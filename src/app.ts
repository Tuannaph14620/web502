export{}
console.log("okla ok");

const a: number = 10;
const b: number = 30;

type User = {
    id: number;
    name:string
    status?: boolean
}
const myName: string ="Nguyen Anh Tuan";
const myAge : number = 20;
const status : boolean = true;
const my0bj: User = {id:1, name: "Tuan"};

const numberArr: number[] = [1,3,3,4];
const stringArr: string[]= ["a","b","c"];
const objectArr: User[] =[{id:1, name:"đd"},{id:2, name:"dđ"}];
function sum(numA: number, numB: number):number{
    return numA + numB;
}
sum(a, b)