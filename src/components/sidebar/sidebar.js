import './sidebar.css'
import avatar from '../../assets/avatar.png'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? 'sidebar--responsive' : ''} id="sidebar">
      <div className="sidebar--title">
        <div className="sidebar--img">
          <img src={avatar} alt="logo" />
          <h1>Admin</h1>
        </div>
        <ion-icon
          name="close-circle-outline"
          className="open"
          id="sidebarIcon"
          area-hidden="true"
          onClick={() => closeSidebar()}
        ></ion-icon>
      </div>
      <div className="sidebar--menu">
        <div className="sidebar--link active--menu--link">
        <ion-icon name="home"></ion-icon>
          <a href="#">HOME</a>
        </div>
        <h2>Admin</h2>   
        <div className="sidebar--link">
          <ion-icon name="speedometer"></ion-icon>
          <a href="#">Área administrativa</a>
        </div>
        <div className="sidebar--link">
        <ion-icon name="business"></ion-icon>
          <a href="#">Lojas</a>
        </div>
        <div className="sidebar--link">
        <ion-icon name="images"></ion-icon>
          <a href="#">Produtos</a>
        </div>
        <div className="sidebar--link">
        <ion-icon name="menu"></ion-icon>
          <a href="#">Categorias</a>
        </div>
        <div className="sidebar--link">
        <ion-icon name="albums"></ion-icon>
          <a href="#">Pedidos</a>
          </div>
          <h2>Pessoas</h2>
          <div className="sidebar--link">
          <ion-icon name="people"></ion-icon>
          <a href="#">Administradores</a>
        </div>
        <div className="sidebar--link">
        <ion-icon name="contacts"></ion-icon>
          <a href="#">Usuários</a>
        </div> 
        <div className="sidebar--link">
        <ion-icon name="cash"></ion-icon>
          <a href="#">Pagamentos de custos</a>
        </div>
         <div className="sidebar--link">
         <ion-icon name="options"></ion-icon>
          <a href="#">A plataforma</a>
        </div>
        <div className="sidebar--link">
        <ion-icon name="eye-off"></ion-icon>
          <a href="#">Política de privacidade</a>
        </div>
        <div className="sidebar--logout">
        <ion-icon name="log-out"></ion-icon>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
