import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import LocationCityIcon from "@material-ui/icons/LocationCity";
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

class MenuItemFacility extends React.Component<Props, State> {
  public state = { open: false };

  public render() {
    const { classes } = this.props;

    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <LocationCityIcon />
          </ListItemIcon>
          <ListItemText inset primary="施設管理" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* 施設アカウント一覧 */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="施設アカウント一覧" />
            </ListItem>
            {/* MRへのメッセージ管理 */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="MRへのメッセージ管理" />
            </ListItem>
            {/* 承認対象一覧 */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="承認対象一覧" />
            </ListItem>
            {/* 公開状況一覧 */}
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="公開状況一覧" />
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
export default decorate<Props>(MenuItemFacility);
