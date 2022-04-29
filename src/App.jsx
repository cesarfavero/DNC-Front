import WhiteLogo from './assets/images/logo_xpto_branco'
import ColorLogo from './assets/images/logo_xpto_color'
import Ribbon from './assets/images/empresas_ribbon'

import YouTube from './assets/images/youtube.svg'
import LinkedIn from './assets/images/linkedin.svg'
import WhatsApp from './assets/images/whatsapp.svg'
import Instagram from './assets/images/instagram.svg'
import Facebook from './assets/images/facebook.svg'

import Verified from './assets/images/verified.svg'

import './styles/global.scss'
import { Services } from './components/Services'
import { Plans } from './components/Plans'

export function App() {
  return (
  <div>
    <header></header>

    <nav>
      <img src={ColorLogo}/>
      <span>Getting Started</span>
      <ul>
        <li><a href="">Serviços</a></li>
        <li><a href="">Orçamentos</a></li>
        <li><a href="">Contato</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </nav>
    
    <div>
      <aside>
        <h1>A <span>CONSULTORIA</span> que Você Mais Precisa</h1>
        <hr/>
          <div>
            <img src={Verified}/>
            <p>Análise de<br/>processos</p>
          </div>
          <div>
            <img src={Verified}/>
            <p>Dedução e <br/>solução ágil</p>
          </div>
          <div>
            <img src={Verified}/>
            <p>Aplicabilidade<br/>geral</p>
          </div>
        <hr/>

        <ul>
          <li>Atuação em Todo o Vale do Paraíba</li>
          <li>+20 Anos de atendimento Full Time</li>
        </ul>

      <footer>
        <p>Mais de 10 empresas na região<br/> estão com nossa acessoria ativa</p>
        <img src={Ribbon}/>
        <div>
          <p>Para quaiquer dúvidas a repeito do contranto, acesse nossa<br/>página de orçamentos para sanar todas eventuais questões.</p>
        </div>
      </footer>
      </aside>
    </div>

    <article>
      <section>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/SPqgP-xKtvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1>Apresentação da empresa</h1>
      </section>
      <footer>
        <p>Fique por dentro de tudo em nossas redes sociais:</p>
        <ul>
          <li><img src={YouTube}/></li>
          <li><img src={Instagram}/></li>
          <li><img src={LinkedIn}/></li>
          <li><img src={Facebook}/></li>
          <li><img src={WhatsApp}/></li>
        </ul>
      </footer>
    </article>

    <Services />
    <Plans />
  </div>
  )
}