import Elements from './APIs/Elements'
import './Pages.css'

const url = "http://localhost:8080/categories?category=drinks";

export default function Drinks(){
    return(<div>
        <h1>These are all drinks!</h1>
        <Elements apiEndpoint={url}/>
    </div>
    );
}