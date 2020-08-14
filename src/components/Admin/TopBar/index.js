import React from 'react'
import PropTypes from 'prop-types'
import {Link} from  'react-router-dom'

const Topbar = props => {
    return (
  <div className="header-main">
  <div className="header-left">
    <div className="logo-name">
      <a href="index.html"> <h2>PH07761</h2>
        {/*<img id="logo" src="" alt="Logo"/>*/}
      </a>
    </div>
    <div className="clearfix"> </div>
  </div>
  <div className="header-right">
    <div className="profile_details_left">{/*notifications of menu start */}
      <div className="clearfix"> </div>
    </div>
    <div className="clearfix"> </div>
  </div>
  <div className="clearfix"> </div>
</div>

    )
}

Topbar.propTypes = {

}

export default Topbar
