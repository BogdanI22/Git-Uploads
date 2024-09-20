import ElementSearchedAPI from "../Components/NavBar/ElementSearchedAPI"

export default function SearchedItem({param}){

    return(
    <div>
        <h1>This is the searched item!</h1>
        <p>this is the {param}</p>
    </div>
    )
}