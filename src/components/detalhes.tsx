import * as Axios from 'axios'
import * as React from 'react'
import Apresentacao from './apresentacao'

import '../styles/estilo-detalhes.scss'
import { Link } from 'react-router-dom'

function recuperarUrlId(){
  return  window.location.href.split('/')[4]
}

class Detalhes extends React.Component {

  state = {
    bebida: []
  }

  componentDidMount() {
    Axios.default.get(`https://api.punkapi.com/v2/beers/${recuperarUrlId()}`)
          .then(res => {
            const bebida = res.data
            this.setState({ bebida })
          })
  }

  render() {
      return <div id="detalhes">
        
        <Apresentacao/>

          <div className='d-flex flex-column align-items-center'>
            
            {this.state.bebida.map( dados => <div className='container-fluid' id='bebida-dados'> 

              <div className='row h-100'>
              <img className='col-4' src={dados.image_url} />
              <div className="d-flex flex-column col-8">
              <h1 className='shadow-sm p-3 bg-white rounded'>{dados.name}</h1>
              <p className='shadow p-3 bg-white rounded tagline'>TagLine: {dados.tagline}</p>
              <p className='shadow p-3 bg-white rounded text-justify'>description: {dados.description}</p>          
              </div>
              </div>           
            
            </div>)}

          <Link className="btn btn-outline-secondary mt-5 mb-5 w-25" to='/'>
            Voltar
          </Link>
        </div>
      </div>    
    }
  }
  
  export default Detalhes
  