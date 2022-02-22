import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  writerList: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "get_topic_list":
      return state.set("home", state.topicList);
    case "get_article_list":
      return state.set("home", state.articleList);
    case "get_writer_list":
      return state.set("home", state.writerList);
    case "fetch_list":
      console.log(action);
      return state.merge({
        topicList: fromJS(action.payload.topicList),
        articleList: fromJS(action.payload.articleList),
        writerList: fromJS(action.payload.writerList),
      });

    default:
      return state;
  }
};
export default reducer;
