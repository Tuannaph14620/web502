import axios from 'axios'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { update } from '../api/products'
import { ProductType } from '../types/product'

type ProductEditProps = {
    onUpdate: (product: ProductType)=>void
}
type InputForm = {
    name: string,
    price: number
}

const ProductEdit = (props: ProductEditProps) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<InputForm>()
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        const getProduct = async ()=>{
            const {data} = await update( Number(id))
            reset(data)
        }
        getProduct()
    }, [])
    const onSubmit: SubmitHandler<InputForm> = data =>{
        props.onUpdate(data)
        navigate('/admin/product')
        
    }
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
  {/* Replace with your content */}
  <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" {...register('name', {required: true})} className="border border-black" placeholder="Name" /> 
    {errors.name && <span>Bat buoc nhap</span>}<br />
    <input type="number" {...register('price',{required:true})} className="border border-black" placeholder="Price" /> <br />
    <button className="bg-blue-500 p-4 text-white">Cập nhật</button>
  </form>
  {/* /End replace */}
</div>
  )
}

export default ProductEdit