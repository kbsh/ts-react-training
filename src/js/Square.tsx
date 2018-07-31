import * as React from 'react';
import {Props} from './Props';

export class Square extends React.Component<Props, {}> {
    render(): JSX.Element {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}