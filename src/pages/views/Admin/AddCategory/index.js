import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import {useForm} from 'react-hook-form';


const AddCategory = ({onAddCategory}) => {
  const {register,handleSubmit,errors } = useForm();
  let history = useHistory();
  const [messname,setMessName]=useState(true);
  const onHandleSubmit=(data)=>{
     if(data.name.trim()==""){
        setMessName(false)
         return false;
      }
      else{
        setMessName(true)
        onAddCategory(data)
        // console.log(data)
        history.push('/admin/category');
      }
   
  }
    return (
        <div className="inner-block ">
        <div className="signup-main" style={{float: 'left', width: '40%', marginLeft: '120px'}}>
          <div className="signup-head">
            <h1>Add Category</h1>
          </div>
          <div className="signup-block">
            <form onSubmit={handleSubmit(onHandleSubmit)}>
              <label>Name</label>
              <div  className="invalid-feedback">
              {errors.name&&errors.name.type=="required"&&<div >Tên danh mục không được để trống !</div>}
                
              <div >{messname?"":"Tên danh mục không được để trống !"}</div>
              </div>
              <input type="text" formcontrolname="name"  name="name"  placeholder="Nhập tên danh mục " ref={register({required:true})} />
              <input type="submit" defaultValue="Add" />
            </form>
            <div className="sign-down">
              <h5>
                  <Link to='/admin/category'>Go to Category Manager</Link>
                  <a routerlink="/admin/category"></a></h5>
            </div>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      
    )
}

AddCategory.propTypes = {

}

export default AddCategory
