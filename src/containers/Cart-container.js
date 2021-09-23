import React from "react";
import { connect } from "react-redux";
import { changequatity_action } from "../actions";
import { removeitems_action } from "../actions";
import Cart1 from "../Components/Cart";
import Result from "../Components/Result";
import Cartitems from "./../Components/Cartitem";
import * as message from './../constant/message'
class CartContainer extends React.Component {
    showCart(danhsachCartitem) {
        var danhsach = message.MSG_CART_EMPTY

        // neu mang trống truyen vao chuoi message khong co san pham
        if (danhsachCartitem.length > 0) {
            danhsach = danhsachCartitem.map((ele, index) => {

                return <Cartitems key={index} itemscart={ele} changeQuatity2={this.props.sendChangeQuatity3} index={index} removeItems12={this.props.removeitems1} />
            })
            console.log(danhsach)
            return danhsach
        }
        return danhsach
    }
    showResult(danhsachresult) {
        if (danhsachresult.length > 0) {
            return <Result cartresult={danhsachresult} />
        }
    }
    render() {
        var listCart = this.props.listCart

        return (
            <Cart1>
                {/* day la list cart item */}
                {this.showCart(listCart)}
                {/* day la thang result */}
                {this.showResult(listCart)}
            </Cart1>
        )
    }
}
var mapStateToProps = (state) => {
    return {
        listCart: state.addToCart
    }
}
var mapDispatchToprops = (dispatch, props) => {
    return {
        sendChangeQuatity3: (indexitems, para) => {
            return dispatch(changequatity_action(indexitems, para))
        },
        removeitems1: (itemscart) => {
            return dispatch(removeitems_action (itemscart))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(CartContainer)