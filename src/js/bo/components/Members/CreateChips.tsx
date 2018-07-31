/**
 * チップ作成
 */
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import * as React from "react";

type style = "chip" | "root";

const decorate = withStyles(({ spacing }) => ({
  chip: {
    margin: spacing.unit,
  },
  root: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    justifyContent: "left",
    padding: spacing.unit / 2,
  },
}));

interface Props {
  classes: ClassNameMap<style>;
  selects: any;
  parentDeleteChipFunc: any;
}

class CreateChips extends React.Component<Props, {}> {
  public render() {
    const { classes, selects } = this.props;

    const chipDoms: JSX.Element[] = [];

    const pushChipDom = (category: string, data: string) => {
      chipDoms.push(
        <Chip
          key={category + "_" + data}
          label={data}
          className={classes.chip}
          onDelete={this.handleDelete(category, data)}
        />);
    };

    for (const category in selects) {
      if (selects.hasOwnProperty(category)) {
        if (Array.isArray(selects[category])) {
          for (const data of selects[category]) {
            pushChipDom(category, data);
          }
        } else {
          pushChipDom(category, selects[category]);
        }
      }
    }

    return (
      <div className={classes.root}>
        {chipDoms.map((chip) => {
          return chip;
        })}
      </div>
    );
  }

  private handleDelete = (category: string, data: string) => () => {
    this.props.parentDeleteChipFunc(category, data);
  }
}

// エクスポート定義
export default decorate<Props>(CreateChips);
