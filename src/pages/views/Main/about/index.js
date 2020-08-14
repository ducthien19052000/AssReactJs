import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const About = props => {
    const [about,setAbout] = useState([]);
    axios({
      method: 'get',
      url: 'http://localhost:8080/about',
      data:null
    })
      .then(res=>{
        setAbout(res.data);
      }).catch(err=>{
        console.log(err)
      });

    return (
        <div>
  <div className="page-head_agile_info_w3l">
    <div className="container">
      <h3>About <span>Us </span></h3>
      {/*/w3_short*/}
      <div className="services-breadcrumb">
        <div className="agile_inner_breadcrumb">
          <ul className="w3_short">
            <li><a href="index.html">Home</a><i>|</i></li>
            <li>About</li>
          </ul>
        </div>
      </div>
      {/*//w3_short*/}
    </div>
  </div>
  {/* /banner_bottom_agile_info */}
  <div className="banner_bottom_agile_info">
    <div className="container">
     {about.map((ab,index)=>(
        <div className="agile_ab_w3ls_info" key={index}>
        <div className="col-md-6 ab_pic_w3ls">
          <img src={ab.Image} alt=" " className="img-responsive" />
        </div>
        <div className="col-md-6 ab_pic_w3ls_text_info">
          <h5><a>{ab.tieuDe}</a></h5>
           <p>{ab.noiDung}</p>

        </div>
        <div className="clearfix" />
      </div>
     ))}
    </div>
  </div>
  <div className="banner_bottom_agile_info team">
    <div className="container">
      <h3 className="wthree_text_info">Our Team <span>Members</span></h3>
      <div className="inner_w3l_agile_grids">
        <div className="col-md-3 team-grids">
          <div className="thumbnail team-w3agile">
            <img src="../../../assets/images/t2.jpg" alt=" " className="img-responsive" />
            <div className="social-icons team-icons right-w3l fotw33">
              <div className="caption">
                <h4>Joanna Vilken</h4>
                <p>Add Short Description</p>
              </div>
              <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
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
          </div>
        </div>
        <div className="col-md-3 team-grids">
          <div className="thumbnail team-w3agile">
            <img src="../../../assets/images/t3.jpg" alt=" " className="img-responsive" />
            <div className="social-icons team-icons right-w3l fotw33">
              <div className="caption">
                <h4>Anika Mollik</h4>
                <p>Add Short Description</p>
              </div>
              <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
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
          </div>
        </div>
        <div className="col-md-3 team-grids">
          <div className="thumbnail team-w3agile">
            <img src="../../../assets/images/t1.jpg" alt=" " className="img-responsive" />
            <div className="social-icons team-icons right-w3l fotw33">
              <div className="caption">
                <h4>Megali Deo</h4>
                <p>Add Short Description</p>
              </div>
              <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
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
          </div>
        </div>
        <div className="col-md-3 team-grids">
          <div className="thumbnail team-w3agile">
            <img src="../../../assets/images/t4.jpg" className="img-responsive" alt="" />
            <div className="social-icons team-icons right-w3l fotw33">
              <div className="cap tion">
                <h4>Retas Word</h4>
                <p>Add Short Description</p>
              </div>
              <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
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
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
</div>

    )
}

About.propTypes = {

}

export default About
