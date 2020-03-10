import React from 'react';

import ReactDOM from 'react-dom';

import PlayerDetail from './PlayerDetail';
import 'bootstrap/dist/css/bootstrap.css'


class App extends  React.Component {  
      
      VetorJogadores = [
            {
                  nome : 'Allejo',
                  pais : 'Brasil',
                  time : ' Deportivo La Coruña'
                  },
            {
                  nome : 'Gomez',
                  pais : 'Brasil',
                  time : 'Barcelona'
                  },
            {
                  nome : 'Galfano',
                  pais : 'Italia',
                  time : 'Juventus'
                  }
      ]


      constructor(props){
        
            super(props);

            console.log(this);

            this.state = {
                  indice: 0
            }

      }

      incrementarIndice = (event) => {
        if (this.state.indice<=this.VetorJogadores.length-2)
        {
            this.setState({
                  indice: this.state.indice+1
            })
        }
      }

      decrementarIndice = (event) => {
            
        if (this.state.indice!==0) {
            this.setState({
                      indice: this.state.indice-1  
            })
        }
        
      }
      
      render(){
             return(
                <div className="container">

                <br/>
                <PlayerDetail nome="Eliseu Dias Rodrigues" VetorJogadores={this.VetorJogadores[this.state.indice]}>
                </PlayerDetail>
                <br/>

                        <button type="button" className ="btn btn-primary" onClick = {this.decrementarIndice} >Anterior</button>
                            
                        <button type="button" className ="btn btn-primary"  onClick = {this.incrementarIndice} >Proximo</button>

                   </div>    
            );      
      }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
