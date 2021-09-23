import React from 'react';
import Testcon from './testcon';
class Testchildren extends React.Component {
    render() {
        var arr = [1,2,3,4,5]
        var stringtest = "I want to learn React JS"
        return (
            <div>
                <Testcon>
                    {arr}
                    {stringtest}
                </Testcon>
            </div>
        )
    }
}
export default Testchildren