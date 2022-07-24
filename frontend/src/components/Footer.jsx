import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import {  Navbar  } from 'react-bootstrap'

const Container = styled.div`
  display: flex;
 `;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

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



const Title = styled.h3`
  margin-bottom: 30px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Navbar bg="success"  >
<Container bg="success">
      <Left>
        <Logo>AgriTech.</Logo>
        <Desc>
          The website is here to help farmers and individual interested in farming.
      
        </Desc>
        <SocialContainer>
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
        </SocialContainer>
      </Left>
   
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> wendani , Kiambu county
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 0703681712/0708829700
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> mega@eliteprogrammers.com
        </ContactItem>
          </Right>
    </Container>
    </Navbar>
    
  );
};

export default Footer;
