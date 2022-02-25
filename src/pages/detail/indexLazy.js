import { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";

const IndexLazy = (props) => {
  const { detail, content, writeList, getDetail } = props;
  const { time, words, read, money, collect, title, subTitle, imgUrl } = detail;

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <DetailWrapper>
      <ContentWrapper>
        <LeftWrapper>
          <h1>{title}</h1>
          <TitleContent>
            <img alt='' src={imgUrl} />
            <div>
              <div>
                <span className='title'>{subTitle}</span>
                <button className='follow'>关注+</button>
              </div>
              <div className='detail'>
                <span className='collect'>
                  <i className='iconfont'>&#xe76f;</i>
                  {collect}
                </span>
                <span className='desc'>{time}</span>
                <span className='desc'>字数 {words}</span>
                <span className='desc'>阅读 {read}</span>
              </div>
            </div>
          </TitleContent>
          <ContentDetail dangerouslySetInnerHTML={{ __html: content }} />
        </LeftWrapper>
        <RightWrapper>
          <WriterContent>
            <TitleContent>
              <img alt='' src={imgUrl} />
              <div>
                <div>
                  <span className='title'>一个有才情的...</span>
                  <button className='follow'>关注+</button>
                </div>
                <div className='detail'>
                  <span className='desc'>总资产 {money}</span>
                </div>
              </div>
            </TitleContent>
            <WriterList>
              {writeList.map((item) => (
                <ListItem key={item.id}>
                  <h3>{item.title}</h3>
                  <p> {item.desc}</p>
                </ListItem>
              ))}
            </WriterList>
          </WriterContent>
        </RightWrapper>
      </ContentWrapper>
    </DetailWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    writeList: state.getIn(["detail", "writeList"]).toJS(),
    detail: state.getIn(["detail", "detail"]).toJS(),
    content: state.getIn(["detail", "content"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDetail() {
      axios.get("/api/detail.json").then((response) => {
        const data = response.data.data;
        dispatch({
          type: "change_detail",
          payload: data,
        });
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IndexLazy);

const WriterContent = styled.div`
  background-color: #fff;
  padding: 16px;
`;

const WriterList = styled.div`
  border-top: 1px solid #eee;
`;

const ListItem = styled.div`
  padding: 8px 5px;
  h3 {
    font-size: 14px;
    line-height: 24px;
    color: #2d2d2d;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  p {
    font-size: 12px;
    color: #969696;
  }
`;

const DetailWrapper = styled.div`
  padding: 10px 0;
  background-color: #f9f9f9;
  width: 100%;
  height: 100%;
`;
const ContentWrapper = styled.div`
  width: 1032px;
  padding: 10px 16px 0;
  display: flex;
  margin: 0 auto;
`;

const LeftWrapper = styled.div`
  width: 660px;
  padding: 32px;
  background-color: #fff;
  margin-right: 10px;
  min-height: calc(100vh - 66px);
  font-size: 16px;
  h1 {
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
    margin-bottom: 32px;
    color: #404040;
  }
`;

const TitleContent = styled.div`
  height: 50px;
  display: flex;
  margin-bottom: 30px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .title {
    font-size: 16px;
    font-weight: 500;
    margin-right: 8px;
  }
  .follow {
    padding: 2px 9px;
    color: #ec7259;
    background-color: #fff;
    border: 1px solid #ec7259;
    outline: none;
    border-radius: 50px;
    cursor: pointer;
  }
  .detail {
    color: #969696;
    font-size: 14px;
    margin-top: 10px;
    span {
      margin-right: 10px;
    }
  }
  .collect {
    .iconfont {
      color: #ec7259;
      font-size: 13px;
      margin-right: 5px;
    }
  }
`;

const ContentDetail = styled.div`
  p {
    margin-bottom: 20px;
    word-break: break-word;
    font-weight: 400;
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const RightWrapper = styled.div`
  flex: 1;
`;
