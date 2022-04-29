import '../styles/plans.scss'
import OkIcon from '../assets/images/ok.svg' 
import BrazilIcon from '../assets/images/brazil.png'

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
        
        <div className="plans">
            <div className="title-header">
              <p className="p-header">INTRO PLAN</p>
            </div>
            <div className="content-plan"></div>
          <footer>

          </footer>
          
          
        </div>

        <div className="plans">
            <div className="title-header">
              <p className="p-header">INTRO PLAN</p>
            </div>
          <footer>

          </footer>
          
        </div>
          
        <div className="plans">
            <div className="title-header">
              <p className="p-header">INTRO PLAN</p>
            </div>
          <footer>

          </footer>
          
        </div>
        
        <div className="plans">
            <div className="title-header">
              <p className="p-header">INTRO PLAN</p>
            </div>
            
          <footer>

          </footer>
          
        </div>

      </div>
    </section>
  </div>
  )
}