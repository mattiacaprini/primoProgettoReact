import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Square extends React.Component {

    click (promsFrase) {           //semplicissima funzione

        console.log(promsFrase);
    }


    render() {
       
        return ( 
            <button className = "square" onClick = {() => this.click("HAI CLICCATO")}> 
                {this.props.value} 
            </button>
        );
    }
}


class Board extends React.Component {
    renderSquare(i) {           // nome del metodo con il parametro richiesto "i"
        return <Square value = { i }/> ;        //con sqare da che si sta riferendo alla classe square
    }       /*return ritorna e setta, collegandosi alla classe square, tutte le variabili 
            chiamate value con il valore i che verrà settato in base al parametro passato */

    render() {
        const status = 'Next player: X';

        return ( 
            <div>
                <div className = "status" > { status } </div> 
                <div className = "board-row" > 
                    { this.renderSquare(0) } 
                    { this.renderSquare(1) } 
                    { this.renderSquare(2) } 
                </div> 
                <div className = "board-row" > 
                    { this.renderSquare(3) } 
                    { this.renderSquare(4) } 
                    { this.renderSquare(5) } 
                </div> 
                <div className = "board-row" > 
                    { this.renderSquare(6) } 
                    { this.renderSquare(7) } 
                    { this.renderSquare(8) } 
                </div> 
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className = "game">
                <div className = "game-board" >
                    <Board/>
                </div> 
                    
                <div/>
                
                <div className = "game-info" >
                    <div > { /* status */ } </div> 
                    <ol> { /* TODO */ } </ol> 
                </div> 
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < Game / > );