import styled from "styled-components";

const Topic = (props) => {
  const { topicList } = props;
  return (
    <TopicWrapper>
      {topicList?.map((item) => (
        <TopicItem key={item.id}>
          <img className='topic-img' alt='' src={item.url} />
          {item.title}
        </TopicItem>
      ))}
      <MoreTopic>更多热点</MoreTopic>
    </TopicWrapper>
  );
};

export default Topic;

const TopicWrapper = styled.div`
  padding: 20px 0 0 0;
  overflow: hidden;
`;
const TopicItem = styled.a`
  display: inline-block;
  background-color: #f7f7f7;
  height: 36px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  box-sizing: border-box;
  float: left;
  margin-right: 15px;
  margin-bottom: 10px;
  padding-right: 10px;

  .topic-img {
    margin-right: 10px;
    width: 32px;
    height: 32px;
    vertical-align: middle;
  }
`;

const MoreTopic = styled.a.attrs({ href: "#" })`
  display: inline-block;
  padding: 0 10px;
  position: relative;
  font-size: 14px;
  height: 36;
  line-height: 36px;
  text-decoration: none;

  cursor: pointer;
  &::after {
    content: ">";
    display: inline-block;
    position: absolute;
    font-size: 16px;
    right: -5px;
    top: 0;
  }
`;
