import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";

const SideBar = props => {
    return (
      <div>
  <div className="sidebar-menu">
    <div className="menu">
      <ul id="menu">
        <li id="menu-home">
          <Link to="/admin"><a href="#" ><i className="fa fa-tachometer" /><span>Trang chính</span></a></Link>
        </li>
        <li>
          <Link to="/admin/products"><a  href="#"><i className="fa fa-shopping-cart" /><span>Sản phẩm</span></a></Link>
        </li>
        <li>
          <Link to='/admin/category'> <a  href="#"><i className="fa fa-circle" /><span>Danh mục</span></a></Link>
         
          </li>
        <li>
          <Link to='/admin/oder'><a  href="#"><i className="fa fa-envelope-open" /><span>Đơn hàng</span></a></Link>
          </li>
        <li>
          <Link to='/admin/user'><a  href="#"><i className="fa fa-user" aria-hidden="true" /><span>Người dùng</span></a></Link>
          </li>
        <li><a  href="#"><i className="fa fa-sign-out" /><span>Logout</span></a></li>
      </ul>
    </div>
  </div>
  <div className="clearfix"> </div>
</div>

    )
}

SideBar.propTypes = {

}

export default SideBar
