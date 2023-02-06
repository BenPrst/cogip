import "../styles/Manage.scss"
import manageImg from "../assets/manageImg.svg"

function Manage(){
    return(
        <div className="manage">
        <p className="manageP">MANAGE YOUR
        CUSTOMERS AND
        INVOICES EASLY</p>
        <img className="manageImg" src={manageImg} alt="manage"/>
        </div>
    )
}

export default Manage