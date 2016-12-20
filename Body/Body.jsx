import React from 'react';

class Body extends React.Component {
   render() {
      return (
       <div className="container">
          <div className="slider" data-slick="">
            <div><img src="image/WEB-Cover_3.jpg" alt="slider alt" /></div>
            <div><img src="image/WEB-Cover_3.jpg" alt="slider alt" /></div>
            <div><img src="image/WEB-Cover_3.jpg" alt="slider alt" /></div>
            <div><img src="image/WEB-Cover_3.jpg" alt="slider alt" /></div>
            <div><img src="image/WEB-Cover_3.jpg" alt="slider alt" /></div>
          </div>
        </div>
      );
   }
   componentDidMount() {
      $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
      });
    }
}

export default Body;
