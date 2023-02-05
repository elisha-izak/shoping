import { Link} from "react-router-dom"



function Header() {
  return (
    <div className="Header">
      <span>בס"ד</span>
      <Link to="/categories"><h1>Shop</h1></Link>
      </div>
  )
}

export default Header