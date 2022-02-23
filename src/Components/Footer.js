import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import '../App.css'
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;

  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo"><h1>CLOTHS.</h1></div>
          <p className="footer-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="footer-social">
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </div>
        </div>
        <div className="footer-center">
          <h3 style={{marginBottom: '30px'}}>Useful Links</h3>
          <ul className="footer-list">
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </ul>
        </div>
        <div className="footer-right">
        <h3 style={{marginBottom: '30px'}}>Contact</h3>
          <div className="footer-contact">
            <Room style={{marginRight:"10px"}}/> 000 ABC def , Tampere 0000
          </div>
          <div className="footer-contact">
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
            </div>
          <div className="footer-contact">
            <MailOutline style={{marginRight:"10px"}} /> contact@cloths.come
            </div>
          {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
        </div>
      </div>
    );
  };
  
  export default Footer;