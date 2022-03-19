import React from 'react'
import { ProductType } from '../types/product'

type ProductTypeProps = {
    product: ProductType[]
}

const ProductManager = ({product}: ProductTypeProps ) => {
  return (
    <div>
      <table>
        <thead>
          <th>#</th>
          <th>name</th>
          <th>Price</th>
          <th></th>
        </thead>
        <tbody>
        {product?.map((item, index) => {
          return <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <button>Remove</button>
            </td>
          </tr>
        })}
        </tbody>
      </table>
      </div>
  )
}

export default ProductManager