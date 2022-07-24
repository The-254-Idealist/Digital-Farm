import { Link } from "react-router-dom";


const Product = ({item}) => {
  return (
    <div>
      <Link to={`/product/${item._id}`}>
        <div className="product-card">
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
      </Link>
    </div>
  )
}

export default Product;