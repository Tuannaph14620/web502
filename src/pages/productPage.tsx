import React from "react";

const ProductPage = () => {
  const product = [
    {
      id: 1,
      name: "Tuấn",
      img: "https://th.bing.com/th/id/OIP._Cmdbyfz0PzFk1KVCXR5gQHaE7?pid=ImgDet&rs=1"
    },
    {
      id: 2,
      name: "Đạt",
      img:"https://img2.liberoquotidiano.it/upload/originals/1494320767173.jpg",
      price: 10000
      
    },
    {
      id: 3,
      name: "Cảy",
      img: "https://th.bing.com/th/id/OIP.wOQFHyR-cf-VsYQp1G7LUAHaEK?pid=ImgDet&rs=1",
      price: 10000
    },
    {
      id: 4,
      name: "Bảo",
      img: "https://vnn-imgs-f.vgcloud.vn/2020/05/01/08/fred-mu.jpg",
      price: 10000
    },
    {
      id: 5,
      name: "Thang",
      img: "https://vnn-imgs-f.vgcloud.vn/2020/05/01/08/fred-mu.jpg",
      price: 10000
    },
  ];

  return (
    <div>
      <h2 className="py-4 mt-10 font-bold text-blue-900 text-2xl uppercase">
        Sản phẩm được quan tâm
      </h2>
      <div className="news">
        <div className="flex flex-wrap justify-between  gap-px ">
          {product.map((item)=><div className="col w-1/6 p-4">
            <a href="/#/news/${post.id}">
              <img className="w-full" src="https://th.bing.com/th/id/OIP._Cmdbyfz0PzFk1KVCXR5gQHaE7?pid=ImgDet&rs=1" />
            </a>
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
