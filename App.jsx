import React from 'react';
import Header from './Header/Header.jsx';
import Body from './Body/Body.jsx';
import Footer from './Footer/Footer.jsx';

class App extends React.Component {
   render() {
      return (
        <div>
         <Header></Header>
         <Body></Body>
         <Footer></Footer>
        </div>
      );
   }
}

export default App;
