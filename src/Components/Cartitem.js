import React from 'react';

class Cartitems extends React.Component {
  // hàm tính tổng tiền
  subTotal = (soluong, giatien) => {
    return soluong * giatien
  }
  changeQuatity1 =(index,para) => {
    this.props.changeQuatity2(index, para) //changeQuatity2 ben Cart Container
  }
  //Remover items when onclick
  removeItems = (phantucanxoa) => {
    this.props.removeItems12(phantucanxoa)
  }

  render() {
    var itemscart = this.props.itemscart

    return (
      <tr>
        <th scope="row">
          <img src={itemscart.product.image}
            alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{itemscart.product.name}</strong>
          </h5>
        </td>
        <td>{itemscart.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{itemscart.quatity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary
                              btn-rounded waves-effect waves-light" onClick = {() => this.changeQuatity1(this.props.index,-1)}>
              <a href="#/">—</a>
            </label>
            <label className="btn btn-sm btn-primary
                              btn-rounded waves-effect waves-light" onClick = {() => this.changeQuatity1(this.props.index,1)}>
              <a href="#/">+</a>
            </label>
          </div>
        </td>
        <td>{this.subTotal(itemscart.quatity, itemscart.product.price)}$</td>
        <td>
          <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
            title="" data-original-title="Remove item" onClick = { () => this.removeItems(itemscart)}>
            X
          </button>
        </td>
      </tr>




    );
  }

}

export default Cartitems;
