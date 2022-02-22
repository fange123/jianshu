import styled from "styled-components";

const List = (props) => {
  const { articleList } = props;
  return (
    <ListWrapper>
      {articleList.map((item) => (
        <ListItem key={item.id}>
          <ListContent>
            <h3 className='title'>{item.title}</h3>
            <p className='desc'>{item.content}</p>
            <Meta>
              <span className='action item'>
                <i className='iconfont'>&#xe76f;</i>
                {item.collection}
              </span>
              <span className='item'>{item.name}</span>
              <span className='item'>
                <i className='iconfont'>&#xe891;</i>
                {item.commend}
              </span>
              <span className='item'>
                <i className='iconfont'>&#xe623;</i>
                {item.love}
              </span>
              <span className='item'>
                <i className='iconfont'>&#xe611;</i>
                {item.money}
              </span>
            </Meta>
          </ListContent>
          {item.pic ? <img alt='' src={item.pic} className='pic-img' /> : ""}
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default List;

const ListWrapper = styled.div`
  margin-top: 20px;
`;

const ListItem = styled.div`
  min-height: 120px;
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 0 2px 0 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  line-height: 20px;
  display: flex;
  .pic-img {
    width: 150px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`;
const ListContent = styled.div`
  .desc {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  .title {
    font-size: 18px;
    line-height: 1.5;
  }
`;

const Meta = styled.div`
  display: flex;
  font-size: 12px;
  height: 20px;
  line-height: 20px;

  .item {
    cursor: pointer;
    margin-right: 10px;
    color: #b4b4b4;
    .iconfont {
      font-size: 14px;
      margin-right: 5px;
    }
  }
  .action {
    color: #ea6f5a;
  }
`;
