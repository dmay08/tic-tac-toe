import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor() {
        super()
        this.state = {
            turn: 'X',
        }
    }

    handleBoardClick(e) {
        if (!e.target.textContent) {
            e.target.textContent = this.state.turn
            this.setState({
                turn: this.state.turn === 'X' ? 'O' : 'X'
            })
        }
        this.checkForWinner()
    }

    checkForWinner() {
        const sqOne = document.getElementById('one')
        const sqTwo = document.getElementById('two')
        const sqThree = document.getElementById('three')
        const sqFour = document.getElementById('four')
        const sqFive = document.getElementById('five')
        const sqSix = document.getElementById('six')
        const sqSeven = document.getElementById('seven')
        const sqEight = document.getElementById('eight')
        const sqNine = document.getElementById('nine')
        if ((sqOne.textContent === 'X' && sqTwo.textContent === 'X' && sqThree.textContent === 'X')
        || (sqOne.textContent === 'X' && sqFour.textContent === 'X' && sqSeven.textContent === 'X')
        || (sqOne.textContent === 'X' && sqFive.textContent === 'X' && sqNine.textContent === 'X')
        || (sqTwo.textContent === 'X' && sqFive.textContent === 'X' && sqEight.textContent === 'X')
        || (sqThree.textContent === 'X' && sqSix.textContent === 'X' && sqNine.textContent === 'X')
        || (sqFour.textContent === 'X' && sqFive.textContent === 'X' && sqSix.textContent === 'X')
        || (sqSeven.textContent === 'X' && sqEight.textContent === 'X' && sqNine.textContent === 'X')
        || (sqThree.textContent === 'X' && sqFive.textContent === 'X' && sqSeven.textContent === 'X')
        ) {
            alert('X wins!')
            alert('Hit refresh to play again.')
        } else if ((sqOne.textContent === 'O' && sqTwo.textContent === 'O' && sqThree.textContent === 'O')
        || (sqOne.textContent === 'O' && sqFour.textContent === 'O' && sqSeven.textContent === 'O')
        || (sqOne.textContent === 'O' && sqFive.textContent === 'O' && sqNine.textContent === 'O')
        || (sqTwo.textContent === 'O' && sqFive.textContent === 'O' && sqEight.textContent === 'O')
        || (sqThree.textContent === 'O' && sqSix.textContent === 'O' && sqNine.textContent === 'O')
        || (sqFour.textContent === 'O' && sqFive.textContent === 'O' && sqSix.textContent === 'O')
        || (sqSeven.textContent === 'O' && sqEight.textContent === 'O' && sqNine.textContent === 'O')
        || (sqThree.textContent === 'O' && sqFive.textContent === 'O' && sqSeven.textContent === 'O')
        ) {
            alert('O wins!')
            alert('Hit refresh to play again.')
        }
    }

    render() {

        return (
            <div id="game">
                <div id="head">
                    Danny's Tic Tac Toe
        </div>
                <div id="board" onClick={(e) => this.handleBoardClick(e)}>
                    <div className="square" id="one"></div>
                    <div className="square" id="two"></div>
                    <div className="square" id="three"></div>
                    <div className="square" id="four"></div>
                    <div className="square" id="five"></div>
                    <div className="square" id="six"></div>
                    <div className="square" id="seven"></div>
                    <div className="square" id="eight"></div>
                    <div className="square" id="nine"></div>
                </div>
            </div>

        );
    }
}

export default App;
