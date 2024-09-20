import Elements from './APIs/Elements'
import './Pages.css'

const url = "http://localhost:8080/categories?category=bakery";

export default function Bakery(){
    return(<div>
        <h1>These are all bakery!</h1>
        <Elements apiEndpoint={url}/>
    </div>
    );
}