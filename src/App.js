import React, { useState } from 'react';
import './App.css';
import dataFake from './dataFake';
import Routers from './routers';
import apiProduct from "./api/productApi";
import apiCategory from "./api/categoryHttp";
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const[products, setProducts]=React.useState([]);
  const [category,setCategory]= useState([]);
  //Danh mục sản phẩm
  useEffect(()=>{
    const getCategory =async()=>{
      try{
        const {data}= await apiCategory.getAllCategory();
        setCategory(data)
      }
      catch(error){
        console.log('Faile to request API',error)
      }
    }
    getCategory()
  },[])
  
  //Danh sách sản phẩm
  useEffect(()=>{
    const getProduct =async()=>{
      try{
        const {data}= await apiProduct.getAll();
        setProducts(data)
        
      }
      catch(error){
        console.log('Faile to request API',error)
      }
    }
    getProduct()
  },[])

  //Xóa sản phẩm
  const onHandleRemove= async (id)=>{
    try{
     
      const{data} =await apiProduct.removeProduct(id);
       console.log(data)
        const newProducts = products.filter(product=>(product.id!=id));
        setProducts(newProducts);
       
    }
    catch(error){
      console.log('Failed to request API',error)
    }
  }
  //Thêm sản phẩm
  const onHandleAdd= async (product)=>{
    try{
      console.log(product)
      const {data} =  await apiProduct.createProduct(product);

      setProducts([...products,data])
    }catch(error){
      console.log('Fail to request API',error)
    }
  }
 

  //Sửa sản phẩm
  const onHandleUpdate =async(id,updateProduct)=>{
      try {
          const{data} =await apiProduct.updateProduct(id,updateProduct);
          console.log(data)
          console.log(updateProduct)
          const newProducts= products.map(product=>(
            product.id===data.id? data:product
          )) ;
          setProducts(newProducts)
      } catch (error) {
        console.log("Fail to request API",error)
      }
  }
  //Thêm category
  const onHandleAddCategory= async(catego)=>{
    try {
        const {data} =  await apiCategory.addCategory(catego);
        setCategory([...category,data])
        // console.log(category)
    } catch (error) {
      
    }
  }
  //Sửa danh mục
  const onHandleUpdateCategory=async(id,updateCategory)=>{
    try {
        const {data} =  await apiCategory.updateCategory(id,updateCategory);
        const newCategory= category.filter(cate=>(cate.id===data.id?data:cate));
        setCategory(newCategory);
    } catch (error) {
      
    }
  }
  return (
    
    <Routers products={products} onRemove={onHandleRemove}  onAdd={onHandleAdd} category={category} 
    onUpdate={onHandleUpdate} onAddCategory={onHandleAddCategory} onUpdateCategory={onHandleUpdateCategory}>
    
    </Routers>
  
     
   
   
   
  );
}

export default App;
