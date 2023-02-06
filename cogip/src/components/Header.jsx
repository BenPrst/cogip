import '../styles/header.scss'
import menuBurger from '../assets/BurgerMenu.png'

function Header(){
    return <div className='header'>
        <h1>COGIP</h1>
    <img src={menuBurger} width='30' height='30' className='menuBurger'/>
</div>}

export default Header