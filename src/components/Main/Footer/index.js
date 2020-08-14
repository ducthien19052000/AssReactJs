import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <div>
  <div className="footer">
    <div className="footer_agile_inner_info_w3l">
      <div className="col-md-3 footer-left">
        <h2><a href="index.html"><span>E</span>lite Shoppy </a></h2>
        <p>Lorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non
          numquam eius modi tempora.</p>
        <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
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
      <div className="col-md-9 footer-right">
        <div className="sign-grds">
          <div className="col-md-4 sign-gd">
            <h4>Our <span>Information</span></h4>
            <ul>
              <li><a >Home</a></li>
              <li><a >Product</a></li>
              <li><a >About</a></li>
              <li><a >Contact</a></li>
            </ul>
          </div>
          <div className="col-md-5 sign-gd-two">
            <h4>Store <span>Information</span></h4>
            <div className="w3-address">
              <div className="w3-address-grid">
                <div className="w3-address-left">
                  <i aria-hidden="true" className="fa fa-phone" />
                </div>
                <div className="w3-address-right">
                  <h6>Phone Number</h6>
                  <p>+1 234 567 8901</p>
                </div>
                <div className="clearfix" />
              </div>
              <div className="w3-address-grid">
                <div className="w3-address-left">
                  <i aria-hidden="true" className="fa fa-envelope" />
                </div>
                <div className="w3-address-right">
                  <h6>Email Address</h6>
                  <p>Email :<a href="mailto:example@email.com"> mail@example.com</a></p>
                </div>
                <div className="clearfix" />
              </div>
              <div className="w3-address-grid">
                <div className="w3-address-left">
                  <i aria-hidden="true" className="fa fa-map-marker" />
                </div>
                <div className="w3-address-right">
                  <h6>Location</h6>
                  <p>Broome St, NY 10002,California, USA.
                  </p>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
          <div className="col-md-3 sign-gd flickr-post">
            <h4>Flickr <span>Posts</span></h4>
            <ul>
              <li><a href="single.html"><img alt=" " className="img-responsive" src="../../../assets/images/t1.jpg" /></a>
              </li>
              <li><a href="single.html"><img alt=" " className="img-responsive" src="../../../assets/images/t4.jpg" /></a>
              </li>
              <li><a href="single.html"><img alt=" " className="img-responsive" src="../../../assets/images/t2.jpg" /></a>
              </li>
              <li><a href="single.html"><img alt=" " className="img-responsive" src="../../../assets/images/t3.jpg" /></a>
              </li>
              <li><a href="single.html"><img alt=" " className="img-responsive" src="../../../assets/images/t1.jpg" /></a>
              </li>
              <li><a href="single.html"><img alt=" " className="img-responsive" src="../../../assets/images/t4.jpg" /></a>
              </li>
              <li><a href="single.html"><img alt=" " className="img-responsive" src="../../../assets/images/t3.jpg" /></a>
              </li>
              <li><a href="single.html"><img alt=" " className="img-responsive" src="../../../assets/images/t2.jpg" /></a>
              </li>
              <li><a href="single.html"><img alt=" " className="img-responsive" src="../../../assets/images/t1.jpg" /></a>
              </li>
            </ul>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <div className="clearfix" />
      <div className="agile_newsletter_footer">
        <div className="col-sm-6 newsleft">
          <h3>SIGN UP FOR NEWSLETTER !</h3>
        </div>
        <div className="col-sm-6 newsright">
          <form action="#" method="post">
            <input name="email" placeholder="Enter your email..." required type="email" />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
        <div className="clearfix" />
      </div>
      <p className="copy-right">© 2017 Elite shoppy. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a>
      </p>
    </div>
  </div>
  {/* //footer */}
  {/* login */}
  <div aria-labelledby="myModalLabel" className="modal fade" id="myModal4" role="dialog" tabIndex={-1}>
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
        </div>
        <div className="modal-body modal-spa">
          <div className="login-grids">
            <div className="login">
              <div className="login-bottom">
                <h3>Sign up for free</h3>
                <form>
                  <div className="sign-up">
                    <h4>Email :</h4>
                    <input  required type="text" defaultValue="Type here" />
                  </div>
                  <div className="sign-up">
                    <h4>Password :</h4>
                    <input  required type="password" defaultValue="Password" />
                  </div>
                  <div className="sign-up">
                    <h4>Re-type Password :</h4>
                    <input  required type="password" defaultValue="Password" />
                  </div>
                  <div className="sign-up">
                    <input type="submit" defaultValue="REGISTER NOW" />
                  </div>
                </form>
              </div>
              <div className="login-right">
                <h3>Sign in with your account</h3>
                <form>
                  <div className="sign-in">
                    <h4>Email :</h4>
                    <input required type="text" defaultValue="Type here" />
                  </div>
                  <div className="sign-in">
                    <h4>Password :</h4>
                    <input  required type="password" defaultValue="Password" />
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="single-bottom">
                    <input id="brand" type="checkbox" defaultValue />
                    <label htmlFor="brand"><span />Remember Me.</label>
                  </div>
                  <div className="sign-in">
                    <input type="submit" defaultValue="SIGNIN" />
                  </div>
                </form>
              </div>
              <div className="clearfix" />
            </div>
            <p>By logging in you agree to our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* //login */}
  <a className="scroll" href="#home" id="toTop" style={{display: 'block'}}> <span id="toTopHover" style={{opacity: 1}}> </span></a>
</div>

    )
}

Footer.propTypes = {

}

export default Footer
