import React from "react";
import styled from "styled-components";
import { SearchTitle } from "../.././../components/header/index";

class Writer extends React.PureComponent {
  render() {
    const { writerList, changePage, page } = this.props;

    const newList = writerList.slice((page - 1) * 5, page * 5);

    return (
      <WriteWrapper>
        <SearchTitle className='title'>
          <span>推荐作者</span>
          <span>
            换一换 &nbsp;
            <i
              ref={(icon) => {
                this.spinIcon = icon;
              }}
              className='iconfont spin'
              onClick={() => changePage(this.spinIcon)}
            >
              &#xe851;
            </i>
          </span>
        </SearchTitle>
        {newList.map((item) => (
          <WriteItem key={item.id}>
            <span className='pic'>
              <img alt='' src={item.url} />
            </span>
            <Content>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </Content>
            <Follow>关注+</Follow>
          </WriteItem>
        ))}

        <LookMore>查看全部 &nbsp;{">"}</LookMore>
      </WriteWrapper>
    );
  }
}

export default Writer;

const WriteWrapper = styled.div`
  width: 280px;

  padding: 0 0 0 15px;
  .title {
    border: none;
  }
`;

const WriteItem = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  .pic {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }
`;

const Content = styled.div`
  padding: 0 0 0 15px;
  width: 170px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  h3 {
    font-size: 14px;
    line-height: 24px;
  }
  p {
    font-size: 12px;
    line-height: 18px;
    color: #969696;
  }
`;

const Follow = styled.a`
  display: inline-block;
  padding-top: 5px;
  font-size: 13px;
  color: #42c02e;
`;

const LookMore = styled.button`
  margin-top: 30px;
  padding: 7px 7px 7px 12px;
  width: 100%;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
`;
