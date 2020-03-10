import React from 'react'

class PlayerDetail extends React.Component {

    render(props){
        return(
            <div>
                <h1>{this.props.VetorJogadores.nome}</h1>
                <h2>{this.props.VetorJogadores.pais}</h2>
                <h3>{this.props.VetorJogadores.time}</h3>
            </div>
        )
    }
}

export default PlayerDetail
