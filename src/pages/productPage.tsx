import React from "react";
import { NavLink } from "react-router-dom";
import { ProductType } from "../types/product";

type ProductPageProps = {
  product: ProductType[]
}

const ProductPage = ({product}: ProductPageProps) => {
  return (
    <div>
      <h2 className="py-4 mt-10 font-bold text-blue-900 text-2xl uppercase">
        Sản phẩm được quan tâm
      </h2>
      <div className="news">
        <div className="flex flex-wrap justify-between  gap-px ">
          {product.map((item)=><div className="col w-1/6 p-4">
            <NavLink to=''>
              <img className="w-full" src="https://th.bing.com/th/id/OIP._Cmdbyfz0PzFk1KVCXR5gQHaE7?pid=ImgDet&rs=1" />
            </NavLink>
            <a href="/news/${post.id}">
              <h3 className="py-2 font-bold text-blue-900">
                {item.name}
              </h3>
            </a>
            <p>
              {item.price}
            </p>
          </div>)}
          
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
