import React from 'react';

class Header extends React.Component {
   render() {
      return (
         <header>
            <div className="container info">
                <div className="row">
                    <div className="col-md-8 hotline">
                        <span>"HOTLINE GIAO HÀNG TOÀN QUỐC: <a href="tel:0972.999.772">0972.999.772</a> (9h00 - 17h00, thứ 2 đến thứ 6)"</span>
                    </div>
                    <div className="col-md-4">
                        <div className="txtsearch">
                            <form>
                                <input type="text" placeholder="Tìm kiếm" className="searchtxt" />
                                <input type="submit" className="searchbtn" value="" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner">
              <img src="image/Logo-WEB1.jpg" alt="Bstore" />
            </div>
            <div className="menu">
              <ul>
                <li><a href="#">Trang Chủ</a></li>
                <li>/</li>
                <li><a href="#">LOOKBOOK</a>
                  <ul>
                    <li><a href="#"> menu 1</a></li>
                    <li><a href="#"> menu 2</a></li>
                    <li><a href="#"> menu 3</a></li>
                    <li><a href="#"> menu 4</a></li>
                  </ul>
                </li>
                <li>/</li>
                <li><a href="#">BỘ SƯU TẬP</a>
                  <ul>
                    <li><a href="#"> menu 577777777777777777</a></li>
                    <li><a href="#"> menu 6</a></li>
                    <li><a href="#"> menu 7</a></li>
                    <li><a href="#"> menu 8</a></li>
                  </ul>
                </li>
                <li>/</li>
                <li><a href="#">TIN TỨC</a></li>
                <li>/</li>
                <li><a href="#">HỆ THỐNG SHOP</a></li>
              </ul>
            </div>
        </header>
      );
   }
}

export default Header;
