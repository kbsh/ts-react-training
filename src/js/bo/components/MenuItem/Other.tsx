import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import WorkIcon from "@material-ui/icons/Work";
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

class MenuItemOther extends React.Component<Props, State> {
  public state = { open: false };

  public render() {
    const { classes } = this.props;

    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText inset primary="その他情報管理" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* CMS */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="CMS" />
            </ListItem>
            {/* SiteTracker */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="SiteTracker" />
            </ListItem>
            {/* WEB-CAS */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="WEB-CAS" />
            </ListItem>
            {/* 資材情報一覧 */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="資材情報一覧" />
            </ListItem>
            {/* J-StreamEQ */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="J-StreamEQ" />
            </ListItem>
            {/* プロボ */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="プロボ" />
            </ListItem>
            {/* AdobeAnalitics */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="AdobeAnalitics" />
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
export default decorate<Props>(MenuItemOther);
