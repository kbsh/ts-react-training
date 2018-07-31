/**
 * 登録ボタン
 */
import Button from "@material-ui/core/Button";
import { DialogProps } from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import * as React from "react";
import CreateNew from "./CreateNew";

type style = "root";

const decorate = withStyles(({ spacing }) => ({
  root: {
    bottom: spacing.unit * 2,
    position: "fixed" as "fixed",
    right: spacing.unit * 3,
  },
}));

interface Props {
  classes: ClassNameMap<style>;
}

interface State {
  open: boolean;
}

class AddComponent extends React.Component<Props, State> {
  public render() {
    const { classes } = this.props;
    const open = (this.state === null || this.state.open === null) ? false : this.state.open;

    return (
      <div>
        <Tooltip title="会員新規登録">
          <Button
            variant="fab"
            color="secondary"
            className={classes.root}
            onClick={this.handleClickOpen}
          >
            <AddIcon />
          </Button>
        </Tooltip>
        <CreateNew
          open={open}
          editData={[]}
          parentCloseFunc={this.handleClose}
        />
      </div>
    );
  }

  private handleClickOpen = () => {
    this.setState({ open: true });
  }

  private handleClose = () => {
    this.setState({ open: false });
  }

}

const AddButton = decorate<Props>(AddComponent);

// エクスポート定義
export default AddButton;
