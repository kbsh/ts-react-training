import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";
import * as React from "react";
import Members from "./Members/Members";
import SideMenu from "./Menu";

/**
 * ルーティング一覧
 * 値をimportするJSXオブジェクト名とします。
 */
export enum Routes {
  Members,
}

interface Props {
  requestRoute: Routes;
  params: any;
}

interface State {
  currentRoute: Routes;
}

export class Router extends React.Component<Props, State> {
  public render(): JSX.Element {
    const { requestRoute, params } = this.props;
    const { currentRoute } = this.state;

    return (
      <div>
        {(() => {
          switch (requestRoute) {
            case Routes.Members:
            default:
              {/* 会員一覧 */ }
              return (
                <Members data={params.data} />
              );
          }
        })()}
      </div>
    );
  }

}

// エクスポート定義
export default Router;
