import React from 'react';

class Footer extends React.Component {
   render() {
      return (
         <footer>
          <div className="intro">
            Theo dõi Thông Tin
          </div>
          <div className="emailfrom">
            <form>
              <input type="text" placeholder="Nhập Email" className="email-input" />
              <input type="submit" name="" value="Gửi" className="email-submit" />
            </form>
          </div>
          <div className="submenu">
            <ul>
              <li><a href="#">QUY ĐỊNH & THANH TOÁN</a></li>
              <li><a href="#">HỢP TÁC PHÂN PHỐI</a></li>
              <li><a href="#">TUYỂN DỤNG</a></li>
              <li><a href="#">LIÊN HỆ</a></li>
            </ul>
          </div>
         </footer>
      );
   }
}

export default Footer;
