import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {removeToCart} from '../../../../actions/index'

const Cart = ({cart,onDeletePrToCart}) => {
  const [quantity, setQuantity] = useState([]);

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
      const onHandleRemoveCart=(product)=>{
          onDeletePrToCart(product);
         
      }
      const onHandleChange = e => {
        const { name, value } = e.target;
        setQuantity({
          
            [name]: value
        })
        console.log(quantity)
    }
   
    return (
       <div className="container">
         {Object.keys(cart).length==0?<div style={{margin: '20px 0px 20px 305px'}}>
    <img style={{display: 'block'}}  src="../../../assets/images/empty-cart.png" alt="" />
  </div>:<div>
  
  <h2  className="text-center" style={{margin: '50px 0px', fontWeight: 'bold'}}>Giỏ hàng của bạn</h2>
  <table id="cart" className="table table-hover table-condensed" >
    <thead>
      <tr>
        <th className="text-center" style={{width: '50%'}}>Sản phẩm</th>
        <th style={{width: '20%'}}>Giá </th>
        <th style={{width: '10%'}}>Số lượng</th>
        <th style={{width: '22%'}} className="text-center">Thành tiền</th>
        <th style={{width: '10%'}}>Xóa</th>
      </tr>
    </thead>
    <tbody>
      {cart.map((product,index)=>(
        
            <tr key={index} >
            <td data-th="Product">
              <a  style={{color: '#34495e'}}>
                <div className="row">
                  <div className="col-sm-2 hidden-xs"><img width="80px" height="80px" src={product.product.productImage} alt="" />
                  </div>
                  <div className="col-sm-10">
                    <h5 className="nomargin">{product.product.productName}</h5>
                  </div>
                </div>
              </a>
            </td>
            <td data-th="Price">{product.product.productPrice} VND</td>
            <td data-th="Quantity"><input  className="form-control text-center" name='quantity' onMouseOut={onHandleChange} value={product.quantity}   id="{{item.product.id}}" min={1} max="{{item.product.productTotal}}" type="number" />
            
            </td>
      <td data-th="Subtotal" className="text-center">{(product.product.productPrice -(product.product.productPrice/100*product.product.productSale))* product.quantity}VND</td>
            <td className="actions " data-th>
              <button  className="btn btn-danger btn-sm"><i className="fa fa-trash-o" onClick={()=>onHandleRemoveCart(product.product)}/>
              </button>
            </td>
          </tr>
      ))}
    
    </tbody><tfoot>
      <tr className="visible-xs">
        <td className="text-center">
        </td>
      </tr>
      <tr>
        <td><a routerlink="/product" className="btn btn-warning"><b><i className="fa fa-angle-left" /> Tiếp tục mua hàng</b></a>
        </td>
        <td colSpan={2} className="hidden-xs"> </td>
        <td className="hidden-xs text-center"><strong>Tạm tính :{showTotal(cart)}  VND</strong>
        </td>
        <td><a routerlink="/order" onClick={()=>showTotal(cart)} className="btn btn-success btn-block"><b>Thanh toán <i className="fa fa-angle-right" /></b></a>
        </td>
      </tr>
    </tfoot>
  </table>
    </div>}
  
 
</div>

    );
    }

Cart.propTypes = {
        
}
const mapStateToProps= state =>{
  return {
    cart :state.cart}
}
const mapDispatchToProps=(dispatch,props)=>{
  return {
     onDeletePrToCart:(product)=>{
       dispatch(removeToCart(product))
     }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
