import * as React from 'react';
import {Props} from './Props';
import {Board} from './Board';
import {Common} from './Common';

interface GameState {
    history : { squares: string[] }[];
    player : string;
    step : number;
}

export class Game extends React.Component<Props, GameState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            player: 'X',
            step: 0,
        };
    }

    getNextPlayer(isJump: boolean = false) {
        if (isJump) {
            // 履歴からのジャンプの場合
            if (this.state.step % 2 === 0) {
                return "○";
            } else {
                return "X";
            }
        } else {
            // 通常の選択の場合
            if (this.state.player == 'X') {
                return "○";
            } else {
                return "X";
            }
        }
    }

    handleClick(i: number) {
        const history = this.state.history.slice(0, this.state.step + 1);
        const current = history[history.length - 1];      
        const squares = current.squares.slice();
        if (Common.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.player;
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            step: history.length,
            player: this.getNextPlayer(),
        });
    }

    jumpTo(step: GameState['step']) {
        this.setState({
            step: step,
            player: this.getNextPlayer(true),
        });
    }

    render(): JSX.Element {
        const history = this.state.history;
        const current = history[this.state.step];
        const winner = Common.calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${this.state.player}`;
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i:number) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}