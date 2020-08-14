import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router';
import {useForm} from 'react-hook-form';
import {useParams} from 'react-router';
import apiCategory from '../../../../api/categoryHttp';
import {Link} from 'react-router-dom'

const UpdateCategory = ({onUpdateCategory}) => {
            let {id} = useParams();
        const {register,handleSubmit,errors } = useForm();
        const [currentCategory, setCurrentCategory] = useState({});
        let history = useHistory();
        useEffect(()=>{
            const getCategories =async()=>{
              try{
                const {data}= await apiCategory.getCategory(id);
                setCurrentCategory(data)
              }
              catch(error){
                console.log('Faile to request API',error)
              }
            }
            getCategories()
          },{})
        const [messname,setMessName]=useState(true);
        const onHandleChange = e => {
          const { name, value } = e.target;
          setCurrentCategory({
              ...currentCategory,
              [name]: value
          })
      }
        const onHandleSubmit=(data)=>{
           if(data.name.trim()==""){
              setMessName(false)
               return false;
            }
            else{
              setMessName(true)
              onUpdateCategory(id,data)
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
                    <input type="text" formcontrolname="name" value={currentCategory.name} name="name"  placeholder="Nhập tên danh mục " ref={register({required:true})} onChange={onHandleChange} />
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

UpdateCategory.propTypes = {

}

export default UpdateCategory
