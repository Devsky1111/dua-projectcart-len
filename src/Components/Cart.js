import React from 'react';

class Cart1 extends React.Component {
  render() {
    // dùng điều kiện ở đây để không báo lỗi textnode trong tbody
    var children = this.props.children
   if(typeof children === "string") {
     children = <tr><td>{children}</td></tr>
   }
 
    console.log(children)
    return (
      <div>
        
        <section className="section">
          <div className="table-responsive">
            <table className="table product-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Sản Phẩm</th>
                  <th>Giá</th>
                  <th>Số Lượng</th>
                  <th>Tổng Cộng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {children}
           
              </tbody>
            </table>
          </div>
        </section>



      </div>
    );
  }

}

export default Cart1;
