import React from 'react'
import PropTypes from 'prop-types'
import '../../App.css'


import Products from '../views/Admin/Products'
import Footer from '../../components/Admin/Footer'
import Topbar from '../../components/Admin/TopBar'
import SideBar from '../../components/Admin/SildeBar'
import Modal from '../../Modal'

const MainAdmin = ({children}) => {
    return (
      <div className="page-container">
       
         <div className="left-content">
           <div className="mother-grid-inner">
            <Topbar />
           {children}
       </div>
  </div>
  <SideBar />
  <Footer/>

</div>
    
    )
}

MainAdmin.propTypes = {

}

export default MainAdmin
