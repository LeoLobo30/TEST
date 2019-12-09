import * as React from 'react'
import * as Axios from 'axios'
import { Link } from 'react-router-dom';

import '../styles/estilo-tabela.scss'
import Apresentacao from './apresentacao';

class Tabela extends React.Component {

    state = {
        bebidas: []
    }    

    componentDidMount() {
        Axios.default.get('https://api.punkapi.com/v2/beers')
                        .then(res => {
                            const bebidas = res.data
                            this.setState({ bebidas })
                        })
    }

    render() {
        return <div id="tabela">

            <Apresentacao/>

            <table id='tabelaDados' className="table table-bordered table-striped table-hover table-sm">
                <thead>
                    <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">TagLine</th>
                    <th scope="col">Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.bebidas.map(bebida => <tr>
                        <td>{bebida.name}</td>
                        <td>{bebida.tagline}</td>
                        <td><Link to={ `detalhes/${bebida.id}` }>Ver</Link></td>
                    </tr>) }
                </tbody>
            </table>
        </div>
    }

}

export default Tabela