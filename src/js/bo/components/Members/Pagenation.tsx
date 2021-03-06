/**
 * ページネーション
 */
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import * as React from "react";

type style = "root" | "nested";

const decorateActions = withStyles(({ palette, spacing }) => ({
  root: {
    color: palette.text.secondary,
    flexShrink: 0,
    marginLeft: spacing.unit * 2.5,
  },
}),
  { withTheme: true },
);

interface ActionsProps {
  classes: ClassNameMap<style>;
  count: number;
  page: number;
  rowsPerPage: number;
  theme: any;
  onChangePage: any;
}

interface ActionsState {
  open: boolean;
}

class TablePaginationActions extends React.Component<ActionsProps, ActionsState> {
  public render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }

  private handleFirstPageButtonClick = (event: React.MouseEvent) => {
    this.props.onChangePage(event, 0);
  }

  private handleBackButtonClick = (event: React.MouseEvent) => {
    this.props.onChangePage(event, this.props.page - 1);
  }

  private handleNextButtonClick = (event: React.MouseEvent) => {
    this.props.onChangePage(event, this.props.page + 1);
  }

  private handleLastPageButtonClick = (event: React.MouseEvent) => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  }
}

const Pagination: React.ReactType = decorateActions<ActionsProps>(TablePaginationActions);

// エクスポート定義
export default Pagination;
