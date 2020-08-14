import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addToCart} from '../../../../actions/index';
import apiCategoy from '../../../../api/categoryHttp';
import apiProduct from '../../../../api/productApi';
import {NavLink,Link,useParams} from 'react-router-dom';


const ProductCategory = ({products,AddToCart}) => {
  const [product,setProducts] = useState([]);

    const [cate,setCategory]= useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [prsPerPage,setPostsPerPage] = useState(8);
    const indexOfLastPost= currentPage*prsPerPage;
    const indexOfFirtPost =indexOfLastPost - prsPerPage;
    const newProduct = product.slice(indexOfFirtPost,indexOfLastPost)
    const pageNumbers=[];
    for(let i =1;i<=Math.ceil(product.length / prsPerPage);i++){
            pageNumbers.push(i);
    }
    const handleClick = page => setCurrentPage(page);
    const onAddToCart=(product)=>{
        AddToCart(product)
      }
      let id = useParams().id;
      const getProduct =async(id)=>{
        try{
          const {data}= await apiProduct.getProductCategory(id);
          setProducts(data)
          console.log(product)
        }
        catch(error){
          console.log('Faile to request API',error)
        }
      }
    
      useEffect(()=>{
        const getCategory =async()=>{
          try{
            const {data}= await apiCategoy.getAllCategory();
            console.log(data)
            setCategory(data)
          }
          catch(error){
            console.log('Faile to request API',error)
          }
        }
        getCategory()
      },[])
    return (
        <div className="banner-bootom-w3-agileits">
        <div className="container">
          {/* mens */}
          <div className="col-md-4 products-left">
            <div className="filter-price">
              <h3>Search <span>Product</span></h3>
              <ul className="dropdown-menu6">
                <li>
                  <input autoComplete="off" className="form-control" name="search" placeholder="Enter keywords" type="text" />
                </li>
              </ul>
            </div>
            <div className="css-treeview" style={{margin: '10px 0px'}}>
              <h4>Categories</h4>
              <ul className="tree-list-pad">
                <li>
                  <label htmlFor="item-0">
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                    <Link to='/products' style={{padding: '0px'}}>All Product</Link>
                  </label>
                </li>
                {cate.map((category,index)=>(
                      <li key={index}>
                      <input type="checkbox" defaultChecked="checked" id="item-0" />
                      <label htmlFor="item-0">
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                        <Link to={`/category/${category.id}`}  style={{padding: '0px'}}  onClick={()=>getProduct(category.id)}>{category.name}</Link>
                      </label>
                    </li>
                ))}
              
              </ul>
            </div>
            <div className="clearfix" />
          </div>
          <div className="col-md-8 products-right">
            <h5>Product </h5>
            
             
            <div className="men-wear-top">
              <div className="callbacks_container" id="top">
                <ul className="rslides">
                  <li>
                    <img alt=" " style={{height: '225px', width: '745px'}} className="img-responsive" src="../../../assets/images/banner2.jpg" />
                  </li>
                </ul>
              </div>
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
          </div>
          <div className="resp-tabs-container">
            <div className="single-pro">
                {newProduct.map((prod,index)=>(
        <div  className="col-md-3 product-men">
        <div className="men-pro-item simpleCart_shelfItem">
          <div className="men-thumb-item">
            <img alt="" className="pro-image-front" height="235px" src={prod.productImage} width="255px" />
            <img alt="" className="pro-image-back" height="235px" src={prod.productImage} width="255px" />
            <div className="men-cart-pro">
              <div className="inner-men-cart-pro">
                  <NavLink to={`/product/${prod.id}`}><a className="link-product-add-cart" >Quick View</a></NavLink>
              </div>
            </div>
            <span  className="product-new-top">{prod.productSale!=0?`${prod.productSale}%`:"New"}</span>
          
            {/* <span *ngif="product.productSale!=0" className="product-new-top">{'{'}{'{'}product.productSale{'}'}{'}'}%</span> */}
          </div>
          <div className="item-info-product ">
            <h4><a href="single.html">{prod.productName}</a></h4>
          
            {Object.keys(prod.productSale)!==0? <div className="info-product-price">
              
              <span className="item_price">
                {prod.productPrice-(prod.productSale*prod.productPrice/100)} VNĐ</span>
                <del style={{fontSize: '13px'}}>{prod.productPrice} VNĐ</del>
             
            </div>: <div className="info-product-price">
              <span className="item_price">
                {prod.productPrice} VND</span>
             
            </div>}
           
            <div>
                  <Link to='/cart' onClick={()=>onAddToCart(prod,1)} className="hvr-outline-out button2" style={{padding: '10px', fontWeight: 'bold', color: 'aliceblue'}}>
                  Add to cart
                  </Link>
            </div>
          </div>
        </div>
      </div>
                ))}
            
              <div className="clearfix" />
            </div>
            <div className="pagination">
            <ul >
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
        <nav style={{textAlign: 'center', padding: '50px'}}>
          {/* pagination*/}
          <ul className="pagination pagination-lg">
           
          </ul>
        </nav>
      </div>
    )
}

ProductCategory.propTypes = {

}
const mapDispatchToProps= (dispatch,props)=>{
    return {
      AddToCart:(product)=>{
        dispatch(addToCart(product,1))
      }
    }
  }

export default connect(null,mapDispatchToProps)(ProductCategory)
