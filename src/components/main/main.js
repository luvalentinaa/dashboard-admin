import hello from '../../assets/hello.png'
//import Charts from '../charts/chart'
import './main.css'

const Main = () => {
  return(
    <main>
    <div className="main--container">
      <div className="main--title">
         <img src={hello} alt="Hello" />
         <div className="main--greeting">
           <h1>Olá Admin</h1>
           <p>Bem vindo ao seu painel</p>
           </div>
      </div>
      <div className="main--cards">
        <div className="cards">
          <a href="#" className="text-lightblue">
        <ion-icon  name="folder"></ion-icon>
        </a>
        <div className="cards--inner">
          <p className="text-primary-p">Número de pedidos</p>
          <span className="font-bold text-title">57800</span>
        </div>
        </div>
        <div className="cards">
          <a href="#" className="text-red">
        <ion-icon  name="cash"></ion-icon>
        </a>
        <div className="cards--inner">
          <p className="text-primary-p">Pagamentos</p>
          <span className="font-bold text-title">R$2,577</span>
        </div>
        </div>
        <div className="cards">
        <a href="#" className="text-yellow">
        <ion-icon  name="document"></ion-icon>
        </a>
        <div className="cards--inner">
          <p className="text-primary-p">Número de produtos</p>
          <span className="font-bold text-title">670</span>
        </div>
        </div>
        <div className="cards">
        <a href="#" className="text-green">
        <ion-icon name="filing"></ion-icon>
        </a>
        <div className="cards--inner">
          <p className="text-primary-p">Categorias</p>
          <span className="font-bold text-title">77</span>
        </div>
        </div>
        </div>
           <div className="charts">
           <div className="charts--left">
              <div className="charts--left--title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>Blumenau , SC Brasil</p>
                </div>
                <ion-icon className="text-green" name="logo-usd"></ion-icon>
              </div>
  
             </div>

           <div className="charts">
           <div className="charts--right">
             
              <div className="charts--right--title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>Blumenau , SC Brasil</p>
                </div>
                <ion-icon className="text-green" name="images"></ion-icon>
              </div>

              <div className="charts--right--cards">
              <div className="card1">
                <h1>Lucro</h1>
                <p>R$2,500</p>
              </div>

              <div className="card2">
                <h1>Pagamentos</h1>
                <p>R$250,00</p>
              </div>

              <div className="card3">
                <h1>Custos hospedagem</h1>
                <pedidos>R$1.050</pedidos>
              </div>

              <div className="card4">
                <h1>Banco de dados</h1>
                <p>R$150,00</p>
              </div>

           </div>  
           </div>
      </div>
    </div>
   </div>
  </main>
    )
}
export default Main