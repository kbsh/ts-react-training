/**
 * ツールバー
 */
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import classNames from "classnames";
import * as React from "react";
import CreateChips from "./CreateChips";
import Search from "./Search";

type styleToolbar = "chip" | "highlight" | "spacer" | "actions" | "title";

const decorateToolbar = withStyles(({ palette, spacing }) => ({
  actions: {
    color: palette.text.secondary,
  },
  chip: {
    margin: spacing.unit,
  },
  highlight:
    palette.type === "light"
      ? {
        backgroundColor: lighten(palette.secondary.light, 0.85),
        color: palette.secondary.main,
      }
      : {
        backgroundColor: palette.secondary.dark,
        color: palette.text.primary,
      },
  spacer: {
    flex: "1 1 100%",
  },
  title: {
    flex: "0 0 auto",
  },
}));

interface Props {
  classes: ClassNameMap<styleToolbar>;
  numSelected: number;
}

interface State {
  searchSelects: any;
  searchSelectsTmp: any;
}

class EnhancedTableToolbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      searchSelects: {},
      searchSelectsTmp: {},
    };

    // コールバック利用のためクラスメソッドをバインド
    this.deleteChip = this.deleteChip.bind(this);
  }
  public render() {
    const { numSelected, classes } = this.props;
    const { searchSelects, searchSelectsTmp } = this.state;

    return (
      <div>
        <Toolbar
          className={classNames("", {
            [classes.highlight]: numSelected > 0,
          })}
        >
          <div className={classes.title}>
            {numSelected > 0 ? (
              <Typography color="inherit" variant="subheading">
                {numSelected} selected
            </Typography>
            ) : (
                <Typography variant="title" id="tableTitle">
                  会員一覧
            </Typography>
              )}
          </div>
          <div className={classes.spacer} />
          <div className={classes.actions}>
            {numSelected > 0 ? (
              // 削除ボタン
              // <Tooltip title="削除">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              // </Tooltip>
            ) : (
                // 検索ボタン
                <Search
                  selects={searchSelectsTmp}
                  parentSelectFunc={this.setSelect}
                  parentExecuteFunc={this.setChip}
                />
              )}
          </div>
        </Toolbar>
        <CreateChips
          selects={searchSelects}
          parentDeleteChipFunc={this.deleteChip}
        />
      </div>
    );
  }

  /**
   * チップから選択した検索条件を取り消し
   */
  public deleteChip(category: string, chip: string) {
    const deleteFunc = (data: any) => {
      if (Array.isArray(data[category])) {
        data[category].splice(
          data[category].indexOf(chip),
          1,
        );
      } else {
        delete data[category];
      }
    };

    // チップから削除
    const selects = JSON.parse(JSON.stringify(this.state.searchSelects));
    deleteFunc(selects);

    // 検索メニューから選択取り消し
    const selectsTmp = JSON.parse(JSON.stringify(this.state.searchSelectsTmp));
    deleteFunc(selectsTmp);

    // ステートに反映
    this.setState({
      searchSelects: selects,
      searchSelectsTmp: selects,
    });
  }

  /**
   * 検索条件を指定
   */
  private setSelect = (category: string, value: string[]) => {
    const data: any = this.state.searchSelectsTmp;
    data[category] = value;

    this.setState({
      searchSelectsTmp: data,
    });
  }

  /**
   * 検索実行・チップの表示
   */
  private setChip = (chips: any) => {
    this.setState({
      // 選択とチップ反映を同期したくないので値渡し
      searchSelects: JSON.parse(JSON.stringify(chips)),
    });
  }

}

const TableToolbar = decorateToolbar<Props>(EnhancedTableToolbar);

// エクスポート定義
export default TableToolbar;
