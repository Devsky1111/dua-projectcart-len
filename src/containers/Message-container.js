import React from "react";
import Message from './../Components/message'
import { connect } from 'react-redux';

class MessageContainer extends React.Component {

    render() {
    var message = this.props.message1

        return (
            <Message message2 = {message}>
                
            </Message>
        )
    }
}
var mapStateToProps = (state) => {
    return {
        message1: state.changemessage
    }
}
export default connect (mapStateToProps,null) (MessageContainer)