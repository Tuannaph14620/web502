import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { listone } from '../api/products';
type Props = {}
type ProductType = {
    id: number,
    name: string,
    price: number
}

const ProductDetail = (props: Props) => {
    const { id}:number = useParams();
    const [product, setProduct] = useState<ProductType>(); // 1
    useEffect(() => { // 3
        const getProduct = async () => {
            const {data} = await listone(id);
            setProduct(data);
        }   
        getProduct();
    }, []);
  return ( // 2
  <div>
  <h2 className="py-4 mt-10 font-bold text-blue-900 text-2xl uppercase">
    Tất cả sản phẩm
  </h2>
  <div className="news">
    <div className="flex flex-wrap justify-between  gap-px ">
      <div className="col w-1/6 p-4">
        <NavLink to="/product/{product.id}">
          <img className="w-full" src="https://th.bing.com/th/id/OIP._Cmdbyfz0PzFk1KVCXR5gQHaE7?pid=ImgDet&rs=1" />
        </NavLink>
        <a href="/news/${post.id}">
          <h3 className="py-2 font-bold text-blue-900">
            {product?.name}
          </h3>
        </a>
        <p>
          {product?.price}
        </p>
      </div>)
      
    </div>
  </div>
</div>
  )
}

export default ProductDetail