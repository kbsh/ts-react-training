import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import DescriptionIcon from "@material-ui/icons/Description";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import * as React from "react";

type style = "nested";

// 最初にwithStylesを呼び出すデコレータ関数を作成
const decorate = withStyles(({ spacing }) => ({
  nested: {
    paddingLeft: spacing.unit * 4,
  },
}));

// propsの為のインターフェースを作成
interface Props {
  classes: ClassNameMap<style>;
}

// stateの為のインターフェースを作成
interface State {
  open: boolean;
}

class MenuItemDrKarte extends React.Component<Props, State> {
  public state = { open: false };

  public render() {
    const { classes } = this.props;

    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText inset primary="ドクターカルテ管理" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* ドクターカルテ */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="ドクターカルテ" />
            </ListItem>
            {/* ドクターカルテ全国ランキング */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="ドクターカルテ全国ランキング" />
            </ListItem>
          </List>
        </Collapse>
      </div>
    );
  }

  private handleClick = () => {
    this.setState((state) => ({ open: !state.open }));
  }
}

// エクスポート定義
export default decorate<Props>(MenuItemDrKarte);
