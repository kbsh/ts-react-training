import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { TypographyProps } from '@material-ui/core/Typography';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const decorate = withStyles({
    root: {
      width: 500,
    },
});

// propsの為のインターフェースを作成
interface IProps {
    // type: TypographyProps['variant'];
    // color: TypographyProps['color'];
    // position: any;
    // label: string;
    // title: string;
    value?: number;
    classes: ClassNameMap<"root">;
  };

interface IState {
  value: number;
};

export class CreateReactComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleChange = (event: React.ChangeEvent<{}>, value: any):void => {
    this.setState({ value });
  };

  render(): JSX.Element {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

const DecoratedBottomNavigation = decorate<IProps>(CreateReactComponent);

// エクスポート定義
export default DecoratedBottomNavigation;
