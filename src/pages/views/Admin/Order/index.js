import React from 'react'
import PropTypes from 'prop-types'

const Order = props => {
    return (
        <div className="chit-chat-layer1">
  <div className="col-md-12 chit-chat-layer1-left">
    <div className="work-progres">
      <div className="chit-chat-heading">
        order Manager
        <div className="form-group" style={{float: 'left', width: '100%'}}>
          {/* <input style={{width: '500px', float: 'left', margin: '0px 10px'}} [(ngmodel)]="searchText" autoComplete="off" className="form-control" name="search" placeholder="Enter keywords" type="text" /> */}
          {/* <select [(ngmodel)]="pageSize" className="form-control" style={{width: 'auto', float: 'right'}}>
            <option *ngif="orders?.length>=4" [ngvalue]={4}>4 order per page</option>
            <option *ngif="orders?.length>=8" [ngvalue]={8}>8 order per page</option>
            <option *ngif="orders?.length>=12" [ngvalue]={12}>12 order per page</option>
            <option [ngvalue]="orders?.length">All order per page</option>
          </select> */}
        </div>
      </div>
      <div className="table-responsive" style={{width: '100%'}}>
        <table className="table table-hover" id="myTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên khách hàng</th>
              <th>Địa chỉ</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Ngày đặt hàng</th>
              <th>Trạng thái</th>
              <th>Tùy chọn</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr *ngfor="let order of orders  | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize | filter:searchText; index as i">
              <td>{'{'}{'{'}i+1{'}'}{'}'}</td>
              <td>{'{'}{'{'}order.receiptName{'}'}{'}'}</td>
              <td>
                {'{'}{'{'}order.receiptAddress{'}'}{'}'}
              </td>
              <td>{'{'}{'{'}order.receiptEmail{'}'}{'}'}</td>
              <td>{'{'}{'{'}order.receiptPhone{'}'}{'}'}</td>
              <td>{'{'}{'{'}order.receiptDate | date: 'dd/MM/yyyy hh:mm:ss'{'}'}{'}'}</td>
              <td >
                <a className="btn btn-default" >Gửi hàng</a>
              </td>
              <td >Đã gửi hàng</td>
              <td>
                <a className="btn btn-default" routerlink="/admin/order/{{order.receiptId}}" style={{marginRight: '10px'}}>Chi tiết</a>
              </td>
            </tr>
          </tbody> */}
        </table>
      </div>
      <nav style={{textAlign: 'center', padding: '50px'}}>
        {/* pagination*/}
        <ul className="pagination pagination-lg">
          {/* <ngb-pagination [(page)]="page" [collectionsize]="orders.length" [pagesize]="pageSize">
          </ngb-pagination> */}
        </ul>
      </nav>
    </div>
  </div>
  <div className="clearfix" />
</div>

    )
}

Order.propTypes = {

}

export default Order
