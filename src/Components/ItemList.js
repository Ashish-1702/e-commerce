import "./ItemList.css";

const ItemList = ({title,price,image,rating}) =>{
    return(
        <div className="item">
            <img className="image" src={image} alt="not found"/>
             <h1 className="title">{title}</h1>
             <h2 className="price">Rs {price}</h2>
             <h3 className="rating">{rating.rate} <img src="https://w7.pngwing.com/pngs/114/147/png-transparent-yellow-star-illustration-yellow-star-color-star-blue-angle-white.png" alt="not found" width={16} height={16}/></h3>
        </div>
    )
}
export default ItemList;