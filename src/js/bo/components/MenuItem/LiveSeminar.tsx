import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import LiveTvIcon from "@material-ui/icons/LiveTv";
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

class MenuItemSystem extends React.Component<Props, State> {
  public state = { open: false };

  public render() {
    const { classes } = this.props;

    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <LiveTvIcon />
          </ListItemIcon>
          <ListItemText inset primary="ライブ配信講演会管理" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* ライブ配信講演会一覧 */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="ライブ配信講演会一覧" />
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
export default decorate<Props>(MenuItemSystem);
