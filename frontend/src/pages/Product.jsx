
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart } from "../features/cartRedux";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import  axios   from "axios"

//product component function 
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
 const navigate = useNavigate
 //Gets product from the database a 
 useEffect(() => {
  const getProduct = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products/find/" + id);
      setProduct(res.data);
    } catch {}
  };
  getProduct();
}, [id]);

 //Function adds product to cart 
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
   navigate ('/cart')
  }
        

  return (
    <>
     
      <div   key={product._id}>
        <div className="product-container" >
          <img 
            src={product.img}
            alt={product.title}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{product.title}</p>
          <p className="product-price">Kes{product.price}</p>
         <button className="category-button"  onClick={handleAddToCart(product )} >add to cart</button>
        </div>
      
    </div>
      
      
    </>
  );
};
     
export default Product;
// onClick={handleAddToCart( product)}




// const Container = styled.div``;

// const Wrapper = styled.div`
//   padding: 50px;
//   display: flex;
// `;

// const ImgContainer = styled.div`
//   flex: 1;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 90vh;
//   object-fit: cover;
//  `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 0px 50px;
// `;

// const Title = styled.h1`
//   font-weight: 200;
// `;

// const Desc = styled.p`
//   margin: 20px 0px;
// `;

// const Price = styled.span`
//   font-weight: 100;
//   font-size: 40px;
// `;

// const AddContainer = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//  `;

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 700;
// `;

// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid teal;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0px 5px;
// `;

// const Button = styled.button`
//   padding: 15px;
//   border: 2px solid teal;
//   background-color: white;
//   cursor: pointer;
//   font-weight: 500;

//   &:hover {
//     background-color: #f8f4f4;
//   }
// `;

// const Product = () => {
//   const location = useLocation();
//   const id = location.pathname.split("/")[2];
//   const [product, setProduct] = useState({});
//   const [quantity, setQuantity] = useState(1);
//   const dispatch = useDispatch();

 

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const res = await axios.get("/api/products/find/" + id);
//         setProduct(res.data);
//       } catch {}
//     };
//     getProduct();
//   }, [id]);

//   const handleQuantity = (type) => {
//     if (type === "dec") {
//       quantity > 1 && setQuantity(quantity - 1);
//     } else {
//       setQuantity(quantity + 1);
//     }
//   };

//   const handleClick = () => {
//     dispatch(
//       addToCart({})
//     );
//   };
//   return (
//     <>
//     <Container>
//         <Wrapper>
//         <ImgContainer>
//           <Image src={product.img} />
//         </ImgContainer>
//         <InfoContainer>
//           <Title>{product.title}</Title>
//           <Desc>{product.desc}</Desc>
//           <Price>$ {product.price}</Price>
//           <AddContainer>
//             <AmountContainer>
//               <Remove onClick={() => handleQuantity("dec")} />
//               <Amount>{quantity}</Amount>
//               <Add onClick={() => handleQuantity("inc")} />
//             </AmountContainer>
//             <Button onClick={handleClick}>ADD TO CART</Button>
//           </AddContainer>
//         </InfoContainer>
//       </Wrapper>
//     </Container>
//     </>
//   );
// };

// export default Product;
