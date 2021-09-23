import React from 'react';
import { connect } from 'react-redux';
import Products from './../Components/Products'
import Product from '../Components/Product-item';

import { addtocart_action, changemessage_action } from './../actions/index';

// import PropTypes from 'prop-types' // import thằng nay để check kiểu, trong trường hợp nếu kiểu khác kiểu mình check thì nó sẽ hiện lỗi màn console
class ProductContainer extends React.Component {

  showProducts = (dulieunhan) => {
    return dulieunhan.map((ele,index) => {
      return <Product key = {index} arrproduct = {ele}  onAddtocart = {this.props.onAddtocart1} onChangeMessage1 = {this.props.onChangeMessage12}/>
    })
  }

  render() {
    var listproduct = this.props.listproduct1
    return (
        <Products>
          {this.showProducts(listproduct)}  {/* ben product con se nhan duoc noi dung ben trong 2 tag product nay la children */}
        </Products>
        
    );
  }

}


  
var mapStateToProps = (state) => {
  return {
    listproduct1: state.product
  }
}
var mapDispatchToProps = (dispatch,props) => {
  return {
    onAddtocart1: (itemsproduct) => {
      alert(1)
      console.log(itemsproduct)
      return dispatch(addtocart_action(itemsproduct,1))
    },
    onChangeMessage12: (message) => {
      return dispatch(changemessage_action(message))
    }

  }

  
}
export default connect (mapStateToProps,mapDispatchToProps) (ProductContainer);
