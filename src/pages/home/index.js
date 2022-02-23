import { useEffect, useState } from "react";
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
    showTop,
    articlePage,
    getList,
    handleMore,
    bindScroll,
  } = props;

  const [count, setCount] = useState(1); //换一换旋转
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page > Math.ceil(writerList.length / 5)) {
      setPage(1);
    }
  }, [page, writerList.length]);

  // TODO: 点击换一换，按钮旋转，页面切换
  const changePage = (spinIcon) => {
    setCount(count + 1);
    setPage(page + 1);
    spinIcon.style.transform = "rotate(0deg)";
    const rotate = spinIcon.style.transform.replace(
      /[0-9]/gi,
      Number(count * 360)
    );
    spinIcon.style.transform = rotate;
  };

  useEffect(() => {
    getList();
    // 挂载滚动监听
    window.addEventListener("scroll", bindScroll);

    return () => {
      // 挂载滚动监听
      window.removeEventListener("scroll", bindScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTop = () => {
    //TODO:回到顶部
    window.scrollTo(0, 0);
  };

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
        <Writer writerList={writerList} changePage={changePage} page={page} />
      </HomeRight>
      {/* 监听滚动距离，大于400显示BackTop */}
      {showTop ? <BackTop onClick={handleTop}>TOP</BackTop> : null}
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
    showTop: state.getIn(["home", "showTop"]),
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

    bindScroll() {
      // 获取从顶部滚动的距离
      const length = document.documentElement.scrollTop;
      const showTop = length > 400;
      dispatch({
        type: "scroll_top",
        payload: {
          showTop,
        },
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

const BackTop = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  border: 1px solid #5c5c5c;
`;
