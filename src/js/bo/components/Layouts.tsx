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

const data = [
  // tslint:disable-next-line:max-line-length
  { id: 1, memberId: 58516480170395, memberName: "中村テスト", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "内科", office: "aaa病院", responsibleMr: "", createdAt: "41836.7407523148", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 2, memberId: 58420932343251, memberName: "テスト2018070601", memberCode: "本会員", occupation: "臨床工学技士", medicalExaminationSubject: "", office: "xxx病院", responsibleMr: "AAAAAA", createdAt: "41825.6819791667", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 3, memberId: 58419943589250, memberName: "tanaka　既存職種医師　taro", memberCode: "仮会員", occupation: "医師", medicalExaminationSubject: "外科", office: "フリーランス", responsibleMr: "takasi", createdAt: "41825.5675347222", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 4, memberId: 58419908281018, memberName: "tanaka　新看護師　taro", memberCode: "仮会員", occupation: "看護師", medicalExaminationSubject: "", office: "看護師", responsibleMr: "tanaka　taro", createdAt: "41825.5634490741", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 5, memberId: 58419895493424, memberName: "tanaka　介護福祉士 　taro", memberCode: "仮会員", occupation: "介護福祉士", medicalExaminationSubject: "", office: "介護福祉士 ", responsibleMr: "tanaka　taro", createdAt: "41825.5619675926", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 6, memberId: 58419370455728, memberName: "tanaka　救急救命士　taro", memberCode: "仮会員", occupation: "救急救命士", medicalExaminationSubject: "", office: "救急救命士", responsibleMr: "tanaka　taro", createdAt: "41825.5012037037", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 7, memberId: 58403501893221, memberName: "tanaka　ケアマネージャー　taro", memberCode: "仮会員", occupation: "ケアマネージャー", medicalExaminationSubject: "", office: "診療所A", responsibleMr: "tanaka　taro", createdAt: "41823.6645601852", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 8, memberId: 58343981645842, memberName: "職種　テスト", memberCode: "本会員", occupation: "その他", medicalExaminationSubject: "", office: "職種　テスト", responsibleMr: "tanaka　taro", createdAt: "41816.7756481481", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 9, memberId: 58343825428498, memberName: "職種　テスト", memberCode: "本会員", occupation: "薬剤師", medicalExaminationSubject: "", office: "職種　テスト", responsibleMr: "", createdAt: "41816.7575694444", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 10, memberId: 58326865417198, memberName: "tanaka　taro", memberCode: "仮会員", occupation: "医師", medicalExaminationSubject: "内科", office: "tanaka", responsibleMr: "", createdAt: "41814.7946064815", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 11, memberId: 58154824428788, memberName: "tanaka　テスト", memberCode: "仮会員", occupation: "医師", medicalExaminationSubject: "内科", office: "tanakaテスト", responsibleMr: "", createdAt: "41794.8824537037", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 12, memberId: 58118447069040, memberName: "ナビ", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "内科", office: "株式会社XXX", responsibleMr: "tanaka　taro", createdAt: "41790.6721064815", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 13, memberId: 58099772723391, memberName: "中村テスト", memberCode: "仮会員", occupation: "看護師", medicalExaminationSubject: "", office: "ああああ", responsibleMr: "", createdAt: "41788.5107291667", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 14, memberId: 57928432469778, memberName: "内山　手簀戸４", memberCode: "仮会員", occupation: "看護師", medicalExaminationSubject: "", office: "4診療所", responsibleMr: "", createdAt: "41768.6796759259", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 15, memberId: 57908180036098, memberName: "安田", memberCode: "仮会員", occupation: "看護師", medicalExaminationSubject: "", office: "テスト", responsibleMr: "", createdAt: "41766.3356481481", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 16, memberId: 57798379961221, memberName: "内山　手簀戸３", memberCode: "本会員", occupation: "看護師", medicalExaminationSubject: "", office: "ほげほげ保険薬局", responsibleMr: "", createdAt: "41753.6273032407", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 17, memberId: 57780666841848, memberName: "内山　手簀戸２", memberCode: "仮会員", occupation: "医師", medicalExaminationSubject: "内科", office: "ほげほげ大学病院", responsibleMr: "", createdAt: "41751.5771759259", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 18, memberId: 57678085341124, memberName: "内山 手簀戸", memberCode: "仮会員", occupation: "医師", medicalExaminationSubject: "内科", office: "ほげほげ大学病院", responsibleMr: "", createdAt: "41739.7043171296", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 19, memberId: 57505623265630, memberName: "メルマガ登録テスト", memberCode: "仮会員", occupation: "医師", medicalExaminationSubject: "内科", office: "メルマガ登録テスト", responsibleMr: "", createdAt: "41719.7434259259", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 20, memberId: 57211737165953, memberName: "新規　フロント", memberCode: "仮会員", occupation: "薬剤師", medicalExaminationSubject: "", office: "新規　フロント", responsibleMr: "tanaka　taro", createdAt: "41685.7288310185", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 21, memberId: 57211354603213, memberName: "新規　フロント", memberCode: "仮会員", occupation: "薬剤師", medicalExaminationSubject: "", office: "新規　フロント", responsibleMr: "", createdAt: "41685.6845601852", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 22, memberId: 57211336235376, memberName: "新規　保留登録", memberCode: "本会員", occupation: "薬剤師", medicalExaminationSubject: "", office: "新規　保留登録", responsibleMr: "tanaka　taro", createdAt: "41685.6824305556", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 23, memberId: 57211320716888, memberName: "新規　本登録", memberCode: "本会員", occupation: "薬剤師", medicalExaminationSubject: "", office: "新規　本登録", responsibleMr: "tanaka　taro", createdAt: "41685.6806365741", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 24, memberId: 57004602928920, memberName: "テスト　テスト", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "内科", office: "テスト　病院", responsibleMr: "", createdAt: "41661.7549652778", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 25, memberId: 56909567753895, memberName: "仮会員", memberCode: "仮会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "やまだたろう", createdAt: "41650.7555208333", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 26, memberId: 56647921840558, memberName: "Windows10　却下", memberCode: "仮会員", occupation: "薬剤師", medicalExaminationSubject: "", office: "新環境検証医院", responsibleMr: "tanaka　taro", createdAt: "41620.4724305556", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 27, memberId: 56647859046431, memberName: "Windows10　次郎", memberCode: "マイページ会員", occupation: "医師", medicalExaminationSubject: "消化器内科", office: "新環境検証医院３", responsibleMr: "MR２", createdAt: "41620.465162037", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 28, memberId: 56647771939660, memberName: "tanaka　taro", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "大学病院", responsibleMr: "tanaka　taro", createdAt: "41620.4550810185", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 29, memberId: 56647684119074, memberName: "Windows10　太郎", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "内科", office: "新環境検証医院", responsibleMr: "tanaka　taro", createdAt: "41620.4449189815", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 30, memberId: 55965664831475, memberName: "鈴木　一郎 ", memberCode: "マイページ会員", occupation: "医師", medicalExaminationSubject: "内科", office: "三丁目の２軒め", responsibleMr: "太郎", createdAt: "41541.5075", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 31, memberId: 55700022775398, memberName: "計測確認", memberCode: "仮会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "計測確認", responsibleMr: "", createdAt: "41510.7618865741", via: "WEB" },
  // tslint:disable-next-line:max-line-length
  { id: 32, memberId: 55026100295961, memberName: "ＭＲ経由　計測確認１００", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 33, memberId: 55026100291789, memberName: "ＭＲ経由　計測確認０９９", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 34, memberId: 55026100287561, memberName: "ＭＲ経由　計測確認０９８", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 35, memberId: 55026100283387, memberName: "ＭＲ経由　計測確認０９７", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 36, memberId: 55026100279198, memberName: "ＭＲ経由　計測確認０９６", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 37, memberId: 55026100274940, memberName: "ＭＲ経由　計測確認０９５", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 38, memberId: 55026100270869, memberName: "ＭＲ経由　計測確認０９４", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 39, memberId: 55026100263923, memberName: "ＭＲ経由　計測確認０９３", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 40, memberId: 55026100259725, memberName: "ＭＲ経由　計測確認０９２", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 41, memberId: 55026100255569, memberName: "ＭＲ経由　計測確認０９１", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 42, memberId: 55026100251371, memberName: "ＭＲ経由　計測確認０９０", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 43, memberId: 55026100247232, memberName: "ＭＲ経由　計測確認０８９", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 44, memberId: 55026100243165, memberName: "ＭＲ経由　計測確認０８８", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 45, memberId: 55026100238839, memberName: "ＭＲ経由　計測確認０８７", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 46, memberId: 55026100234781, memberName: "ＭＲ経由　計測確認０８６", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 47, memberId: 55026100230681, memberName: "ＭＲ経由　計測確認０８５", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 48, memberId: 55026100226513, memberName: "ＭＲ経由　計測確認０８４", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 49, memberId: 55026100222310, memberName: "ＭＲ経由　計測確認０８３", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 50, memberId: 55026100218133, memberName: "ＭＲ経由　計測確認０８２", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 51, memberId: 55026100214093, memberName: "ＭＲ経由　計測確認０８１", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 52, memberId: 55026100209885, memberName: "ＭＲ経由　計測確認０８０", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 53, memberId: 55026100205694, memberName: "ＭＲ経由　計測確認０７９", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 54, memberId: 55026100201525, memberName: "ＭＲ経由　計測確認０７８", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615972222", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 55, memberId: 55026100197341, memberName: "ＭＲ経由　計測確認０７７", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615856481", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 56, memberId: 55026100193177, memberName: "ＭＲ経由　計測確認０７６", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615856481", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 57, memberId: 55026100188959, memberName: "ＭＲ経由　計測確認０７５", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615856481", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 58, memberId: 55026100184832, memberName: "ＭＲ経由　計測確認０７４", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615856481", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 59, memberId: 55026100180724, memberName: "ＭＲ経由　計測確認０７３", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615856481", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 60, memberId: 55026100176493, memberName: "ＭＲ経由　計測確認０７２", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615856481", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 61, memberId: 55026100172349, memberName: "ＭＲ経由　計測確認０７１", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615856481", via: "MR" },
  // tslint:disable-next-line:max-line-length
  { id: 62, memberId: 55026100168181, memberName: "ＭＲ経由　計測確認０７０", memberCode: "本会員", occupation: "医師", medicalExaminationSubject: "心療内科", office: "AAA病院", responsibleMr: "tanaka　taro", createdAt: "41432.7615856481", via: "MR" },
];

const drawerWidth = 240;

type Styles = "root" | "appFrame" | "appBar" | "toolbar" | "appTitle"
  | "appBarShift" | "appBarShiftLeft" | "menuButton" | "hide" | "drawerPaper"
  | "drawerHeader" | "content" | "contentLeft" | "contentShift" | "contentShiftLeft";

const decorate = withStyles(({ spacing, palette, transitions }) => ({
  appBar: {
    position: "absolute" as "absolute",
    transition: transitions.create(["margin", "width"], {
      duration: transitions.duration.leavingScreen,
      easing: transitions.easing.sharp,
    }),
  },
  appBarShift: {
    transition: transitions.create(["margin", "width"], {
      duration: transitions.duration.enteringScreen,
      easing: transitions.easing.easeOut,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
  },
  appBarShiftLeft: {
    marginLeft: drawerWidth,
  },
  appFrame: {
    display: "flex",
    overflow: "hidden",
    position: "relative" as "relative",
    width: "100%",
    zIndex: 1,
  },
  appTitle: {
    flexGrow: 1,
  },
  content: {
    backgroundColor: palette.background.default,
    flexGrow: 1,
    marginTop: "64px",
    overflow: "auto",
    padding: spacing.unit * 3,
    transition: transitions.create("margin", {
      duration: transitions.duration.leavingScreen,
      easing: transitions.easing.sharp,
    }),
  },
  contentLeft: {
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: transitions.create("margin", {
      duration: transitions.duration.enteringScreen,
      easing: transitions.easing.easeOut,
    }),
  },
  contentShiftLeft: {
    marginLeft: 0,
  },
  drawerHeader: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    minHeight: "56px",
    padding: "0 8px",
  },
  drawerPaper: {
    position: "relative" as "relative",
    width: drawerWidth,
  },
  hide: {
    display: "none",
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  root: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: "24px",
  },
}));

// propsの為のインターフェースを作成
interface Props {
  classes: ClassNameMap<Styles>;
  username: string;
}

interface State {
  auth: boolean;
  openSideMenu: boolean;
  // anchorElSide: DrawerProps['anchor'];
  anchorElAccount: any;
}

export class Layouts extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      anchorElAccount: null,
      auth: true,
      openSideMenu: false,
    };
  }

  public render(): JSX.Element {
    const { classes } = this.props;
    const { auth, openSideMenu, anchorElAccount } = this.state;
    const openAccount = Boolean(anchorElAccount);

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: openSideMenu,
              [classes.appBarShiftLeft]: openSideMenu,
            })}
          >
            <Toolbar disableGutters={!openSideMenu} className={classes.toolbar}>
              {/* メニュー */}
              <Tooltip title="メニュー">
                <IconButton
                  onClick={this.handleSideMenu}
                  className={classNames(classes.menuButton, openSideMenu && classes.hide)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>

              {/* タイトル */}
              <Typography variant="title" color="inherit" className={classes.appTitle} noWrap>
                管理者サイト(バックオフィスシステム)
              </Typography>

              {/* 認証、ユーザー関連ボタン */}
              {auth && (
                <div>
                  <IconButton
                    aria-haspopup="true"
                    onClick={this.handleAccountMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElAccount}
                    anchorOrigin={{
                      horizontal: "right",
                      vertical: "top",
                    }}
                    transformOrigin={{
                      horizontal: "right",
                      vertical: "top",
                    }}
                    open={openAccount}
                    onClose={this.handleCloseAuth}
                  >
                    <MenuItem onClick={this.handleCloseAuth}>パスワード変更</MenuItem>
                    <MenuItem onClick={this.handleCloseAuth}>ログアウト</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>

          {/* サイドメニュー */}
          <Drawer
            variant="persistent"
            anchor="left"
            open={openSideMenu}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {/* メニューを閉じるアイコン */}
            <Tooltip title="メニューを閉じる" className={classes.drawerHeader}>
              <IconButton onClick={this.handleCloseMenu}>
                <ChevronLeftIcon />
              </IconButton>
            </Tooltip>

            {/* 仕切り線 */}
            <Divider />

            {/* メニュー */}
            <SideMenu />
          </Drawer>

          {/* メインコンテンツ */}
          <main
            className={classNames(classes.content, classes.contentLeft, {
              [classes.contentShift]: openSideMenu,
              [classes.contentShiftLeft]: openSideMenu,
            })}
          >
            {/* 会員一覧 */}
            <Members data={data} />
          </main>
        </div>
      </div>
      //TODO 画面遷移の仕組みを入れる
    );
  }

  private handleSideMenu = (event: React.MouseEvent) => {
    this.setState({ openSideMenu: true });
  }

  private handleAccountMenu = (event: React.MouseEvent) => {
    this.setState({ anchorElAccount: event.currentTarget });
  }

  private handleCloseMenu = () => {
    this.setState({
      openSideMenu: false,
    });
  }

  private handleCloseAuth = () => {
    this.setState({
      anchorElAccount: null,
    });
  }
}

// エクスポート定義
export default decorate<Props>(Layouts);
