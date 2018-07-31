/**
 * 登録・編集
 */
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import * as React from "react";

type style = "addIcon" | "dialog" | "formControl" | "group" | "margin" | "paper";

const decorate = withStyles(({ spacing }) => ({
  addIcon: {
    bottom: spacing.unit * 2,
    position: "fixed" as "fixed",
    right: spacing.unit * 3,
  },
  dialog: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    marginTop: 10,
  },
  formControl: {
    width: "100%",
  },
  group: {
    flexDirection: "row" as "row",
  },
  margin: {
    margin: spacing.unit + "px" + " " + spacing.unit * 2 + "px",
  },
  paper: {
    marginBottom: spacing.unit * 3,
    marginTop: spacing.unit * 3,
  },
}));

interface Props {
  classes: ClassNameMap<style>;
  parentCloseFunc: any;
  // parentSelectFunc: any;
  // parentExecuteFunc: any;
  editData: any;
  open: boolean;
}

class CreateNew extends React.Component<Props, {}> {
  public render() {
    const { classes, editData, open } = this.props;

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

    // 勤務先分類
    const officeTypes = [
      "大学病院",
      "病院",
      "診療所",
      "保険薬局",
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
      <div>
        <Dialog
          className={classes.dialog}
          open={open}
          onClose={this.handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">
            {Object.keys(editData).length ? "会員情報変更" : "会員情報新規登録"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              以下のフォームに必要事項をご入力ください。「*」マークの箇所は必ずご入力ください。
            </DialogContentText>

            <Typography variant="subheading" className={classes.paper}>
              会員様情報
            </Typography>

            <Paper className={classes.paper}>
              {/* 会員名（漢字） */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  required
                  name="memberName"
                  label="会員名（漢字）"
                  placeholder="例：大住　一郎"
                  helperText="全角でご入力ください。苗字と名前の間には全角スペースを入れてください。"
                  value={editData.memberName ? editData.memberName : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 会員名（カナ） */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  required
                  name="memberNameKana"
                  label="会員名（カナ）"
                  placeholder="例：ダイスミ　イチロウ"
                  helperText="全角カナでご入力ください。苗字と名前の間には全角スペースを入れてください。"
                  value={editData.memberNameKana ? editData.memberNameKana : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 職種 */}
              <FormControl required className={classes.formControl}>
                <FormLabel className={classes.margin} component="legend">職種</FormLabel>
                <RadioGroup
                  name="jobType"
                  className={classNames(classes.group, classes.margin)}
                  value={editData.occupation ? editData.occupation : ""}
                  onChange={this.handleChangeRadio}
                >
                  {jobTypes.map((jobType) => (
                    <FormControlLabel
                      control={<Radio color="primary" />}
                      key={"jobType_" + jobType}
                      value={jobType}
                      label={jobType}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              {/* 職種 その他 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  name="jobTypeOther"
                  label="職種 その他"
                  helperText="職種でその他を選択した場合にご入力ください。"
                  value={editData.jobTypeOther ? editData.jobTypeOther : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 医療機関経営者 */}
              <FormControl required className={classes.formControl}>
                <FormControlLabel
                  className={classes.margin}
                  control={
                    <Checkbox
                      checked={editData.isManager}
                      onChange={this.handleChange}
                      value="isManager"
                      color="primary"
                    />
                  }
                  label="医療機関経営者である"
                />
              </FormControl>

              {/* 診療科目 */}
              <FormControl className={classes.formControl}>
                <FormLabel className={classes.margin} component="legend">診療科目</FormLabel>
                <RadioGroup
                  name="medicalCourse"
                  className={classNames(classes.group, classes.margin)}
                  value={editData.medicalExaminationSubject ? editData.medicalExaminationSubject : ""}
                  onChange={this.handleChangeRadio}
                >
                  {medicalCourses.map((medicalCourse) => (
                    <FormControlLabel
                      control={<Radio color="primary" />}
                      key={"medicalCourse_" + medicalCourse}
                      value={medicalCourse}
                      label={medicalCourse}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              {/* 診療科目 その他 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  name="medicalCourseOther"
                  label="診療科目 その他"
                  helperText="診療科目にその他を選択した場合にご入力ください。"
                  value={editData.medicalCourseOther ? editData.medicalCourseOther : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 勤務先分類 */}
              <FormControl required className={classes.formControl}>
                <FormLabel className={classes.margin} component="legend">勤務先分類</FormLabel>
                <RadioGroup
                  name="officeType"
                  className={classNames(classes.group, classes.margin)}
                  value={editData.office ? editData.office : ""}
                  onChange={this.handleChangeRadio}
                >
                  {officeTypes.map((officeType) => (
                    <FormControlLabel
                      control={<Radio color="primary" />}
                      key={"officeType_" + officeType}
                      value={officeType}
                      label={officeType}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              {/* 勤務先名 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  required
                  name="officeName"
                  label="勤務先名"
                  helperText="全角50文字以内でご入力ください。"
                  value={editData.officeName ? editData.officeName : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 所属・役職 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  name="workPosition"
                  label="所属・役職"
                  helperText="全角20文字以内でご入力ください。"
                  value={editData.workPosition ? editData.workPosition : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* チーム */}
              <FormControl className={classes.formControl}>
                <FormLabel className={classes.margin} component="legend">チーム</FormLabel>
                <RadioGroup
                  name="team"
                  className={classNames(classes.group, classes.margin)}
                  value={editData.team ? editData.team : ""}
                  onChange={this.handleChangeRadio}
                >
                  {teams.map((team) => (
                    <FormControlLabel
                      control={<Radio color="primary" />}
                      key={"team_" + team}
                      value={team}
                      label={team}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              {/* 勤務先住所 郵便番号 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  required
                  name="officePostCode"
                  label="勤務先住所 郵便番号"
                  placeholder="例）1040031"
                  helperText="ハイフンをつけずに半角数字でご入力ください。"
                  value={editData.officePostCode ? editData.officePostCode : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 勤務先住所 都道府県 */}
              <FormControl className={classes.formControl}>
                <FormLabel className={classes.margin} component="legend">勤務先住所 都道府県</FormLabel>
                <Select
                  className={classes.margin}
                  name="prefecture"
                  value={editData.prefecture ? editData.prefecture : []}
                  onChange={this.handleChange}
                  input={<Input />}
                >
                  {prefectures.map((prefecture) => (
                    <MenuItem key={prefecture} value={prefecture} >{prefecture}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* 勤務先住所 市区郡 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  required
                  name="officeCity"
                  label="勤務先住所 市区郡"
                  placeholder="例）中央区"
                  helperText="全角11文字以内でご入力ください。"
                  value={editData.officeCity ? editData.officeCity : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 勤務先住所 町村番地 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  required
                  name="officeVillage"
                  label="勤務先住所 町村番地"
                  placeholder="例）京橋１－１３－１"
                  helperText="全角35文字以内でご入力ください。"
                  value={editData.officeVillage ? editData.officeVillage : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 勤務先代表電話番号 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  required
                  name="officeTel"
                  label="勤務先代表電話番号"
                  placeholder="例）0311112222"
                  helperText="ハイフンをつけずに半角数字でご入力ください。"
                  value={editData.officeTel ? editData.officeTel : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 個人コード */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  name="personalCode"
                  label="個人コード"
                  value={editData.personalCode ? editData.personalCode : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 施設コード */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  name="facilityCode"
                  label="施設コード"
                  value={editData.facilityCode ? editData.facilityCode : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 担当MR */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  name="MRCode"
                  label="担当MR"
                  value={editData.MRCode ? editData.MRCode : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* メールアドレス */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  required
                  name="mailAddress"
                  label="メールアドレス"
                  placeholder="例：ichiro@ds-pharma.co.jp"
                  helperText="半角英数字でご入力ください。"
                  value={editData.mailAddress ? editData.mailAddress : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* メールアドレス確認 */}
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  required
                  name="confirmMailAddress"
                  helperText="確認の為もう一度入力してください。"
                  value={editData.confirmMailAddress ? editData.confirmMailAddress : ""}
                  onChange={this.handleChange}
                />
              </FormControl>

              {/* 担当MRのメール利用 */}
              <FormControl className={classes.formControl}>
                <FormLabel className={classes.margin} component="legend">担当MRからのご連絡に上記メールアドレスの使用</FormLabel>
                <RadioGroup
                  name="canMail"
                  className={classNames(classes.group, classes.margin)}
                  value={editData.canMail ? editData.canMail : ""}
                  onChange={this.handleChangeRadio}
                >
                  {canMails.map((canMail) => (
                    <FormControlLabel
                      control={<Radio color="primary" />}
                      key={"officePrefecture_" + canMail}
                      value={canMail}
                      label={canMail}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

            </Paper>

            <Typography variant="subheading" gutterBottom>
              メールマガジン配信設定
            </Typography>

            <Paper className={classes.paper}>

              <FormLabel className={classes.margin} component="legend">総合メールマガジン</FormLabel>

              <div className={classNames(classes.formControl, classes.margin)}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={editData.jwo}
                      onChange={this.handleChange}
                      value="jwo"
                    />
                  }
                  label="JWO"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={editData.nejm}
                      onChange={this.handleChange}
                      value="nejm"
                    />
                  }
                  label="NEJM"
                />
              </div>

              <FormLabel className={classes.margin} component="legend">領域別メールマガジン</FormLabel>

              <div className={classNames(classes.formControl, classes.margin)}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={editData.cid}
                      onChange={this.handleChange}
                      value="cid"
                    />
                  }
                  label="CID"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={editData.ll}
                      onChange={this.handleChange}
                      value="ll"
                    />
                  }
                  label="LL"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={editData.dm}
                      onChange={this.handleChange}
                      value="dm"
                    />
                  }
                  label="DM"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={editData.pharmacist}
                      onChange={this.handleChange}
                      value="pharmacist"
                    />
                  }
                  label="薬剤師"
                />
              </div>
            </Paper>

            <Typography variant="subheading" gutterBottom>
              メモ
            </Typography>

            <Paper className={classes.paper}>
              <FormControl className={classes.formControl}>
                <TextField
                  className={classes.margin}
                  multiline
                  rows="2"
                  name="memo"
                  value={editData.memo ? editData.memo : ""}
                  onChange={this.handleChange}
                />
              </FormControl>
            </Paper>

            <DialogActions>
              <Button onClick={this.handleClose} fullWidth={true} variant="outlined">
                キャンセル
              </Button>
              <Button onClick={this.handleExecute} fullWidth={true} variant="outlined" color="primary">
                {Object.keys(editData).length ? "変更" : "登録"}
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    // this.props.parentSelectFunc(event.target.name, event.target.value);
  }

  private handleChangeRadio = (event: React.ChangeEvent<{}>, value: string) => {
    // this.props.parentSelectFunc(event.target.name, event.target.value);
  }

  private handleClose = () => {
    this.props.parentCloseFunc();
  }

  private handleExecute = () => {
    // this.props.parentExecuteFunc(this.props.editData);
    this.handleClose();
  }
}

export default decorate<Props>(CreateNew);
