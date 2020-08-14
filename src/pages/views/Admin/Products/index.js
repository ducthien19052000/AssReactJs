import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Router,Link,NavLink,useParams } from 'react-router-dom';
import {useHistory} from 'react-router';
import apiCategoy from '../../../../api/categoryHttp';
import apiProduct from '../../../../api/productApi';
import axios from 'axios';

import './index.css'

const Products = ({products, onRemove,onSearch}) => {
 
   
  const [search, setSearch] = useState("");
  const [keyword, setKey] = useState({});
    const [currentPage,setCurrentPage] = useState(1);
    const [prsPerPage,setPostsPerPage] = useState(4);
    const indexOfLastPost= currentPage*prsPerPage;
    const indexOfFirtPost =indexOfLastPost - prsPerPage;
  
    const onchange = e => {
      const { name, value } = e.target;
      setSearch(value);
      console.log(search)
    };
    const product = products.filter(pr => {
      return pr.productName.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    const newProduct = product.slice(indexOfFirtPost,indexOfLastPost)
    const pageNumbers=[];
    for(let i =1;i<=Math.ceil(product.length / prsPerPage);i++){
            pageNumbers.push(i);
    }
    const handleClick = page => setCurrentPage(page);
    //change page
    const paginate = (pageNumber)=>setCurrentPage(pageNumber);
 
    
    
    const onHandleRemove=(id)=>{

      if(confirm('Bạn có chắc chắn muốn xóa?')){//eslint-disable-line
        onRemove(id)
    }
    
    }
    
  
   
    return (
      <div className="chit-chat-layer1">
  <div className="col-md-12 chit-chat-layer1-left">
    <div className="work-progres">
      <div className="chit-chat-heading">
        Product Manager
        <div className="form-group" style={{float: 'left', width: '100%'}}>
          <Link to='/admin/add-product'>
          <a className="btn btn-default"  style={{float: 'left'}}>Add Product</a></Link>
          <input style={{width: '500px', float: 'left', margin: '0px 10px'}} autoComplete="off" name='search' onChange={onchange} className="form-control" name="search" placeholder="Enter keywords" type="text" />
        
        </div>
      </div>
      <div className="table-responsive" style={{width: '100%'}}>
        <table className="table table-hover" id="myTable">
          <thead>
            <tr>
              <th>Images</th>
              <th>Name</th>
              <th>Price</th>
              <th>Total</th>
              <th>Sale</th>
              <th>Category</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
          {newProduct.map((product,index)=>(

               <tr key={index}>
                 <td><img alt="" height="70px" src={product.productImage} width="70px" /></td>
                 <td>
                    <p>{product.productName}</p>
                 </td>
                 <td> {product.productPrice} VND</td>
                 <td>{product.productTotal}</td>
                 <td>{product.productSale}%</td>
                 <td>{product.category}</td>
                 <td>
                  <NavLink to={`/admin/product/${product.id}`}><a className="btn btn-default"  style={{marginRight: '10px'}}><i className="fa fa-edit" /></a></NavLink>
                   <a  className="btn btn-default"><i className="fa fa-remove" onClick={()=>onHandleRemove(product.id)}/></a>
                 </td>
               </tr>
          
              ))}
         </tbody>
        </table>
      </div>
    
         <div className="pagination">
      <ul className="pagination">
        <li
          className={`${pageNumbers[0] === currentPage && "disabled"}`}
          onClick={()=>handleClick( currentPage - 1)}
        >
          Prev
        </li>
        {pageNumbers.map(page => (
          <li
            className={`${currentPage === page && "active"}`}
            onClick={()=>handleClick( page)}
          >
            {page}
          </li>
        ))}
        <li
          className={`${pageNumbers.reverse()[0] === currentPage && "disabled"}`}
          onClick={()=>handleClick( currentPage + 1)}
        >
          Next
        </li>
      </ul>
    </div>
    </div>
 
  </div>
  
  <div className="clearfix" />
     
</div>

    )
}

Products.propTypes = {

}

export default Products
