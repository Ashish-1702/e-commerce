import "./Header.css";
import { Link } from "react-router-dom";

const Title =()=>{
    return(
        <div className="image">
            <img  className="imag" src="https://tse3.mm.bing.net/th?id=OIP.kRsL4qAQMjNBfqugPO96xwHaHa&pid=Api&P=0&h=180" alt="not found"/>
        </div>
    );
}

const Header = ()=>{
    return(
        <div className="header">
            <Title/>
             <input className="input" type="text" placeholder="Search your clothes..."/>
            <ul >
                <Link to="/" className="link">
                   <li>Home</li>
                </Link>
                <Link to="/About" className="link">
                  <li>About</li>
                </Link>

                <Link to="/Contact" className="link">
                  <li>Contact</li>
                </Link>
                <Link to="/Cart" className="link">
                  <li>Cart</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header;