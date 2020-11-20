import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {Link,NavLink} from "react-router-dom"
import 'element-theme-default';
import {connect} from 'react-redux';
import {addToCart} from '../../../../actions/index'

const Home = ({products,onDetail,AddToCart}) => {
  const [currentPage,setCurrentPage] = useState(1);
  const [prsPerPage,setPostsPerPage] = useState(4);
  const indexOfLastPost= currentPage*prsPerPage;
  const indexOfFirtPost =indexOfLastPost - prsPerPage;
  const newProduct = products.slice(indexOfFirtPost,indexOfLastPost)
      const onAddToCart=(product,quantity)=>{
        AddToCart(product,quantity)
      }
      

    return (
        <div>
        {/* banner */}
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} className="" />
            <li data-target="#myCarousel" data-slide-to={2} className =""/>
            <li data-target="#myCarousel" data-slide-to={3} className="" />
            <li data-target="#myCarousel" data-slide-to={4} className="" />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="container">
                <div className="carousel-caption">
                  <h3>The Biggest <span>Sale</span></h3>
                  <p>Special for today</p>
                  <a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
                </div>
              </div>
            </div>
            <div className="item item2">
              <div className="container">
                <div className="carousel-caption">
                  <h3>Summer <span>Collection</span></h3>
                  <p>New Arrivals On Sale</p>
                  <a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
                </div>
              </div>
            </div>
            <div className="item item3">
              <div className="container">
                <div className="carousel-caption">
                  <h3>The Biggest <span>Sale</span></h3>
                  <p>Special for today</p>
                  <a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
                </div>
              </div>
            </div>
            <div className="item item4">
              <div className="container">
                <div className="carousel-caption">
                  <h3>Summer <span>Collection</span></h3>
                  <p>New Arrivals On Sale</p>
                  <a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
                </div>
              </div>
            </div>
            <div className="item item5">
              <div className="container">
                <div className="carousel-caption">
                  <h3>The Biggest <span>Sale</span></h3>
                  <p>Special for today</p>
                  <a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
                </div>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
          {/* The Modal */}
        </div>
        {/* //banner */}
        <div className="banner_bottom_agile_info">
          <div className="container">
            <div className="banner_bottom_agile_info_inner_w3ls">
              <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
                <figure className="effect-roxy">
                  <img  src="https://rawcdn.githack.com/ducthien19052000/imageReact/219fa1771a1d6b4df4fca7de9cec328d772cd4d1/images/banner1.jpg" alt=" " className="img-responsive" />
                  <figcaption>
                    <h3><span>F</span>all Ahead</h3>
                    <p>New Arrivals</p>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
                <figure className="effect-roxy">
                  <img src="https://rawcdn.githack.com/ducthien19052000/imageReact/219fa1771a1d6b4df4fca7de9cec328d772cd4d1/images/banner2.jpg" alt=" " className="img-responsive" />
                  <figcaption>
                    <h3><span>F</span>all Ahead</h3>
                    <p>New Arrivals</p>
                  </figcaption>
                </figure>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
        {/* schedule-bottom */}
        <div className="schedule-bottom">
          <div className="col-md-6 agileinfo_schedule_bottom_left">
            <img src="https://rawcdn.githack.com/ducthien19052000/imageReact/219fa1771a1d6b4df4fca7de9cec328d772cd4d1/images/mid.jpg" alt=" " className="img-responsive" />
          </div>
          <div className="col-md-6 agileits_schedule_bottom_right">
            <div className="w3ls_schedule_bottom_right_grid">
              <h3>Save up to <span>50%</span> in this week</h3>
              <p>Suspendisse varius turpis efficitur erat laoreet dapibus.
                Mauris sollicitudin scelerisque commodo.Nunc dapibus mauris sed metus finibus posuere.</p>
              <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                <i className="fa fa-user-o" aria-hidden="true" />
                <h4>Customers</h4>
                <h5 className="counter">653</h5>
              </div>
              <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                <i className="fa fa-calendar-o" aria-hidden="true" />
                <h4>Events</h4>
                <h5 className="counter">823</h5>
              </div>
              <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                <i className="fa fa-shield" aria-hidden="true" />
                <h4>Awards</h4>
                <h5 className="counter">45</h5>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        {/* //schedule-bottom */}
        {/* banner-bootom-w3-agileits */}
        <div className="banner-bootom-w3-agileits">
          <div className="container">
            <h3 className="wthree_text_info">What's <span>Trending</span></h3>
            <div className="col-md-5 bb-grids bb-left-agileits-w3layouts">
              <a href="womens.html">
                <div className="bb-left-agileits-w3layouts-inner grid">
                  <figure className="effect-roxy">
                    <img  src="https://rawcdn.githack.com/ducthien19052000/imageReact/219fa1771a1d6b4df4fca7de9cec328d772cd4d1/images/bb1.jpg" alt=" " className="img-responsive" />
                    <figcaption>
                      <h3><span>S</span>ale </h3>
                      <p>Upto 55%</p>
                    </figcaption>
                  </figure>
                </div>
              </a>
            </div>
            <div className="col-md-7 bb-grids bb-middle-agileits-w3layouts">
              <a href="mens.html">
                <div className="bb-middle-agileits-w3layouts grid">
                  <figure className="effect-roxy">
                    <img src="https://rawcdn.githack.com/ducthien19052000/imageReact/219fa1771a1d6b4df4fca7de9cec328d772cd4d1/images/bottom3.jpg" alt=" " className="img-responsive" />
                    <figcaption>
                      <h3><span>S</span>ale </h3>
                      <p>Upto 55%</p>
                    </figcaption>
                  </figure>
                </div>
              </a>
              <a href="mens.html">
                <div className="bb-middle-agileits-w3layouts forth grid">
                  <figure className="effect-roxy">
                    <img src="https://rawcdn.githack.com/ducthien19052000/imageReact/219fa1771a1d6b4df4fca7de9cec328d772cd4d1/images/bottom4.jpg" alt=" " className="img-responsive" />
                    <figcaption>
                      <h3><span>S</span>ale </h3>
                      <p>Upto 65%</p>
                    </figcaption>
                  </figure>
                </div>
              </a>
              <div className="clearfix" />
            </div>
          </div>
        </div>
        {/*/grids*/}
        <div className="agile_last_double_sectionw3ls">
          <div className="col-md-6 multi-gd-img multi-gd-text ">
            <a href="womens.html"><img  src="https://rawcdn.githack.com/ducthien19052000/imageReact/219fa1771a1d6b4df4fca7de9cec328d772cd4d1/images/bot_1.jpg" alt=" " /><h4>Flat <span>50%</span> offer</h4></a>
          </div>
          <div className="col-md-6 multi-gd-img multi-gd-text ">
            <a href="womens.html"><img src="https://rawcdn.githack.com/ducthien19052000/imageReact/219fa1771a1d6b4df4fca7de9cec328d772cd4d1/images/bot_2.jpg" alt=" " /><h4>Flat <span>50%</span> offer</h4></a>
          </div>
          <div className="clearfix" />
        </div>
        {/*/grids*/}
        <div className="new_arrivals_agile_w3ls_info">
          <div className="container">
            <h3 className="wthree_text_info">New <span>Arrivals</span></h3>
            <div className="resp-tabs-container">
              {/*/tab_one*/}
              <div className="tab1">
               
                    {newProduct.map((product,index)=>(
                         <div className="col-md-3 product-men" key={index}>
                           <div className="men-pro-item simpleCart_shelfItem">
                           <div className="men-thumb-item">
                             <img width="255px" height="275px" src={product.productImage} alt="" className="pro-image-front" />
                             <img width="255px" height="275px" src={product.productImage} alt="" className="pro-image-back" />
                             <div className="men-cart-pro">
                               <div className="inner-men-cart-pro" >
                                <Link to= {`/product/${product.id}`}> <a  className="link-product-add-cart" >Quick View</a></Link>
                               </div>
                             </div>
                             <span className="product-new-top" >New</span>
                             <span className="product-new-top" >{product.productSale}%</span>
                           </div>
                           <div className="item-info-product ">
                             <h4><a href="single.html">{product.productName}</a></h4>
                             <div className="info-product-price">
                               <span className="item_price">{product.productPrice} VND</span>
                               {/* <del style={{fontSize: '13px'}}>{'{'}{'{'}product.productPrice| number{'}'}{'}'} VND</del> */}
                             </div>
                             <div>
                              <Link to='/cart' onClick={()=>onAddToCart(product,1)} className="hvr-outline-out button2"  style={{padding: '10px', fontWeight: 'bold', color: 'aliceblue'}}>
                              Add to cart
                              </Link>
                             </div>
                           </div>
                         </div>
                         </div>
                
                    ))}
               
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
        {/* //new_arrivals */}
        {/* /we-offer */}
        <div className="sale-w3ls">
          <div className="container">
            <h6>We Offer Flat <span>40%</span> Discount</h6>
            <a className="hvr-outline-out button2" href="single.html">Shop Now </a>
          </div>
        </div>
        
     <div className="grid-content bg-purple"></div>
     <div className="grid-content bg-purple"></div>
      <div className="grid-content bg-purple"></div>
   <div className="grid-content bg-purple"></div>
      </div>

      
    )
}

Home.propTypes = {

}
const mapDispatchToProps= (dispatch,props)=>{
  return {
    AddToCart:(product,quantity)=>{
      dispatch(addToCart(product,quantity))
    }
  }
}

export default connect(null,mapDispatchToProps) (Home);
