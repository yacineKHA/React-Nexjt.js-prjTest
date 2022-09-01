import Navbar from "../Navbar/Navbar";


export default function Container (props){

    //Avec props.children je recup le contenu de _app.js pour que ce soit affiché

    return(
        <>
            <Navbar/>
            {props.children}
        </>
    )
}