import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Badge, Typography, Button, PropTypes} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { TypographyProps } from '@material-ui/core/Typography';
import createMyTheme from './createMyTheme';

// const theme = createMyTheme({ appDrawer: { breakpoint: 'md' }});
const theme = createMyTheme({});

// 最初にwithStylesを呼び出すデコレータ関数を作成
const decorate = withStyles(({ palette, spacing } ) => ({
    root: {
        color: palette.primary.main,
    },
    padding: {
        padding: spacing.unit,
    },
    margin: {
        margin: spacing.unit * 2,
    },
}));

// propsの為のインターフェースを作成
interface IProps {
    color: PropTypes.Color;
    contentNum: number;
};


// コンポーネントを定義します
const DecoratedBadge = decorate<IProps>(({ color, contentNum, classes }) => (
  <div>
    <Badge color={color} badgeContent={contentNum} className={classes.margin}>
        <Typography className={classes.padding}>Typography</Typography>
    </Badge>
    <Badge color={color} badgeContent={contentNum} className={classes.margin}>
        <Button variant="contained">Button</Button>
    </Badge>
  </div>
));

// エクスポート定義
export default DecoratedBadge;