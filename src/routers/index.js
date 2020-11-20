import React from 'react'
import PropTypes from 'prop-types'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainAdmin from '../pages/layouts/MainAdmin';
import Products from '../pages/views/Admin/Products';
import UpdateProduct from '../pages/views/Admin/UpdateProduct';
import Main from '../pages/layouts/Main';
import ProductDetail from '../pages/views/Main/productDetail';
import Dashboard from '../pages/views/Admin/Dashboard';
import ProductCategory from '../pages/views/Main/productCategory';
import AddProduct from '../pages/views/Admin/AddProduct';
import Category from '../pages/views/Admin/Category';
import Order from '../pages/views/Admin/Order';
import Home from '../pages/views/Main/home';
import ProductsHome from '../pages/views/Main/products';
import About from '../pages/views/Main/about';
import Cart from '../pages/views/Main/cart'
import Modal from '../Modal';
import AddCategory from '../pages/views/Admin/AddCategory';
import UpdateCategory from '../pages/views/Admin/UpdateCategory';
import Contact from '../pages/views/Main/Contact';




const Routers = ({products,onRemove,onAdd,onUpdate,onDetail,onSearch,category,onAddCategory,onUpdateCategory}) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleAddCategory=(category)=>{
        onAddCategory(category)
    }
    const onHandeDetail=(id)=>{
        onDetail(id)
    }
   const onHandleAdd =(product)=>{
       onAdd(product)
       
   }
    const onHandleUpdate=(id,product)=>{
        onUpdate(id,product);
    }
   const onHandleSearch=(key)=>{
    onSearch(key);
   }
   const onHandleUpdateCategory=(id,category)=>{
    onUpdateCategory(id,category)
   }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
               
                    <MainAdmin>
                        <Switch>
                        
                            <Route path='/admin' exact>
                                <Dashboard products={products}  category={category} />
                            </Route>
                            <Route path='/admin/products' render={(props)=>
                                 <Products {...props} products={products} category={category} onRemove={onHandleRemove} onSearch={onHandleSearch}  />
                            }>
                        
                            </Route>
                            {/* <Route path='/admin/add-product'  >
                                <AddProduct onAdd={onHandleAdd} category={category} />
                            </Route> */}
                            <Route path='/admin/product/:id'>
                                <UpdateProduct products={products}  onUpdate={onHandleUpdate} category={category}/>
                            </Route>
                            <Route path='/admin/category' render={(props)=>
                                 <Category {...props} category={category} onRemove={onHandleRemove} onSearch={onHandleSearch}  />
                            }>
                        
                            </Route>
                           
                            <Route path='/admin/oder'>
                                <Order/>
                            </Route>
                            <Route path='/admin/addCategory'>
                                <AddCategory onAddCategory={onHandleAddCategory}/>
                            </Route>
                            <Route path='/admin/eCategory/:id'>
                                  <UpdateCategory onUpdateCategory={onHandleUpdateCategory}/>
                            </Route>
                        </Switch>
                    </MainAdmin>
                   
                </Route>
                <Route >
                    <Main>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products}  />
                            </Route>
                            <Route path='/products'>
                                <ProductsHome products={products}/>
                            </Route>
                            <Route path='/about'>
                                <About/>
                            </Route>
                            <Route path='/contact'>
                                <Contact/>
                            </Route>
                            <Route path='/product/:id' >
                                <ProductDetail products={products}  />
                            </Route>
                            <Route path='/cart'>
                                <Cart/>
                            </Route>
                            <Route path='/category/:id'>
                            <ProductCategory products={products}/>
                            </Route>
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
       
    )
}

Routers.propTypes = {

}

export default Routers
