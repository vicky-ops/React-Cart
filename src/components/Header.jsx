import {Link} from "react-router-dom"
import "./styles.css"

const Header = () => {
    const style = {color:"white"}
    return (
        <header>
            <span className="header-title">React Context API Tutorial</span>
            <ul className="nav">
                <li >
                    <Link  style={style} to="/">Home</Link>
                </li>
                <li >
                    <Link  style={style} to="/cart">Cart</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header