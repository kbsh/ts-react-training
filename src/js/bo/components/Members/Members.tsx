import Checkbox from "@material-ui/core/Checkbox";
import { DialogProps } from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { ClassNameMap, StyleRulesCallback } from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { TableSortLabelProps } from "@material-ui/core/TableSortLabel";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import * as React from "react";
import AddButton from "./AddButton";
import CreateNew from "./CreateNew";
import Pagenation from "./Pagenation";
import TableHeader from "./TableHeader";
import TableToolbar from "./TableToolbar";

type styleTable = "footer" | "row" | "table" | "toolbar";

const styles: StyleRulesCallback<styleTable> = ({ palette, spacing }) => ({
  footer: {
    marginBottom: "60px",
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: palette.background.default,
    },
  },
  table: {
    overflow: "auto",
  },
  toolbar: {
    marginTop: spacing.unit * 3,
  },
});

const decorateTable = withStyles(({ palette, spacing }) => ({
  footer: {
    marginBottom: "60px",
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: palette.background.default,
    },
  },
  table: {
    overflow: "auto",
  },
  toolbar: {
    marginTop: spacing.unit * 3,
  },
}));

interface TableProps {
  classes: ClassNameMap<styleTable>;
  data: any[];
}

interface TableState {
  editData: any[];
  open: boolean;
  order: TableSortLabelProps["direction"];
  orderBy: React.Key;
  selected: any[];
  data: any[];
  rowsPerPage: number;
  page: number;
}

class CustomPaginationActionsTable extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);

    this.state = {
      data: props.data.sort((a, b) => (a.id < b.id ? -1 : 1)),
      editData: [],
      open: false,
      order: "asc",
      orderBy: "id",
      page: 0,
      rowsPerPage: 5,
      selected: [],
    };
  }

  public render() {
    const { classes } = this.props;
    const { data, editData, open, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <div>
        <Paper className={classes.toolbar}>
          <TableToolbar numSelected={selected.length} />
        </Paper>
        <Paper className={classes.table}>
          <Table>
            <TableHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data
                .sort(this.getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((n) => {
                  const isSelected = this.isSelected(n.id);

                  return (
                    <TableRow
                      hover
                      onClick={(event) => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                      className={classes.row}
                    >
                      {/* 編集 */}
                      <TableCell style={{paddingRight: "20px"}}>
                        <Tooltip title="編集">
                        <EditIcon onClick={(event) => this.handleClickOpen(event, n)} />
                        </Tooltip>
                      </TableCell>
                      {/* 削除選択 */}
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      {/* 会員ID */}
                      <TableCell numeric component="th" scope="row">{n.memberId}</TableCell>
                      {/* 会員名 */}
                      <TableCell padding="none">{n.memberName}</TableCell>
                      {/* 会員区分 */}
                      <TableCell padding="none">{n.memberCode}</TableCell>
                      {/* 職種 */}
                      <TableCell padding="none">{n.occupation}</TableCell>
                      {/* 診療科目 */}
                      <TableCell padding="none">{n.medicalExaminationSubject}</TableCell>
                      {/* 勤務先 */}
                      <TableCell padding="none">{n.office}</TableCell>
                      {/* 担当MR名 */}
                      <TableCell padding="none">{n.responsibleMr}</TableCell>
                      {/* 登録日 */}
                      <TableCell padding="none">{n.createdAt}</TableCell>
                      {/* 経由 */}
                      <TableCell padding="none">{n.via}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
        <Paper className={classes.footer}>
          <Table>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={Pagenation}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
        <AddButton />
        <CreateNew
          open={open}
          editData={editData}
          parentCloseFunc={this.handleClose}
        />
      </div>
    );
  }

  private handleRequestSort = (event: any, property: any) => {
    let order: TableSortLabelProps["direction"] = "desc";
    const orderBy: React.Key = property;

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  }

  private handleSelectAllClick = (event: React.ChangeEvent, checked: boolean) => {
    if (checked) {
      this.setState((state) => ({ selected: state.data.map((n) => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  }

  private handleClick = (event: React.MouseEvent, id: number) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected: any[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  }

  private handleClickOpen = (event: React.MouseEvent, editData: any[]) => {
    this.setState({
      editData,
      open: true,
    });

    // 以降のアクション（削除用の選択）を発火させない
    event.stopPropagation();
  }

  private handleClose = () => {
    this.setState({ open: false });
  }

  private handleChangePage = (event: React.MouseEvent<Element> | null, page: number): void => {
    this.setState({ page });
  }

  private handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10) });
  }

  private getSorting(order: TableSortLabelProps["direction"], orderBy: React.Key) {
    const subKey = "id";

    if (order === "desc") {
      return (a: any, b: any) => {
        if (b[orderBy] < a[orderBy]) {
          return -1;
        }
        if (b[orderBy] > a[orderBy]) {
          return 1;
        }
        if (b[subKey] < a[subKey]) {
          return -1;
        }
        if (b[subKey] > a[subKey]) {
          return 1;
        }
        return 0;
      };
    } else {
      return (a: any, b: any) => {
        if (a[orderBy] < b[orderBy]) {
          return -1;
        }
        if (a[orderBy] > b[orderBy]) {
          return 1;
        }
        if (a[subKey] < b[subKey]) {
          return -1;
        }
        if (a[subKey] > b[subKey]) {
          return 1;
        }
        return 0;
      };
    }
  }

  private isSelected = (id: number) => this.state.selected.indexOf(id) !== -1;
}

const Members = withStyles(styles)(CustomPaginationActionsTable);

// エクスポート定義
export default Members;
