import * as React from 'react';
import {Props} from './Props';
import {Square} from './Square';
  
export class Board extends React.Component<Props, {}> {
    renderSquare(i: number) {
        let value: string = '';
        if (this.props.squares) {
            value = this.props.squares[i];
        }
        return <Square value={value} onClick={() => this.props.onClick(i)} />;
    }

    render(): JSX.Element {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}