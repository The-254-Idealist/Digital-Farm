import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 3px;
height: 60vh;
width:30%;
position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:green;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Get {item.cat}</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
