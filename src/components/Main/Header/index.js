import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import "./index.css"
import {Link} from "react-router-dom"
import {connect} from 'react-redux';
import {addCart} from '../../../actions/addActions';
import apiCategoy from '../../../api/categoryHttp'
// import {getNumbers} from '../../../actions/getActions';

const Header = ({cart}) => {
  const showTotal=(ct)=>{
    var total=0;
  if(ct.length>0){
    for(var i=0;i<ct.length;i++){
      total+=(ct[i].product.productPrice -(ct[i].product.productPrice/100*ct[i].product.productSale))* ct[i].quantity;
    
    }
    return total;
   
  }
  console.log(total)
  }
   
    return (
        <div>
        {/* header */}
        <div className="header" id="home">
          <div className="container">
            <ul>
              <li>
                <a  href data-target="#myModal" data-toggle="modal"><i aria-hidden="true" className="fa fa-unlock-alt" />
                  Sign In </a>
                {/* <a  href name="username" routerlink="/infAccount">Chào : {'{'}{'{'}username{'}'}{'}'} !</a> */}
              </li>
              <li>
                <a  data-target="#myModal2" data-toggle="modal" href="#"><i aria-hidden="true" className="fa fa-pencil-square-o" /> Sign Up </a>
                <a  href="#" routerlink="/"><i aria-hidden="true" className="fa fa-sign-out" /> Đăng xuất</a>
              </li>
              <li><i aria-hidden="true" className="fa fa-phone" /> Call : 0382941077</li>
              {/* <li><i aria-hidden="true" className="fa fa-envelope-o" /> <a href="mailto:info@example.com">luongndph07792@fpt.edu.vn</a>
              </li> */}
            </ul>
          </div>
        </div>
        {/* //header */}
        {/* header-bot */}
        <div className="header-bot">
          <div className="header-bot_inner_wthreeinfo_header_mid">
            <div className="col-md-4 header-middle">
              <form action="#" method="post">
                <input name="search" placeholder="Search here..."  required type="search" />
                <input type="submit" value=' ' />
                <div className="clearfix" />
              </form>
            </div>
            {/* header-bot */}
            <div className="col-md-4 logo_agile">
              <h1><a href="index.html"><span>P</span>h07761 <i aria-hidden="true" className="fa fa-shopping-bag top_logo_agile_bag" /></a></h1>
            </div>
            {/* header-bot */}
            <div className="col-md-4 agileits-social top_content">
              <ul className="social-nav model-3d-0 footer-social w3_agile_social">
                <li className="share">Share On :</li>
                <li><a className="facebook" href="#">
                    <div className="front"><i aria-hidden="true" className="fa fa-facebook" /></div>
                    <div className="back"><i aria-hidden="true" className="fa fa-facebook" /></div>
                  </a></li>
                <li><a className="twitter" href="#">
                    <div className="front"><i aria-hidden="true" className="fa fa-twitter" /></div>
                    <div className="back"><i aria-hidden="true" className="fa fa-twitter" /></div>
                  </a></li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        {/* //header-bot */}
        {/* banner */}
        <div className="ban-top">
          <div className="container">
            <div className="top_nav_left">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  {/* Brand and toggle get grouped for better mobile display */}
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  {/* Collect the nav links, forms, and other content for toggling */}
                  <div className="collapse navbar-collapse menu--shylock" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav menu__list">
  <li className=" menu__item menu__item">
      <Link className="menu__link" to='/'>Home </Link>
  </li>
  <li className=" menu__item menu__item">
      <Link className="menu__link" to='/products'>Product </Link>
      
  </li>
  <li className=" menu__item menu__item">
      <Link className="menu__link" to='/about'>About </Link>
  </li>
  <li className=" menu__item menu__item">
      <Link className="menu__link" to='/contact'>Contact </Link>
  </li>

</ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="top_nav_right" style={{marginTop: '15px'}}>
              <ul className="clearfix">
                <li>
                 <Link to="/cart" className="hvr-outline-out button2" style={{padding: '10px', fontWeight: 'bold', color: 'aliceblue'}}> <i style={{fontSize: '28px'}} className="fa fa-cart-arrow-down" aria-hidden="true" /></Link>
                  <ul className="sub-menu">
                    <div className="shopping-cart">
                      <div className="shopping-cart-header">
                        <i className="fa fa-shopping-cart cart-icon" /><span className="badge"> </span>
                        <div className="shopping-cart-total">
                      <span className="lighter-text">Total:{showTotal(cart)}</span>
                          <span className="main-color-text"> VND</span>
                        </div>
                      </div>
                      {/*end shopping-cart-header */}
                      <ul className="shopping-cart-items">
                        {cart.map((ct,index)=>(
                           <li className="clearfix" >
                           <a style={{padding: 0}} >
                             <img width="50px" height="50px" src={ct.product.productImage} alt="item1" />
                           <span className="item-name">{ct.product.productName}</span>
                           </a>
                           <span className="item-price">{ct.product.productPrice}</span>
                           <span className="item-quantity">{ct.quantity}</span>
                         </li>
                        ))}
                       
                      </ul>
                      <a  className="buttonn">Đặt hàng</a>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        {/* //banner-top */}
        {/* Modal1 */}
        <div className="modal fade" id="myModal" tabIndex={-1} role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              <div className="modal-body modal-body-sub_agile">
                <div className="col-md-8 modal_body_left modal_body_left1">
                  <h3 className="agileinfo_sign">Sign In <span>Now</span></h3>
                  <form action="#" method="post">
                    <div className="styled-input agile-styled-input-top">
                      <input type="text" name="Email" required />
                      <label>Email</label>
                      <span />
                    </div>
                    <div className="styled-input">
                      <input  type="password" name="password" required />
                      <label>Password</label>
                      <span />
                    </div>
                    <input  type="submit" defaultValue="Sign In" />
                  </form>
                  <ul className="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
                    <li><a  className="facebook">
                        <div className="front"><i className="fa fa-facebook" aria-hidden="true" /></div>
                        <div className="back"><i className="fa fa-facebook" aria-hidden="true" /></div></a></li>
                    <li><a  className="twitter">
                        <div className="front"><i className="fa fa-google" aria-hidden="true" /></div>
                        <div className="back"><i className="fa fa-google" aria-hidden="true" /></div></a></li>
                  </ul>
                  <div className="clearfix" />
                  <p><a href="#" data-toggle="modal" data-target="#myModal2"> Bạn chưa có tài khoản ?</a></p>
                </div>
                <div className="col-md-4 modal_body_right modal_body_right1">
                  <img src="../../../assets/images/log_pic.jpg" alt=" " />
                </div>
                <div className="clearfix" />
              </div>
            </div>
            {/* //Modal content*/}
          </div>
        </div>
        {/* //Modal1 */}
        {/* Modal2 */}
        <div className="modal fade" id="myModal2" tabIndex={-1} role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              <div className="modal-body modal-body-sub_agile">
                <div className="col-md-8 modal_body_left modal_body_left1">
                  <h3 className="agileinfo_sign">Sign Up <span>Now</span></h3>
                  <form action="#" method="post">
                    <div className="styled-input agile-styled-input-top">
                      <input type="text" name="Name" required />
                      <label>Name</label>
                      <span />
                    </div>
                    <div className="styled-input">
                      <input type="email" name="Email" required />
                      <label>Email</label>
                      <span />
                    </div>
                    <div className="styled-input">
                      <input type="password" name="password" required />
                      <label>Password</label>
                      <span />
                    </div>
                    <div className="styled-input">
                      <input type="password" name="Confirm Password" required />
                      <label>Confirm Password</label>
                      <span />
                    </div>
                    <input type="submit" defaultValue="Sign Up" />
                  </form>
                  <ul className="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
                    <li><a  className="facebook">
                        <div className="front"><i className="fa fa-facebook" aria-hidden="true" /></div>
                        <div className="back"><i className="fa fa-facebook" aria-hidden="true" /></div></a></li>
                    <li><a  className="twitter">
                        <div className="front"><i className="fa fa-google" aria-hidden="true" /></div>
                        <div className="back"><i className="fa fa-google" aria-hidden="true" /></div></a></li>
                  </ul>
                  <div className="clearfix" />
                </div>
                <div className="col-md-4 modal_body_right modal_body_right1">
                  <img src="../../../assets/images/log_pic.jpg" alt=" " />
                </div>
                <div className="clearfix" />
              </div>
            </div>
          
          </div>
        </div>
        
      </div>
      
    )
}

Header.propTypes = {

}
const mapStateToProps = state => ({
    cart: state.cart
})

export default  connect(mapStateToProps,null)(Header);
