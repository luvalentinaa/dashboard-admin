import './navbar.css'
import avatar from '../../assets/avatar.png'

const Navbar = ({ sidebarOpen , openSidebar}) => {
  return (
    <nav className="navbar">
      <div className="navbar--icon">
         <ion-icon 
         name="menu" 
         arial-hidden="true"
         onClick={() => openSidebar()}>
         </ion-icon>
      </div>
      <div className="navbar--left">
        <a href="#" className="active--link">Produtos</a>
        <a href="#" className="active--link">Pessoas</a>
        <a href="#" className="active--link">Admin</a>

      </div>
      <div className="navbar--right">
        <a href="#">
        <ion-icon name="search"></ion-icon>       
        </a>
        <a href="#">
        <ion-icon name="timer"></ion-icon>      
        </a>
        <a href="#">
        <img width="30" src={avatar} alt="avatar"/>       
        </a>
      </div>

    </nav>
  )

}
export default Navbar