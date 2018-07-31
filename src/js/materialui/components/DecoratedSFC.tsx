import { withStyles } from '@material-ui/core/styles';
import { TypographyProps } from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';


// 最初にwithStylesを呼び出すデコレータ関数を作成
const decorate = withStyles(({ palette, spacing }) => ({
    root: {
        backgroundColor: palette.background.default,
        color: palette.primary.main,
        padding: spacing.unit,
    },
}));


// propsの為のインターフェースを作成
interface IProps {
    text: string;
    type: TypographyProps['variant'];
    color: TypographyProps['color'];
};


// コンポーネントを定義します
const DecoratedSFC = decorate<IProps>(({ text, type, color, classes }) => (
    <Typography variant={type} color={color} classes={classes}>
        {text}
    </Typography>
));

// エクスポート定義
export default DecoratedSFC;