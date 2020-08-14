import React from 'react'
import PropTypes from 'prop-types'
import "./index.css"

const Login = props => {
    return (
        <div className="w3layouts-main">
  <div className="bg-layer">
    <h1>Đăng nhập</h1>
    <div className="header-main">
      <div className="header-left-bottom">
        <form action="#" method="post">
          <div className="icon1">
            <input type="email" name="email" placeholder="Nhập email"  required />
          </div>
          <div className="icon1">
            <input type="password" name="password" placeholder="Nhập mật khẩu" required />
          </div>
          <div className="bottom">
            <button  className="btn">Đăng nhập</button>
          </div>
          <div className="links">
            <p><a routerlink="/">Về trang chủ</a></p>
            <div className="clear" />
          </div>
        </form>
      </div>
    </div>
    {/* copyright */}
    <div className="copyright">
      <p>© 2020 Login Elite Shoppy . All rights reserved</p>
    </div>
    {/* //copyright */}
  </div>
</div>

    )
}

Login.propTypes = {

}

export default Login
