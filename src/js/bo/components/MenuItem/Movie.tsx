import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
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
            <VideoLibraryIcon />
          </ListItemIcon>
          <ListItemText inset primary="ムービーライブラリ管理" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* ムービーマスタ インポート */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="ムービーマスタ インポート" />
            </ListItem>
            {/* ムービーマスタ ダウンロード */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="ムービーマスタ ダウンロード" />
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
