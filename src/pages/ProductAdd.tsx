import React from 'react'
import { ProductType } from '../types/product'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type ProductAddProps = {
    onAdd : (product: ProductType) => void

}

type FormInput = {
    name: string
    price: number
}

const ProductAdd = (props: ProductAddProps) => {
    const {register, handleSubmit, formState:{errors} } = useForm<FormInput>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInput> = data =>{
        props.onAdd(data)
        navigate('/admin/product')
    }
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
  {/* Replace with your content */}
  <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" {...register('name', {required: true})} className="border border-black" placeholder="Name" />
    {errors.name && <span >Bat buoc nhap</span>} <br />
    <input type="number" {...register('price',{required:true})} className="border border-black" placeholder="Price" /> <br />
    <button className="bg-blue-500 p-4 text-white">Thêm</button>
  </form>
  {/* /End replace */}
</div>

  )
}

export default ProductAdd