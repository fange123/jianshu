import { useEffect } from "react";
import styled from "styled-components";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import Topic from "./components/Topic";
import { connect } from "react-redux";
import axios from "axios";

const Home = (props) => {
  const {
    topicList,
    articleList,
    writerList,
    articlePage,
    getList,
    handleMore,
  } = props;

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeWrapper>
      <HomeLeft>
        <img
          className='banner-img'
          alt=''
          src='https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        />
        <Topic topicList={topicList} />
        <List
          articleList={articleList}
          handleMore={() => handleMore(articlePage)}
        />
      </HomeLeft>

      <HomeRight>
        <Recommend />
        <Writer writerList={writerList} />
      </HomeRight>
    </HomeWrapper>
  );
};

const mapStateToProps = (state) => {
  // TODO: 从store取数据
  return {
    topicList: state.getIn(["home", "topicList"]).toJS(),
    articleList: state.getIn(["home", "articleList"]).toJS(),
    writerList: state.getIn(["home", "writerList"]).toJS(),
    articlePage: state.getIn(["home", "articlePage"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getList() {
      axios.get("/api/home.json").then((response) => {
        const data = response.data.data;
        // TODO: 给store存数据
        dispatch({
          type: "get_list",
          payload: {
            topicList: data.topicList,
            articleList: data.articleList,
            writerList: data.writeList,
          },
        });
      });
    },

    handleMore(articlePage) {
      axios.get(`/api/homeList.json?page=${articlePage}`).then((response) => {
        const data = response.data.data;
        dispatch({
          type: "more_list",
          payload: {
            moreList: data.list,
            articlePage: articlePage + 1,
          },
        });
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const HomeWrapper = styled.div`
  width: 960px;
  height: 300px;
  margin: 0 auto;
  display: flex;
`;

const HomeLeft = styled.div`
  width: 640px;
  padding: 30px 0 0;
  margin-left: 20px;

  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 6px;
  }
`;

const HomeRight = styled.div`
  width: 280px;
  padding: 30px 0 0 15px;
`;
