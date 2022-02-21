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
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "get_topic_list":
      return state.set("home", state.topicList);

    default:
      return state;
  }
};
export default reducer;
