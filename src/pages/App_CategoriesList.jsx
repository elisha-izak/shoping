import { Link} from "react-router-dom"

function CategoriesList() {
  return (
    <div className="CategoriesList">
      <h3>CategoriesList</h3>
      <ul>
         <Link to= '/categories/jewelery'><li>Jewelry</li></Link> 
        <Link to= '/categories/electronics'><li>Electronics</li></Link>
        <Link to= "/categories/men's clothing"><li>Men's clothing</li></Link>
        <Link to= "/categories/women's clothing"><li>Women's clothing</li></Link>
      </ul>
    </div>
  )
}

export default CategoriesList