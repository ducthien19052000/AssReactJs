import React from 'react'
import PropTypes from 'prop-types'
import {useParams} from  "react-router-dom"
import apiProduct from "../../../../api/productApi"
import { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux';
import {addToCart} from '../../../../actions/index';
import {Link} from 'react-router-dom';

const ProductDetail = ({products,AddToCart}) => {
        const id = useParams().id;
      const [product,setProduct] = useState({});
      const [quantity,setQuantity] = useState(1);

      useEffect(()=>{
        const getProduct =async()=>{
          try{
            const {data}= await apiProduct.getProduct(id);
            setProduct(data)
          }
          catch(error){
            console.log('Faile to request API',error)
          }
        }
        getProduct()
      },{})
      const onAddtocart=(product,quantity)=>{
        AddToCart(product,quantity)
      }
      const onHandleChange = e => {
       
        const number= parseInt(e.target.value)
        setQuantity(number)
        
    }
    console.log(quantity)
    
    return (
        <div>
          
            <div>
              <div className="page-head_agile_info_w3l">
              <div className="container">
              <h3> {product.productName}</h3>
                {/*/w3_short*/}
                <div className="services-breadcrumb">
                  <div className="agile_inner_breadcrumb">
                    <ul className="w3_short">
                      <li><a>Home</a><i>|</i></li>
                      <li>{product.productName} </li>
                    </ul>
                  </div>
                </div>
                {/*//w3_short*/}
              </div>
            </div>
            <div className="banner-bootom-w3-agileits">
              <div className="container">
                <div  className="col-md-4 single-right-left ">
                  <div className="grid images_3_of_2">
                    <div className="flexslider">
                      <ul className="slides">
                        <div className="thumb-image"><img src={product.productImage} /></div>
                      </ul>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
                <div className="col-md-8 single-right-left simpleCart_shelfItem">
              <h3> {product.productName}</h3>
                  <p>
              <span className="item_price">{product.productPrice} VNĐ</span>
                    {/* <del *ngif="product?.productSale!=0">${'{'}{'{'}product?.productPrice| number{'}'}{'}'} VND</del> */}
                  </p>
                  <div className="rating1">
                    <span className="starRating">
                      <input id="rating5" name="rating" type="radio" defaultValue={5} />
                      <label htmlFor="rating5">5</label>
                      <input id="rating4" name="rating" type="radio" defaultValue={4} />
                      <label htmlFor="rating4">4</label>
                      <input defaultChecked id="rating3" name="rating" type="radio" defaultValue={3} />
                      <label htmlFor="rating3">3</label>
                      <input id="rating2" name="rating" type="radio" defaultValue={2} />
                      <label htmlFor="rating2">2</label>
                      <input id="rating1" name="rating" type="radio" defaultValue={1} />
                      <label htmlFor="rating1">1</label>
                    </span>
                  </div>
                  <div className="description">
                    <h5>Check delivery, payment options and charges at your location</h5>
                    <form action="#" method="post">
                      <input onblur="if (this.value == '') {this.value = 'Enter pincode';}" onfocus="this.value = '';" required type="text" defaultValue="Enter pincode" />
                      <input type="submit" defaultValue="Check" />
                    </form>
                  </div>
                  <div className="color-quality">
                    <div className="color-quality-right">
                      <b><h5>Remain :25 </h5></b>
                      <h5>Quality : </h5>
                      <input max="{{product?.productTotal}}"  name='quantity' onChange={onHandleChange} className="form-control text-center" name="total" type="number" min={1} max={product.productTotal} defaultValue={1} style={{width: '100px'}} />
                    </div>
                  </div>
                  <div className="occasion-cart">
                    <div>
                    <Link to='/cart' onClick={()=>onAddtocart(product,quantity)} className="hvr-outline-out button2" style={{padding: '10px', fontWeight: 'bold', color: 'aliceblue'}}>
                  Add to cart
                  </Link>
                    </div>
                  </div>
                  <ul className="social-nav model-3d-0 footer-social w3_agile_social single_page_w3ls">
                    <li className="share">Share On :</li>
                    <li><a className="facebook" href="#">
                        <div className="front"><i aria-hidden="true" className="fa fa-facebook" /></div>
                        <div className="back"><i aria-hidden="true" className="fa fa-facebook" /></div>
                      </a></li>
                    <li><a className="twitter" href="#">
                        <div className="front"><i aria-hidden="true" className="fa fa-twitter" /></div>
                        <div className="back"><i aria-hidden="true" className="fa fa-twitter" /></div>
                      </a></li>
                    <li><a className="instagram" href="#">
                        <div className="front"><i aria-hidden="true" className="fa fa-instagram" /></div>
                        <div className="back"><i aria-hidden="true" className="fa fa-instagram" /></div>
                      </a></li>
                    <li><a className="pinterest" href="#">
                        <div className="front"><i aria-hidden="true" className="fa fa-linkedin" /></div>
                        <div className="back"><i aria-hidden="true" className="fa fa-linkedin" /></div>
                      </a></li>
                  </ul>
                </div>
                <div className="clearfix" />
                <div className="responsive_tabs_agileits">
                  <div id="horizontalTab">
                    <ul className="resp-tabs-list">
                      <li>Description</li>
                    </ul>
                    <div className="resp-tabs-container">
                      {/*/tab_one*/}
                      <div className="tab1">
                        <div className="single_page_agile_its_w3ls">
                           <h6>{product.productName}</h6>
                           <p>{product.productDescription}</p>
                        </div>
                      </div>
                      {/*//tab_one*/}
                    </div>
                  </div>
                </div>
    
              </div>
            </div>
            </div>
          

</div>


    )
}

ProductDetail.propTypes = {

}
const mapDispatchToProps= (dispatch,props)=>{
  return {
    AddToCart:(product,quantity)=>{
      dispatch(addToCart(product,quantity))
    }
  }
}

export default connect(null,mapDispatchToProps)(ProductDetail)
