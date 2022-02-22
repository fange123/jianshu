import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  writerList: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    //TODO:从请求拿数据存到store（总部）里面
    case "fetch_list":
      return state.merge({
        topicList: fromJS(action.payload.topicList),
        articleList: fromJS(action.payload.articleList),
        writerList: fromJS(action.payload.writerList),
      });

    //TODO: 把store里的数据给每一个分部（home）
    case "get_topic_list":
      return state.set("home", state.topicList);
    case "get_article_list":
      return state.set("home", state.articleList);
    case "get_writer_list":
      return state.set("home", state.writerList);

    default:
      return state;
  }
};
export default reducer;
