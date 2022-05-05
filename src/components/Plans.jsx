import '../styles/plans.scss'
import OkIcon from '../assets/images/ok.svg' 
import BrazilIcon from '../assets/images/brazil.png'
import MoneyIcon from '../assets/images/money'

import YouTube from '../assets/images/down/youtube.svg'
import LinkedIn from '../assets/images/down/linkedin.svg'
import WhatsApp from '../assets/images/down/whatsapp.svg'
import Instagram from '../assets/images/down/instagram.svg'
import Facebook from '../assets/images/down/facebook.svg'
import Map from '../assets/images/down/map'
import Mail from '../assets/images/down/mail'
import Phone from '../assets/images/down/phone.png'


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
        <footer>
        <div className="questions">
          <h1>Alguma Dúvida?</h1>
          <span> Mande agora mesmo para sanar qualquer questão</span>
          <input maxlength="300" placeholder="Escreva aqui (máx: 300 characteres)"/>
          <button>Enviar</button>
        </div>
        </footer>
      </div>
    </section>
    <div>
    <section id="plans">
      <div class="content">
      
        <header>
        
          <hr className="detail-plans"/>
          <p>Nossos Principais Orçamentos</p>
          
        </header>

        {/*AREA DE CONTATOS (ICONES ETC)*/}
      <div className="contacts-div">
        <div className="white">
          <div className="Map">
            <img className="Map" src={Map}/>
          </div>
          <p>Quadra 108 Sul Alameda 8, 330 Bairro: Plano Diretor Sul</p>
        </div>
        
        <div className="grey">
          <div className="Facebook">
            <img className="Facebook" src={Facebook}/>
          </div>
          <a>facebook.com/XPTO</a>
        </div>
        <div className="white">
          <div className="YouTube">
            <img className="YouTube" src={YouTube}/>
          </div>
          <a>youtube.com/XPTO</a>
        </div>
        <div className="grey">
          <div className="LinkedIn">
            <img className="LinkedIn" src={LinkedIn}/>
          </div>
          <a>linkedin.com/XPTO</a>
        </div>
        <div className="white">
          <div className="Instagram">
            <img className="insta-image" src={Instagram}/>
          </div>
          <a>instagram.com/XPTO</a>
        </div>
        <div className="grey">
          <div className="WhatsApp">
            <img className="WhatsApp" src={WhatsApp}/>
          </div>
          <a>whatsapp.com/XPTO</a>
        </div>
        <div className="white">
          <div className="Phone">
            <img className="Phone" src={Phone}/>
          </div>
          <p>+55 (12) 9386-7383</p>
        </div>
        <div className="grey">
          <div className="Mail">
            <img className="Mail" src={Mail}/>
          </div>
            <a>contato@XPTO.com</a>
        </div>
        
          
      </div>
    </div>

    <footer></footer>
  </section>

  </div>
</div>
  
  
  )
}