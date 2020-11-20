import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const Dashboard = ({products,category}) => {
  const productsTotal= products.length;
  const categoryTotal= category.length;
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
  <div className="market-updates">
    <div className="col-md-4 market-update-gd">
      <div className="market-update-block clr-block-1">
        <div className="col-md-8 market-update-left">
          <h3>{productsTotal}</h3>
          <h4>Sản phẩm</h4>
          <p>Tổng số sản phẩm</p>
        </div>
        <div className="col-md-4 market-update-right">
          <i className="fa fa-file-text-o"> </i>
        </div>
        <div className="clearfix" />
      </div>
    </div>
    <div className="col-md-4 market-update-gd">
      <div className="market-update-block clr-block-2">
        <div className="col-md-8 market-update-left">
           <h3>{categoryTotal}</h3>
          <h4>Danh mục</h4>
          <p>Số danh mục sản phẩm</p>
        </div>
        <div className="col-md-4 market-update-right">
          <i className="fa fa-eye"> </i>
        </div>
        <div className="clearfix" />
      </div>
    </div>
    <div className="col-md-4 market-update-gd">
      <div className="market-update-block clr-block-3">
        <div className="col-md-8 market-update-left">
          <h3>{about.length}</h3>
          <h4> Bài viết</h4>
          <p>Tổng số bài viết</p>
        </div>
        <div className="col-md-4 market-update-right">
          <i className="fa fa-envelope-o"> </i>
        </div>
        <div className="clearfix" />
      </div>
    </div>
    <div className="clearfix" />
  </div>
  {/*market updates end here*/}
  {/*mainpage chit-chating*/}
  <div className="chit-chat-layer1">
    <div className="col-md-6 chit-chat-layer1-left">
      <div className="work-progres">
        <div className="chit-chat-heading">
          Recent Followers
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Project</th>
                <th>Manager</th>
                <th>Status</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Face book</td>
                <td>Malorum</td>
                <td><span className="label label-danger">in progress</span></td>
                <td><span className="badge badge-info">50%</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Twitter</td>
                <td>Evan</td>
                <td><span className="label label-success">completed</span></td>
                <td><span className="badge badge-success">100%</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Google</td>
                <td>John</td>
                <td><span className="label label-warning">in progress</span></td>
                <td><span className="badge badge-warning">75%</span></td>
              </tr>
              <tr>
                <td>4</td>
                <td>LinkedIn</td>
                <td>Danial</td>
                <td><span className="label label-info">in progress</span></td>
                <td><span className="badge badge-info">65%</span></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Tumblr</td>
                <td>David</td>
                <td><span className="label label-warning">in progress</span></td>
                <td><span className="badge badge-danger">95%</span></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Tesla</td>
                <td>Mickey</td>
                <td><span className="label label-info">in progress</span></td>
                <td><span className="badge badge-success">95%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="col-md-6 chit-chat-layer1-left">
      <div className="work-progres">
        <div className="chit-chat-heading">
          Recent Followers
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Project</th>
                <th>Manager</th>
                <th>Status</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Face book</td>
                <td>Malorum</td>
                <td><span className="label label-danger">in progress</span></td>
                <td><span className="badge badge-info">50%</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Twitter</td>
                <td>Evan</td>
                <td><span className="label label-success">completed</span></td>
                <td><span className="badge badge-success">100%</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Google</td>
                <td>John</td>
                <td><span className="label label-warning">in progress</span></td>
                <td><span className="badge badge-warning">75%</span></td>
              </tr>
              <tr>
                <td>4</td>
                <td>LinkedIn</td>
                <td>Danial</td>
                <td><span className="label label-info">in progress</span></td>
                <td><span className="badge badge-info">65%</span></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Tumblr</td>
                <td>David</td>
                <td><span className="label label-warning">in progress</span></td>
                <td><span className="badge badge-danger">95%</span></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Tesla</td>
                <td>Mickey</td>
                <td><span className="label label-info">in progress</span></td>
                <td><span className="badge badge-success">95%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="clearfix" />
  </div>
</div>

    )
}

Dashboard.propTypes = {

}

export default Dashboard
