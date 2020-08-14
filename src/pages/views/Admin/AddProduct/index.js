import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./addproduct.css"
import {useHistory} from "react-router"
import {useForm} from "react-hook-form"
import firebase from '../../../../firebase';

const AddProduct = ({onAdd,category}) => {
    const {register,handleSubmit,errors } = useForm();
  // const [valueInput,setValueInput]= useState({});
    // const onHandleChange=(e)=>{
    //   const {name,value} =e.target;
    //   setValueInput({
    //     ...valueInput,[name]:e.target.value
    //   }
    //   )
    // }
    // const {image,price}=valueInput;
      // console.log(image)
  let history = useHistory();
  const [messname,setMessName]=useState(true);
  const [messimage,setMessImage]=useState(true);
  const [messcate,setMessCate]=useState(true);
  const onHandleChange=(e)=>{
          const {name} =e.target.value;
          console.log(name)
  }
  // const onHandleSubmit=(data)=>{
  //    console.log(data)
  //     if(data.productName.trim()==""){
  //       setMessName(false)
  //        return false;
  //     }
  //     if(data.productImage.trim()==""){
  //       setMessImage(false)
  //        return false;
  //     }
  //     if(data.productDescription.trim()==""){
  //       setMessCate(false)
  //        return false;
  //     }
  //     else{
  //         console.log(data.category);
  //       // onAdd(data); 
  //       // history.goBack();
  //     }}
  const onHandleSubmit = (data) => {
    let file = data.productImage[0];
    // tạo folder chứa ảnh trên firesbase
    let storageRef = firebase.storage().ref(`images/${file.name}`);
    // đẩy ảnh lên đường dẫn trên
    // đẩy ảnh lên đường dẫn trên
    storageRef.put(file).then(function () {
      storageRef.getDownloadURL().then((url) => {
          console.log(url);
            // Tạo object mới chứa toàn bộ thông tin từ input
        const newData = {  
          ...data,
          productImage: url
      }
      // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
      console.log(newData)
      onAdd(newData)
      history.push('/admin/products');
      })
  });
   
}

  
  
    return (
      
        <div className="inner-block ">
        <div className="signup-main" style={{float: 'left', width: '40%', marginLeft: '120px'}}>
          <div className="signup-head">
            <h1>Add Product</h1>
          </div>
          <div className="signup-block">
            <form  onSubmit={handleSubmit(onHandleSubmit)}>
            <label>Name</label> 
            <div  className="invalid-feedback">
                {errors.productName&&errors.productName.type=="required"&&<div>Tên không được để trống !</div>}
                <div>{messname?"":"Tên không được để trống"}</div>
              </div>
              <input type="text" name="productName" formcontrolname="productName" 
               placeholder="Vui lòng nhập tên sản phẩm "  ref={register({required:true})} />
              <label>Price</label>
              <div  className="invalid-feedback">
              {errors.productPrice&&<div >Giá không được để trống</div>}
             
              </div>
              <input type="number" min={1} name="productPrice" formcontrolname="productPrice"  
              placeholder="Vui lòng nhập giá sản phẩm" ref={register({required:true})} />
                <label>Product Images</label><br />
                
                 <div  className="invalid-feedback">
              {errors.productImage&&<div>Link ảnh không được để trống !</div>}
              <div>{messimage?"":"Image không được để trống"}</div>
              </div>
                
              <input type="file" className="custom-file-input"  id="inputGroupFile02" name="productImage"  ref={register({ required: true })}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label><br/>
              {/* <input type="text" name="productImage" formcontrolname="productImage"  
              placeholder="Vui lòng nhập link ảnh sản phẩm"  ref={register({required:true})} onChange={onHandleChange}/> */}
                <label>Total</label>
                <div  className="invalid-feedback">
                {errors.productTotal&&<div>Sale không được để trống !</div>}
                </div>
                <input type="number" min={1} name="productTotal"  placeholder="Vui lòng nhập số lượng sản phẩm" ref={register({required:true})}/>
            
              <label>Product Sale</label><br />
              <div  className="invalid-feedback">
              {errors.productSale&&<div>Sale không được để trống !</div>}
                {/* <div>Sai định dạng sale !</div> */}
              </div>
              <input type="number" min={0}  formcontrolname="sale" name="productSale" 
              placeholder="Vui lòng nhập số sale sản phẩm" ref={register({required:true})}  />
              <label>Category</label><br />
              <div  className="invalid-feedback">
              {errors.category&&<div>Category không được để trống !</div>}
              <div>{messcate?"":"Category không được để trống"}</div>
               
              </div>
              <select type="text" name="category" formcontrolname="category" ref={register({required:true})} >
                {category.map((cate,index)=>(
                    <option  value={cate.name}>{cate.name}</option>
                ))}
                
              </select>
              <label>Description</label><br />
              <input type="text" name="productDescription" formcontrolname="productCategory" 
              placeholder="Vui lòng nhập ghi chú sản phẩm"  ref={register({required:true})}/>
              <input type="submit" defaultValue="Add" />
            </form>
            <div className="sign-down">
              <h5><a >Go to Product Manager</a></h5>
            </div>
          </div>
        </div>
        <div className="signup-main" style={{float: 'left', marginLeft: '30px'}}>
          <div className="signup-head">
            <h1>Preview Images</h1>
          </div>
          <div className="signup-block">
            <img style={{marginLeft: '60px'}} width="80%" height="500px" src="" alt="" />
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      
    )
}

AddProduct.propTypes = {

}

export default AddProduct
