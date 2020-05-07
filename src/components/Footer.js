import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <FooterHome>
        <div className="footer">
          <div className="inner-footer">
            <div className="inner-footer1">
              <h3>Useful Links</h3>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Return Policy</p>
              <p>Discount Coupons</p>
            </div>
            <div className="inner-footer1">
              <h3>Company</h3>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Career</p>
              <p>Affiliate</p>
            </div>
            <div className="inner-footer1">
              <h3>Follow Us On</h3>
              <p>
                <i className="fab fa-facebook"></i> Facebook
              </p>
              <p>
                <i className="fab fa-youtube"></i> YouTube
              </p>
              <p>
                <i className="fab fa-linkedin"></i> Linkedin
              </p>
              <p>
                <i className="fab fa-twitter-square"></i> Twitter
              </p>
            </div>
          </div>
        </div>
        <div className="copyright">
          @2020 <i class="fa fa-heart-o"> </i>All right reserved
        </div>
      </FooterHome>
    );
  }
}

export default Footer;

const FooterHome = styled.section`
  .inner-footer {
  
    width:1100px;
    display: block;
    margin:60px 30px 0px 150px;
    height:100%;

  
  }
 
  .footer{
            
    width:100%;
height:300px;
      display:block;
      overflow:hidden;
      box-sizing:border-box;
     margin:70px 0px 0px 0px;
      background:rgba(0,0,0,1);
     color:rgba(255,255,255, 0.6);
     
  }
  .inner-footer1 h1{
      width:100%;
      margin:bottom:20px;
      display:block;
     
     
     
  }
  .inner-footer1 h1 p{
    width:100%;
    margin:bottom:20px;
    display:block;
}
.inner-footer .inner-footer1{
  
    float:left;
    margin-right:10px;
    padding-left:150px;
    
    
}
.copyright{
    text-float:center
    background:white
}
`;
