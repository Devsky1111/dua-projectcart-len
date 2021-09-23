import React from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import ProductContainer from './containers/product_container'
import Testchildren from './Components/testchildren';
import CartContainer from './containers/Cart-container'
import MessageContainer from './containers/Message-container';
class App extends React.Component {
  render() {
    return (
      <div>

        <Header/>
        <main id="mainContainer">
          <div className="container">

          <ProductContainer />
          <MessageContainer/>
          <CartContainer/>
          <Testchildren />
          </div>
        </main>
        <Footer />
       
      </div>
    );
  }

}

export default App;
