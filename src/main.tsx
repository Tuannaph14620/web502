
import ReactDOM from 'react-dom'

const myName: string = "Nguyen Anh Tuan"
const myStatus: boolean = false
const myAge: number = 20
const product: {id: number , name:string} = {id:1, name: "Tuan"}


ReactDOM.render( <div>
  
  <h1>Helle word</h1>
  <div>{myStatus ? "Thay Dat" : "Thay Son"}</div>
  <div>{myAge}</div>
  <div>{product.name}</div>
  </div> , document.querySelector("#root"))