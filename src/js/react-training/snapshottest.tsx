import * as React from 'react';
import * as ReactDOM from 'react-dom';

export module mod {
    export interface Props {
        class : string;
        value : string;
    }
    
    export class CreateDom extends React.Component<Props, {}> {
        constructer(props: Props) {
        }
        render(): JSX.Element {
            return (
                // <div className={this.props.class}>{this.props.value}</div>
                <a
                className={this.props.class}
                href={this.props.value || '#'}
                >
                {this.props.children}
              </a>
            );
        }
    }
}