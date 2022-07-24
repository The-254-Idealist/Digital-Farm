import styled from "styled-components";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import Products from "../components/Products"

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <> 
    <Container>
      <Title>{cat}</Title>
         <Products cat={cat} filters={filters} sort={sort} />
         </Container>
    </>
   
  );
};

export default ProductList;
