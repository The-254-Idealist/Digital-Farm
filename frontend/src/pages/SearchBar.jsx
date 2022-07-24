import React from 'react'
import { useEffect, useState , } from "react";
import axios from 'axios'
import { Link , useLocation , useNavigate} from 'react-router-dom';


function SearchBar() {

   
    const [products, setProducts] = useState([]);
    const location = useLocation() 
    const navigate = useNavigate 
    


  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get( "http://localhost:5000/api/products/"
          );
          setProducts(res.data);
        } catch (err) {}
      };
      getProducts();
    }, []);
  const searchTerm = location.state.fun
  return (
    <>
          <>
        <div className="templateContainer">
        <div className="template_Container">
        {
            products 
              .filter((item) => {
                if(searchTerm === ""){
                  return  item ;
                }else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return item;
                }
              })
              .map((item) => {
                return(               
                    <Link to={`/product/${item._id}`} >
                   <div  >
                   <div className="product-card" >
                      <img 
                        src={item.img}
                        alt={item.title}
                        width={250}
                        height={250}
                        className="product-image"
                      />
                      <p className="product-name">{item.title}</p>
                      <p className="product-price">Kes{item.price}</p>
                    </div>
                  </div>                 
               </Link>
            
                )
              })
          }

            </div>
      </div>
        </>

    </>
  )
}

export default SearchBar