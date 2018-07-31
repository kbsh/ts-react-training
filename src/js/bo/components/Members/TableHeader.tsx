/**
 * ヘッダー
 */
import Checkbox from "@material-ui/core/Checkbox";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel, { TableSortLabelProps } from "@material-ui/core/TableSortLabel";
import Tooltip from "@material-ui/core/Tooltip";
import * as React from "react";

const columnData = [
  { id: "memberId", numeric: true, disablePadding: false, label: "会員ID", width: 100 },
  { id: "memberName", numeric: false, disablePadding: true, label: "会員名", width: 200 },
  { id: "memberCode", numeric: false, disablePadding: true, label: "会員区分", width: 100 },
  { id: "occupation", numeric: false, disablePadding: true, label: "職種", width: 100 },
  { id: "medicalExaminationSubject", numeric: false, disablePadding: true, label: "診療科目", width: 100 },
  { id: "office", numeric: false, disablePadding: true, label: "勤務先", width: 500 },
  { id: "responsibleMr", numeric: false, disablePadding: true, label: "担当MR名", width: 100 },
  { id: "createdAt", numeric: false, disablePadding: true, label: "登録日", width: 100 },
  { id: "via", numeric: false, disablePadding: true, label: "経由", width: 50 },
];

interface Props {
  numSelected: number;
  onRequestSort: (event: any, property: any) => void;
  onSelectAllClick: any;
  order: TableSortLabelProps["direction"];
  orderBy: React.Key;
  rowCount: number;
}

class TableHeader extends React.Component<Props, {}> {
  public render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell />{/* 編集 */}
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {columnData.map((column) => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? "none" : "default"}
                sortDirection={orderBy === column.id ? order : false}
              >
                {/* <Tooltip
                  title="Sort"
                  placement={column.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                > */}
                  <TableSortLabel
                    style={{ width: `${column.width}px` }}
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                {/* </Tooltip> */}
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }

  private createSortHandler = (property: React.Key) => (event: React.MouseEvent) => {
    this.props.onRequestSort(event, property);
  }
}

// エクスポート定義
export default TableHeader;
