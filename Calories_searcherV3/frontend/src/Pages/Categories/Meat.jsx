import Elements from './APIs/Elements'
import './Pages.css'

const url = "http://localhost:8080/categories?category=meat"

export default function Meat(){
 
    return(
    <div>
        <h1>These are all meat!</h1>
        <Elements apiEndpoint={url}/>
    </div>
    )

}