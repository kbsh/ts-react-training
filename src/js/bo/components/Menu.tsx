import { List, ListSubheader } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import MemuItemDrKarte from "./MenuItem/DrKarte";
import MemuItemFacility from "./MenuItem/Facility";
import MemuItemLiveSeminar from "./MenuItem/LiveSeminar";
import MemuItemMember from "./MenuItem/Member";
import MemuItemMovie from "./MenuItem/Movie";
import MemuItemMR from "./MenuItem/MR";
import MemuItemMypage from "./MenuItem/Mypage";
import MemuItemOfficer from "./MenuItem/Officer";
import MemuItemOther from "./MenuItem/Other";
import MemuItemSystem from "./MenuItem/System";

type style = "root" | "nested";

// 最初にwithStylesを呼び出すデコレータ関数を作成
const decorate = withStyles(({ palette, spacing }) => ({
  nested: {
    paddingLeft: spacing.unit * 4,
  },
  root: {
    backgroundColor: palette.background.paper,
    maxWidth: 360,
    width: "100%",
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

class MenuComponent extends React.Component<Props, State> {
  public state = { open: true };

  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={<ListSubheader component="div" disableSticky={true}>メニュー</ListSubheader>}
        >
          {/* 会員管理 */}
          <MemuItemMember />

          {/* 社員管理 */}
          <MemuItemOfficer />

          {/* システム管理 */}
          <MemuItemSystem />

          {/* 専任MR統括者管理 */}
          <MemuItemMR />

          {/* ライブ配信講演会管理 */}
          <MemuItemLiveSeminar />

          {/* ムービーライブラリ管理 */}
          <MemuItemMovie />

          {/* マイページ管理 */}
          <MemuItemMypage />

          {/* 施設管理 */}
          <MemuItemFacility />

          {/* ドクターカルテ管理 */}
          <MemuItemDrKarte />

          {/* その他情報管理 */}
          <MemuItemOther />
        </List>
      </div>
    );
  }

  private handleClick = () => {
    this.setState((state) => ({ open: !state.open }));
  }
}

const SideMenu = decorate<Props>(MenuComponent);

// エクスポート定義
export default SideMenu;
