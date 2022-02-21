import styled from "styled-components";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import Topic from "./components/Topic";
import { connect } from "react-redux";

const Home = (props) => {
  const { list } = props;
  return (
    <HomeWrapper>
      <HomeLeft>
        <img
          className='banner-img'
          alt=''
          src='https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        />
        <Topic topicList={list.topicList} />
        <List />
      </HomeLeft>

      <HomeRight>
        <Recommend />
        <Writer />
      </HomeRight>
    </HomeWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.get("home", "topicList").toJS(),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
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
  margin-left: 40px;

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
