import React from 'react';
class Message extends React.Component {
  render() {
    return (
      <div>
        <h3>
          <span className="badge amber darken-2">{this.props.message2}</span>
        </h3>

      </div>
    );
  }

}

export default Message;
