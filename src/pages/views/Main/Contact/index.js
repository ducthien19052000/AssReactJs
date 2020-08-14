import React from 'react'
import PropTypes from 'prop-types'

const Contact = props => {
    return (
        <div>
  <div className="page-head_agile_info_w3l">
    <div className="container">
      <h3>C<span>ontact Us </span></h3>
      {/*/w3_short*/}
      <div className="services-breadcrumb">
        <div className="agile_inner_breadcrumb">
          <ul className="w3_short">
            <li><a href="index.html">Home</a><i>|</i></li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      {/*//w3_short*/}
    </div>
  </div>
  <div className="banner_bottom_agile_info">
    <div className="container">
      <div className="contact-grid-agile-w3s">
        <div className="col-md-4 contact-grid-agile-w3">
          <div className="contact-grid-agile-w31">
            <i className="fa fa-map-marker" aria-hidden="true" />
            <h4>Address</h4>
            <p>Phố Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm <span>Hà Nội, Việt Nam</span></p>
          </div>
        </div>
        <div className="col-md-4 contact-grid-agile-w3">
          <div className="contact-grid-agile-w32">
            <i className="fa fa-phone" aria-hidden="true" />
            <h4>Call Us</h4>
            <p>+1234 758 839<span>+1273 748 730</span></p>
          </div>
        </div>
        <div className="col-md-4 contact-grid-agile-w3">
          <div className="contact-grid-agile-w33">
            <i className="fa fa-envelope-o" aria-hidden="true" />
            <h4>Email</h4>
            <p><a href="mailto:info@example.com">info@example1.com</a><span><a href="mailto:info@example.com">info@example2.com</a></span></p>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  <div className="contact-w3-agile1 map" data-aos="flip-right">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044334!2d105.74459841476343!3d21.03812778599329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIHRo4buxYyBow6BuaCBGUFQgUG9seXRlY2huaWMgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1597017753852!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
   </div>
  <div className="banner_bottom_agile_info">
    <div className="container">
      <div className="agile-contact-grids">
        <div className="agile-contact-left">
          <div className="col-md-6 address-grid">
            <h4>For More <span>Information</span></h4>
            <div className="mail-agileits-w3layouts">
              <i className="fa fa-volume-control-phone" aria-hidden="true" />
              <div className="contact-right">
                <p>Telephone </p><span>+1 (100)222-23-33</span>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="mail-agileits-w3layouts">
              <i className="fa fa-envelope-o" aria-hidden="true" />
              <div className="contact-right">
                <p>Mail </p><a href="mailto:info@example.com">info@example.com</a>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="mail-agileits-w3layouts">
              <i className="fa fa-map-marker" aria-hidden="true" />
              <div className="contact-right">
                <p>Location</p><span>7784 Diamonds street, California, US.</span>
              </div>
              <div className="clearfix"> </div>
            </div>
            <ul className="social-nav model-3d-0 footer-social w3_agile_social two contact">
              <li className="share">SHARE ON : </li>
              <li><a href="#" className="facebook">
                  <div className="front"><i className="fa fa-facebook" aria-hidden="true" /></div>
                  <div className="back"><i className="fa fa-facebook" aria-hidden="true" /></div></a></li>
              <li><a href="#" className="twitter">
                  <div className="front"><i className="fa fa-twitter" aria-hidden="true" /></div>
                  <div className="back"><i className="fa fa-twitter" aria-hidden="true" /></div></a></li>
              <li><a href="#" className="instagram">
                  <div className="front"><i className="fa fa-instagram" aria-hidden="true" /></div>
                  <div className="back"><i className="fa fa-instagram" aria-hidden="true" /></div></a></li>
              <li><a href="#" className="pinterest">
                  <div className="front"><i className="fa fa-linkedin" aria-hidden="true" /></div>
                  <div className="back"><i className="fa fa-linkedin" aria-hidden="true" /></div></a></li>
            </ul>
          </div>
          <div className="col-md-6 contact-form">
            <h4 className="white-w3ls">Contact <span>Form</span></h4>
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
                <input type="text" name="Subject" required />
                <label>Subject</label>
                <span />
              </div>
              <div className="styled-input">
                <textarea name="Message" required defaultValue={""} />
                <label>Message</label>
                <span />
              </div>
              <input type="submit" defaultValue="SEND" />
            </form>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  {/*//contact*/}
</div>

    )
}

Contact.propTypes = {

}

export default Contact
