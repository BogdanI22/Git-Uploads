import Elements from './APIs/Elements'
import './Pages.css'

const url = "http://localhost:8080/categories?category=dairies";

export default function Dairies(){
    return(<div>
        <h1>These are all dairies!</h1>
        <Elements apiEndpoint={url}/>
    </div>
    );
}