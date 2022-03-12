"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("okla ok");
const a = 10;
const b = 30;
const myName = "Nguyen Anh Tuan";
const myAge = 20;
const status = true;
const my0bj = { id: 1, name: "Tuan" };
const numberArr = [1, 3, 3, 4];
const stringArr = ["a", "b", "c"];
const objectArr = [{ id: 1, name: "đd" }, { id: 2, name: "dđ" }];
function sum(numA, numB) {
    return numA + numB;
}
sum(a, b);
const getProduct = (product) => {
    const result = product.map((item) => `<div> ${item.name} </div>`);
};
getProduct([{ id: 1, name: "Tuan" }, { id: 2, name: "Chien" }]);
//# sourceMappingURL=app.js.map