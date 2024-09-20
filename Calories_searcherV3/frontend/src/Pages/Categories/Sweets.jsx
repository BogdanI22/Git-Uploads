import Elements from './APIs/Elements'
import './Pages.css'

const url = "http://localhost:8080/categories?category=sweets";

export default function Sweets(){
    return(<div>
        <h1>These are all sweets!</h1>
        <Elements apiEndpoint={url}/>
    </div>
    );

}