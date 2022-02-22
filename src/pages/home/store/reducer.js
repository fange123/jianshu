import { fromJS } from "immutable";
import pic01 from "../../../static/images/pic01.jpeg";
import pic02 from "../../../static/images/pic02.jpeg";
import pic03 from "../../../static/images/pic03.jpeg";
import pic04 from "../../../static/images/pic04.jpeg";

const defaultState = fromJS({
  topicList: [
    {
      url: pic01,
      title: "社会热点",
      id: 1,
    },
    {
      url: pic02,
      title: "时事新闻",
      id: 2,
    },
    {
      url: pic03,
      title: "最新消息",
      id: 3,
    },
    {
      url: pic04,
      title: "手绘",
      id: 4,
    },
    {
      url: pic02,
      title: "时事新闻",
      id: 5,
    },
    {
      url: pic03,
      title: "最新消息",
      id: 6,
    },
    {
      url: pic04,
      title: "手绘",
      id: 7,
    },
  ],
  articleList: [
    {
      id: 1,
      title: "我国第一批“丁克”已经退休，没有孩子的晚年，真的很不一般",
      content:
        "文/谷月 图片/网络丁克”一词最早来源于美国嬉皮士盛行的时代，进入我国是上个世纪80年代。丁克的名称来自英文DoubleIncome No...",
      name: "春风六六火",
      collection: "127.9",
      love: 200,
      commend: 550,
      money: 5,
      pic: pic01,
    },
    {
      id: 2,
      title: "第一次被约稿",
      content:
        "俗话说，穷在深山有远亲。 昨天，一位小姐妹向我约稿了，让我写她的老公，一位博士研究生的成长史。 一瞬间，心中的温暖，山高水长。 哎呀，我也谦虚了...",
      name: "谷月菇凉",
      collection: "127.9",
      love: 500,
      commend: 850,
      money: 25,
      pic: pic04,
    },
    {
      id: 3,
      title: "全是恨",
      content:
        "今天吵架，老公跟他爸妈吵，还带着我。 反正大家一起吵架。 婆婆问我为什么不给老大喂奶。我居然忘记当年她各种暗示我去上班挣钱的事情。（我的思路居然...",
      name: "春风六六火",
      collection: "127.9",
      love: 90,
      commend: 850,
      money: 50,
      pic: "",
    },
    {
      id: 4,
      title: "缺爱的人，一下子就能看出来",
      content:
        "世界上的人，每一个，都总是很不一样。 会有着不同的长相，不同的过往，也会有着不同的性格，以及不同的认知。 就像有的人活泼，有的人沉默，有的人正直...",
      name: "春风六六火",
      collection: "127.9",
      love: 90,
      commend: 850,
      money: 50,
      pic: "",
    },
    {
      id: 5,
      title: "一个人不好过",
      content:
        "昨天因为宝爸独自回老家过年了，我一个人在家里哭了两天，在夜里就胡思乱想，大年三十，本该是吃团圆饭热热闹闹开开心心的，今年我却被落单了，我越哭越伤...",
      name: "春风六六火",
      collection: "127.9",
      love: 90,
      commend: 850,
      money: 50,
      pic: "",
    },
  ],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "get_topic_list":
      return state.set("home", state.topicList);
    case "get_article_list":
      return state.set("home", state.articleList);

    default:
      return state;
  }
};
export default reducer;
