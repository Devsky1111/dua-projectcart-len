import React from 'react';
class Result extends React.Component {
  sumMoney(danhsach) {
    var result = null
    danhsach.forEach(element => {
      console.log(element)
      result += element.product.price*element.quatity
    });
    return result
  }
  render() {
  var listCartresult = this.props.cartresult
    console.log(listCartresult)
    return (
      <tr>
      <td colSpan="3"></td>
      <td>
        <h4>
          <strong>Tổng Tiền</strong>
        </h4>
      </td>
      <td>
        <h4>
          <strong>{this.sumMoney(listCartresult)}$</strong>
        </h4>
      </td>
      <td colSpan="3">
        <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
          <i className="fa fa-angle-right right"></i>
        </button>
      </td>
    </tr>

    );
  }

}

export default Result;
