import * as React from 'react'

import './../styles/estilo-apresentacao.scss'

class Apresentacao extends React.Component {
  render() {
    return <div id="apresentacao">

      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4 titulo">Test Fractal Tecnologia</h1>
          <p className="lead sub-titulo">A aplicação foi desenvolvida com a ajuda de outras tecnologias além das requeridas.</p>
        </div>
      </div>

    </div>
  }
}

export default Apresentacao;