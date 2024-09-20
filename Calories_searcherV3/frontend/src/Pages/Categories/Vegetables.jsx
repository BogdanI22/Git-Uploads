import Elements from './APIs/Elements'
import './Pages.css'

const url = "http://localhost:8080/categories?category=vegetables";

export default function Vegetables(){
    return(
    <div>
        <h1>These are all vegetables!</h1>
        <Elements apiEndpoint={url}/>
    </div>
    )

}