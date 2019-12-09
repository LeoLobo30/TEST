import * as React from 'react'

import './../styles/estilo-apresentacao.scss'

class Apresentacao extends React.Component {
  render() {
    return <div id="apresentacao">

      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">Test Fractal Tecnologia</h1>
          <p className="lead paragrafo-apresentacao">aplicação foi desenvolvida com o axilio de outras tecnologias além das requeridas. Como: bootstrap, typescript</p>
        </div>
      </div>
      

    </div>    
  }
}

export default Apresentacao;