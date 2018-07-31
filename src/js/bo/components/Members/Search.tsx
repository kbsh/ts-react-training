/**
 * 検索
 */
import Button from "@material-ui/core/Button";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import FilterListIcon from "@material-ui/icons/FilterList";
import classNames from "classnames";
import * as React from "react";

type style = "container" | "formControl" | "margin" | "root";

const decorate = withStyles(({ spacing }) => ({
  container: {
    display: "flex",
  },
  formControl: {
    width: "100%",
  },
  margin: {
    margin: spacing.unit + "px" + " " + spacing.unit * 2 + "px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    marginTop: 10,
  },
}));

interface Props {
  classes: ClassNameMap<style>;
  parentSelectFunc: any;
  parentExecuteFunc: any;
  selects: any;
}

interface State {
  open: boolean;
}

class ScrollDialog extends React.Component<Props, State> {
  public state = {
    open: false,
  };

  public render() {
    const { classes, selects } = this.props;

    // 会員区分
    const memberTypes = [
      "保留会員",
      "仮会員",
      "本会員",
      "マイページ会員",
      "却下会員",
      "期限切れ仮会員",
    ];

    // 職種
    const jobTypes = [
      "医師",
      "薬剤師",
      "看護師",
      "歯科医師",
      "診療放射線技師",
      "保健師",
      "助産師",
      "臨床検査技師",
      "衛生検査技師",
      "理学療法士",
      "作業療法士",
      "救急救命士",
      "介護福祉士",
      "ケアマネージャー",
      "栄養士・栄養管理士",
      "視能訓練士",
      "臨床工学技士",
      "義肢装具士",
      "歯科衛生士",
      "歯科技工士",
      "その他",
    ];

    // 医療機関経営者
    const isManagers = [
      "医療機関経営者ではない",
      "医療機関経営者である",
    ];

    // 診療科目
    const medicalCourses = [
      "内科",
      "循環器内科",
      "消化器内科",
      "呼吸器内科",
      "糖尿病・内分泌内科",
      "腎臓内科",
      "血液内科",
      "神経内科",
      "心療内科",
      "精神科/精神神経科",
      "外科",
      "消化器外科",
      "整形外科",
      "脳神経外科",
      "放射線科",
      "麻酔科",
      "産婦人科",
      "皮膚科",
      "泌尿器科",
      "耳鼻咽喉科",
      "小児科",
      "眼科",
      "救急",
      "歯科・口腔外科",
      "基礎医学科",
      "研修医",
      "その他",
    ];

    // 担当MRのメール利用
    const canMails = [
      "認めない",
      "認める",
    ];
    // チーム
    const teams = [
      "チームなし",
      "緩和ケア",
      "感染対策",
    ];

    // 勤務先都道府県
    const prefectures = [
      "北海道",
      "青森県",
      "岩手県",
      "宮城県",
      "秋田県",
      "山形県",
      "福島県",
      "茨城県",
      "栃木県",
      "群馬県",
      "埼玉県",
      "千葉県",
      "東京都",
      "神奈川県",
      "新潟県",
      "富山県",
      "石川県",
      "福井県",
      "山梨県",
      "長野県",
      "岐阜県",
      "静岡県",
      "愛知県",
      "三重県",
      "滋賀県",
      "京都府",
      "大阪府",
      "兵庫県",
      "奈良県",
      "和歌山県",
      "鳥取県",
      "島根県",
      "岡山県",
      "広島県",
      "山口県",
      "徳島県",
      "香川県",
      "愛媛県",
      "高知県",
      "福岡県",
      "佐賀県",
      "長崎県",
      "熊本県",
      "大分県",
      "宮崎県",
      "鹿児島県",
      "沖縄県",
    ];

    return (
      <div className={classes.root}>
        <Tooltip title="検索">
          <IconButton onClick={this.handleClickOpen("paper")}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">会員検索</DialogTitle>
          <DialogContent>
            <Paper>
              {/* 会員ID */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  autoFocus
                  label="会員ID"
                  placeholder="例:10000001"
                  name="memberId"
                  value={selects.memberId ? selects.memberId : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 個人コード */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="個人コード"
                  placeholder="例:99999999"
                  name="personalCode"
                  value={selects.personalCode ? selects.personalCode : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 会員区分 */}
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.margin} htmlFor="select-multiple">会員区分</InputLabel>
                <Select
                  className={classes.margin}
                  multiple
                  name="memberType"
                  value={selects.memberType ? selects.memberType : []}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                >
                  {memberTypes.map((memberType) => (
                    <MenuItem key={memberType} value={memberType} >{memberType}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* 会員名（漢字） */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="会員名（漢字）"
                  name="memberName"
                  value={selects.memberName ? selects.memberName : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 会員名（カナ） */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="会員名（カナ）"
                  name="memberNameKana"
                  value={selects.memberNameKana ? selects.memberNameKana : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* メールアドレス1 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="メールアドレス1"
                  name="mailAddress"
                  value={selects.mailAddress ? selects.mailAddress : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* メールアドレス2 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="メールアドレス2"
                  name="mailAddress2"
                  value={selects.mailAddress2 ? selects.mailAddress2 : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 勤務先名 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="勤務先名"
                  name="workSpace"
                  value={selects.workSpace ? selects.workSpace : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 施設名（SFA） */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="施設名（SFA）"
                  name="facilityName"
                  value={selects.facilityName ? selects.facilityName : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 施設コード */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="施設コード"
                  name="facilityCode"
                  value={selects.facilityCode ? selects.facilityCode : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 職種 */}
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.margin} htmlFor="select-multiple">職種</InputLabel>
                <Select
                  className={classes.margin}
                  multiple
                  name="jobType"
                  value={selects.jobType ? selects.jobType : []}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                >
                  {jobTypes.map((jobType) => (
                    <MenuItem key={jobType} value={jobType} >{jobType}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* 医療機関経営者 */}
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.margin} htmlFor="select-single">医療機関経営者</InputLabel>
                <Select
                  className={classes.margin}
                  multiple
                  name="isManager"
                  value={selects.isManager ? selects.isManager : []}
                  onChange={this.handleChange}
                  input={<Input id="select-single" />}
                >
                  {isManagers.map((isManager) => (
                    <MenuItem key={isManager} value={isManager} >{isManager}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* 診療科目 */}
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.margin} htmlFor="select-multiple">診療科目</InputLabel>
                <Select
                  className={classes.margin}
                  multiple
                  name="medicalCourse"
                  value={selects.medicalCourse ? selects.medicalCourse : []}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                >
                  {medicalCourses.map((medicalCourse) => (
                    <MenuItem key={medicalCourse} value={medicalCourse} >{medicalCourse}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* 担当MR社員番号 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="担当MR社員番号"
                  name="MRCode"
                  value={selects.MRCode ? selects.MRCode : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 担当MR名 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="担当MR名"
                  name="MRName"
                  value={selects.MRName ? selects.MRName : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 担当MRのメール利用 */}
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.margin} htmlFor="select-multiple">担当MRのメール利用</InputLabel>
                <Select
                  className={classes.margin}
                  multiple
                  name="canMail"
                  value={selects.canMail ? selects.canMail : []}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                >
                  {canMails.map((canMail) => (
                    <MenuItem key={canMail} value={canMail} >{canMail}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* チーム */}
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.margin} htmlFor="select-multiple">チーム</InputLabel>
                <Select
                  className={classes.margin}
                  multiple
                  name="team"
                  value={selects.team ? selects.team : []}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                >
                  {teams.map((team) => (
                    <MenuItem key={team} value={team} >{team}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* 勤務先郵便番号 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="勤務先郵便番号"
                  name="postCode"
                  value={selects.postCode ? selects.postCode : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 勤務先都道府県 */}
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.margin} htmlFor="select-multiple">勤務先都道府県</InputLabel>
                <Select
                  className={classes.margin}
                  multiple
                  name="prefecture"
                  value={selects.prefecture ? selects.prefecture : []}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                >
                  {prefectures.map((prefecture) => (
                    <MenuItem key={prefecture} value={prefecture} >{prefecture}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* 勤務先市区郡 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="勤務先市区郡"
                  name="workCity"
                  value={selects.workCity ? selects.workCity : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 勤務先町村番地 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="勤務先町村番地"
                  name="workAddress"
                  value={selects.workAddress ? selects.workAddress : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 勤務先代表電話番号 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="勤務先代表電話番号"
                  helperText="※ハイフンなし"
                  name="workTel"
                  value={selects.workTel ? selects.workTel : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 所属・役職 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  label="所属・役職"
                  name="workPosition"
                  value={selects.workPosition ? selects.workPosition : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 登録日 */}
              <form className={classNames(classes.container, classes.margin)} noValidate>
                <TextField
                  id="createdAtStart"
                  label="登録日開始"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth={true}
                  name="createdAtStart"
                  value={selects.createdAtStart ? selects.createdAtStart : ""}
                  onChange={this.handleChange}
                />
                <TextField
                  id="createdAtEnd"
                  label="登録日終了"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth={true}
                  name="createdAtEnd"
                  value={selects.createdAtEnd ? selects.createdAtEnd : ""}
                  onChange={this.handleChange}
                />
              </form>

              {/* 更新日 */}
              <form className={classNames(classes.container, classes.margin)} noValidate>
                <TextField
                  id="updatedAtStart"
                  label="更新日開始"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth={true}
                  name="updatedAtStart"
                  value={selects.updatedAtStart ? selects.updatedAtStart : ""}
                  onChange={this.handleChange}
                />
                <TextField
                  id="updatedAtEnd"
                  label="更新日終了"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth={true}
                  name="updatedAtEnd"
                  value={selects.updatedAtEnd ? selects.updatedAtEnd : ""}
                  onChange={this.handleChange}
                />
              </form>

              {/* ログイン */}
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.margin} htmlFor="select-multiple">ログイン</InputLabel>
                <Select
                  className={classes.margin}
                  multiple
                  name="firstLogin"
                  value={selects.firstLogin ? selects.firstLogin : []}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                >
                  <MenuItem key="初回" value="初回" >初回</MenuItem>
                  <MenuItem key="初回以外" value="初回以外" >初回以外</MenuItem>
                </Select>
              </FormControl>

              {/* メモ */}
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.margin} htmlFor="select-multiple">メモ</InputLabel>
                <Select
                  className={classes.margin}
                  multiple
                  name="memo"
                  value={selects.memo ? selects.memo : []}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                >
                  <MenuItem key="あり" value="あり" >あり</MenuItem>
                </Select>
              </FormControl>

              {/* 経由 */}
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.margin} htmlFor="select-multiple">経由</InputLabel>
                <Select
                  className={classes.margin}
                  multiple
                  name="route"
                  value={selects.route ? selects.route : []}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                >
                  <MenuItem key="Webから" value="Webから" >Webから</MenuItem>
                  <MenuItem key="MRから" value="MRから" >MRから</MenuItem>
                </Select>
              </FormControl>

              {/* 登録方法 */}
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.margin} htmlFor="select-multiple">登録方法</InputLabel>
                <Select
                  className={classes.margin}
                  multiple
                  name="howToRegist"
                  value={selects.howToRegist ? selects.howToRegist : []}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                >
                  <MenuItem key="個別登録" value="個別登録" >個別登録</MenuItem>
                  <MenuItem key="一括登録" value="一括登録" >一括登録</MenuItem>
                </Select>
              </FormControl>

              {/* 承認ステータス */}
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.margin} htmlFor="select-multiple">承認ステータス</InputLabel>
                <Select
                  className={classes.margin}
                  multiple
                  name="approvalStatus"
                  value={selects.approvalStatus ? selects.approvalStatus : []}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                >
                  <MenuItem key="承認" value="承認" >承認</MenuItem>
                  <MenuItem key="非承認" value="非承認" >非承認</MenuItem>
                  <MenuItem key="保留・却下会員" value="保留・却下会員" >保留・却下会員</MenuItem>
                  <MenuItem key="MR経由" value="MR経由" >MR経由</MenuItem>
                </Select>
              </FormControl>

              {/* 会員へのお知らせ */}
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.margin} htmlFor="select-multiple">会員へのお知らせ</InputLabel>
                <Select
                  className={classes.margin}
                  multiple
                  name="notice"
                  value={selects.notice ? selects.notice : []}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                >
                  <MenuItem key="発送済み" value="発送済み" >発送済み</MenuItem>
                  <MenuItem key="未発送" value="未発送" >未発送</MenuItem>
                  <MenuItem key="PDF出力済み" value="PDF出力済み" >PDF出力済み</MenuItem>
                  <MenuItem key="MR経由" value="MR経由" >MR経由</MenuItem>
                </Select>
              </FormControl>

            </Paper>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} fullWidth={true} variant="outlined">
              キャンセル
            </Button>
            <Button onClick={this.handleExecute} fullWidth={true} variant="outlined" color="primary">
              検索
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    this.props.parentSelectFunc(event.target.name, event.target.value);
  }

  private handleClickOpen = (scroll: DialogProps["scroll"]) => () => {
    this.setState({ open: true });
  }

  private handleClose = () => {
    this.setState({ open: false });
  }

  private handleExecute = () => {
    this.props.parentExecuteFunc(this.props.selects);
    this.handleClose();
  }
}

export default decorate<Props>(ScrollDialog);
