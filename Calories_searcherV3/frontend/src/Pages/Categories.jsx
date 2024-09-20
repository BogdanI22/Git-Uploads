import "./Categories.css"
import meatImg from '../assets/meat.png'
import vegetablesImg from "../assets/vegetables.png"
import drinksImg from "../assets/drinks.png"
import bakeryImg from "../assets/bakery.png"
import daiariesImg from "../assets/dairies.png"
import sweetsImg from "../assets/sweets.png"




function Categories(){

    //const categoryList = []

    return(
        <div>
            <ul className="categories-ul">
                <li className="li">
                    <b>Vegetables</b>
                    <a href='/categories/vegetables'><img src={vegetablesImg} alt="Vegetables img" className="imgs"></img></a>
                </li>
                <li className="li">
                    <b>Meat</b>
                    <a href='/categories/meat'><img src={meatImg} alt="Vegetables img" className="imgs"></img></a>
                </li>
                <li className="li">
                    <b>Drinks</b>
                    <a href='/categories/drinks'><img src={drinksImg} alt="Vegetables img" className="imgs"></img></a>
                </li>
                <li className="li">
                    <b>Bakery</b>
                    <a href='/categories/bakery'><img src={bakeryImg} alt="Vegetables img" className="imgs"></img></a>
                </li>
                <li className="li">
                    <b>Dairies</b>
                    <a href='/categories/dairies'><img src={daiariesImg} alt="Vegetables img" className="imgs"></img></a>
                </li>
                <li className="li">
                    <b>Sweets</b>
                    <a href='/categories/sweets'><img src={sweetsImg} alt="Vegetables img" className="imgs"></img></a>
                </li>
            </ul>
        </div>
      
    )


}
export default Categories;