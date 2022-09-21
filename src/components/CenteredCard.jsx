import "./style.css";


const CenteredCard = ({children}) =>{
    return(
        <div className="centeredCard">
            <span>
                {children}
            </span>
        </div>
    )
}

export default CenteredCard