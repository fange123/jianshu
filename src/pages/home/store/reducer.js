import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  writerList: [],
  articlePage: 1,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    //TODO:从请求拿数据存到store(home)里面
    case "get_list":
      return state.merge({
        topicList: fromJS(action.payload.topicList),
        articleList: fromJS(action.payload.articleList),
        writerList: fromJS(action.payload.writerList),
      });
    case "more_list":
      return state.merge({
        articleList: fromJS([
          ...state.get("articleList"),
          ...action.payload.moreList,
        ]),
        articlePage: action.payload.articlePage,
      });

    default:
      return state;
  }
};
export default reducer;
