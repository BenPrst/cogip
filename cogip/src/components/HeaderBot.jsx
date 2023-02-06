import '../styles/HeaderBot.scss'
import HeaderBotImg from '../assets/HeaderBotImg.svg'


function HeaderBot(){
    return(
        <div className='HeaderBot'>
    <img className='HeaderBotImg' src={HeaderBotImg} alt="" />
    </div>
    )
}

export default HeaderBot