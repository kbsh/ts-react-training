import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DecoratedAppBar from './components/DecoratedAppBar';
import DecoratedBadge from './components/DecoratedBadge';
import DecoratedBottomNavigation from './components/DecoratedBottomNavigation';

class App extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div>
                {/* ヘッダー */}
                <DecoratedAppBar position="static" type="title" color="inherit" label="Menu" title="タイトル" />

                {/* バッチボタン */}
                <DecoratedBadge color="primary" contentNum={4} />

                {/* フッター */}
                <DecoratedBottomNavigation />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);

