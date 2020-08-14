import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const Category = ({category}) => {
    return (
        <div className="chit-chat-layer1">
  <div className="col-md-12 chit-chat-layer1-left">
    <div className="work-progres">
      <div className="chit-chat-heading">
        Product Manager
        <div className="form-group" style={{float: 'left', width: '100%'}}>
          <Link to='/admin/addCategory'  className="btn btn-default"  style={{float: 'left'}}>Add Category</Link>
        
          <input style={{width: '500px', float: 'left', margin: '0px 10px'}}  autoComplete="off" className="form-control" name="search" placeholder="Enter keywords" type="text" />
          {/* <select  className="form-control" style={{width: 'auto', float: 'right'}}>
            <option *ngif="categorys?.length>=4" [ngvalue]={4}>4 product per page</option>
            <option *ngif="categorys?.length>=8" [ngvalue]={8}>8 product per page</option>
            <option [ngvalue]="categorys?.length">All product per page</option>
          </select> */}
        </div>
      </div>
      <div className="table-responsive" style={{width: '100%'}}>
        <table className="table table-hover" id="myTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {category.map((cate,index)=>(
              <tr key={index} >
              <td>{index+1}</td>
              <td>{cate.name}</td>
              <td>
                <Link to={`/admin/eCategory/${cate.id}`} className="btn btn-default"><i className="fa fa-edit" /></Link>
              </td>
            </tr>
            ))}
                 
           
           
          </tbody>
        </table>
      </div>
      {/* <nav style={{textAlign: 'center', padding: '50px'}}>
        
        <ul className="pagination pagination-lg">
          
        </ul>
      </nav> */}
    </div>
  </div>
  <div className="clearfix" />
</div>
    )
}

Category.propTypes = {

}

export default Category
