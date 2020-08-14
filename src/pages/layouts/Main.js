import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../../components/Main/Footer'
import Header from '../../components/Main/Header'
import { Provider } from 'react-redux'
import store from '../../store'



const Main = ({children}) => {
    return (
    <div>
        <Provider store={store}>
        <Header/>
        {children}
        <Footer/>
        </Provider>
       
    </div>
    )
}

Main.propTypes = {

}

export default Main
