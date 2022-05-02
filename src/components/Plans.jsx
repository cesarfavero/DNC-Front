import '../styles/plans.scss'
import OkIcon from '../assets/images/ok.svg' 
import BrazilIcon from '../assets/images/brazil.png'
import MoneyIcon from '../assets/images/money'

export function Plans(){
  return(
  <div>
    <section id="plans">
      <div class="content">
      
        <header>
        <div className="country">
          <div>
            <select className="select-country">
              <option className="options" value="">
                <p>(R$) Brazilian Real</p>
              </option>
              <option className="options" value="">Brazilian Real</option>
            </select>
          </div>
        </div>
          <hr class="detail-plans"/>
          <p>Nossos Principais Orçamentos</p>
          
        </header>
        
        <div className="first-plans">
        
            <div className="title-header">
              <p className="p-header">INTRO PLAN</p>
            </div>
            <div className="first-content-plan">
              <img className="ok-icon" src={OkIcon}/>
              
            </div>
          <footer>
          <div class="footer">
            <img className="money" src={MoneyIcon}/>
            <h1>R$ 399,90</h1>
            <span className="mensal">Mensais</span>
          </div>
          </footer>
          
          
        </div>

        <div className="plans">
            <div className="title-header">
              <p className="p-header">INTRO PLAN</p>
            </div>
            <div className="first-content-plan">
              <img className="ok-icon" src={OkIcon}/>
            </div>
            <div className="content-plan">
              <img className="ok-icon" src={OkIcon}/>
            </div>
            <div className="content-plan">
              <img className="ok-icon" src={OkIcon}/>
            </div>
          <footer>
          <div class="footer-2">
            <img className="money" src={MoneyIcon}/>
            <h1>R$ 399,90</h1>
            <span className="mensal">Mensais</span>
          </div>
          </footer>
          
          
        </div>
          
        <div className="plans">
            <div className="title-header">
              <p className="p-header">INTRO PLAN</p>
            </div>
            <div className="first-content-plan">
              <img className="ok-icon" src={OkIcon}/>
            </div>
            <div className="content-plan">
              <img className="ok-icon" src={OkIcon}/>
            </div>
            <div className="content-plan">
              <img className="ok-icon" src={OkIcon}/>
            </div>
            <div className="content-plan">
              <img className="ok-icon" src={OkIcon}/>
            </div>
          <footer>
          <div class="footer-3">
            <img className="money" src={MoneyIcon}/>
            <h1>R$ 399,90</h1>
            <span className="mensal">Mensais</span>
          </div>
          </footer>
          
          
        </div>
        
        <div className="plans">
            <div className="title-header">
              <p className="p-header">INTRO PLAN</p>
            </div>
            <div className="first-content-plan">
              <img className="ok-icon" src={OkIcon}/>
            </div>
            <div className="content-plan">
              <img className="ok-icon" src={OkIcon}/>
            </div>
            <div className="content-plan">
              <img className="ok-icon" src={OkIcon}/>
            </div>
            <div className="content-plan">
              <img className="ok-icon" src={OkIcon}/>
            </div>
            <div className="content-plan">
              <img className="ok-icon" src={OkIcon}/>
            </div>
            <div className="content-plan">
              <img className="ok-icon" src={OkIcon}/>
            </div>
          <footer>
          <div class="footer-4">
            <img className="money" src={MoneyIcon}/>
            <h1>R$ 399,90</h1>
            <span className="mensal">Mensais</span>
          </div>
          </footer>
          
          
        </div>

      </div>
    </section>
  </div>
  )
}