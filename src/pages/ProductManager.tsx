import React from 'react'
import { ProductType } from '../types/product'

type ProductTypeProps = {
    product: ProductType[]
    onRemote: (id:number) => void
}

const ProductManager = ({product, onRemote}: ProductTypeProps ) => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>#</th>
                <th>name</th>
                <th>Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {product?.map((item, index) => {
          return <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <button onClick={()=> onRemote(item.id)}> Remove</button>
            </td>
          </tr>
        })}
        </tbody>
      </table>
      </div>
  )
}

export default ProductManager