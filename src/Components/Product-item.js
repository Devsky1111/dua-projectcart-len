import React from 'react';
import * as message_constant from './../constant/message'
class Product extends React.Component {

  showstar(rating) {
    var star = [];
    for( var i = 1; i <=rating ; i++) {
      star.push(<li key = {i}>
        <i className="fa fa-star"></i>
      </li>)
    }
    for (let j = 1; j<=5-rating; j++) {
      star.push(<li key = {6-j}>
        <i className="fa fa-star-o"></i>
      </li>)
    }
    console.log(star)
    return star
}
  // cai nay se duoc truyen vao cart container
  addCart = (itemsproduct) => {
    this.props.onAddtocart(itemsproduct)
  
  }
  onChangeMessage = (message) => {
    this.props.onChangeMessage1(message) // sang product-container
  }
  render() {
    var productitems = this.props.arrproduct;
    
    
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={productitems.image}
              className="img-fluid" alt={productitems.name} />
            <a href="#/">
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="#/">{productitems.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              {this.showstar(productitems.rating)}

              {/* <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li> */}
            </ul>
            <p className="card-text">
             {productitems.description}
            </p>
            <div className="card-footer">
              <span className="left">{productitems.price}$</span>
              <span className="right">
                <a href="#/"onClick = { () => {this.addCart(productitems); this.onChangeMessage(message_constant.MSG_ADD_TO_CART_SUCCCESS)}} className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                  <i className="fa fa-shopping-cart" ></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

    );
  }

}


export default Product;
