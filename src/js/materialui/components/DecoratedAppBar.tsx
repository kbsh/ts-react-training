import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton, PropTypes} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { TypographyProps } from '@material-ui/core/Typography';
import { ClassNameMap, StyleRules } from '@material-ui/core/styles/withStyles';

type Styles = "root" | "menuButton";
const s: Styles = "root";

const styles: StyleRules<Styles> = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

const decorate = withStyles(styles);

// propsの為のインターフェースを作成
interface IProps {
    type: TypographyProps['variant'];
    classes: ClassNameMap<Styles>;
    color: PropTypes.Color;
    position: any;
    label: string;
    title: string;
};

// const DecoratedAppBar = decorate<IProps>(({ position, type, color, classes, label, title }) => (
  //     <div className={classes.root}>
  //       <AppBar position={position}>
  //         <Toolbar>
  //           <IconButton className={classes.menuButton} color="inherit" aria-label={label}>
  //             <MenuIcon />
  //           </IconButton>
  //           <Typography variant={type} color={color}>
  //             {title}
  //           </Typography>
  //         </Toolbar>
  //       </AppBar>
  //     </div>
  // ));
  
const MyAppBar: React.StatelessComponent<IProps> = ({ position, type, color, classes, label, title }) => (
  <div className={classes.root}> 
    <AppBar position={position} className='aa'>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label={label}>
          <MenuIcon />
        </IconButton>
        <Typography variant={type} color={color}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

const DecoratedAppBar = decorate(MyAppBar)

// エクスポート定義
export default DecoratedAppBar;
