import styled from "styled-components";

const Detail = () => {
  return (
    <DetailWrapper>
      <ContentWrapper>
        <LeftWrapper>
          <h1>快要结婚了，可是我却哭了</h1>
          <TitleContent>
            <img
              alt=''
              src='https://upload.jianshu.io/users/upload_avatars/15682939/03f3e062-ba29-4c49-89a3-bb8e97e7bb32.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
            />
            <div>
              <div>
                <span className='title'>一个有才情的女子</span>
                <button className='follow'>关注+</button>
              </div>
              <div className='detail'>
                <span className='collect'>
                  <i className='iconfont'>&#xe76f;</i>48
                </span>
                <span className='desc'>2022.02.08 19:58:07</span>
                <span className='desc'>字数 752</span>
                <span className='desc'>阅读 13,858</span>
              </div>
            </div>
          </TitleContent>
          <ContentDetail>
            <p>
              我和男友结婚日子定了，因为我在湖北，他在深圳，所以我这边5月1号嫁，他那边5月20号娶。
            </p>
            <p>
              我是湖北农村的，他老家是广西的，临近结婚，却发生了很多争吵，争吵的原因就是礼节问题和各自成长环境的不同。
            </p>

            <p>
              我在湖北长大，这边就是很重视长辈的想法，什么都是舅舅为大，彩礼也受的重，要了男友20万，这些男友家里都接受。
            </p>

            <p>
              男友在广西长大，因为家庭因素，亲戚往来淡泊，基本不往来，只是一家亲，其他亲戚老死不相往来。
            </p>
            <p>
              我们是在一个习俗上发生的争吵，我妈妈说他要娶我，还要另外给2万我妈妈，让她分给亲戚，俗称下乡钱，我男友和他家里都不同意，说干嘛分给亲戚，我也是才知道这个钱，我就跟妈妈说要不就不要这个钱，我妈说那怎么行，每个嫁女儿的都要出这个钱。
            </p>

            <p>
              双方僵持不下，我确实之前没有听说我这个钱，我男友不想出的原因是凭什么给亲戚，因为他说给我爸妈都行，为什么要给亲戚，我也不清楚，我妈又没有提前跟我说，搞得我好烦。
            </p>
            <p>
              再者，我男友这边不满意的是，我妈一会这样，一会那样的，不一次性说清楚要多少，搞得我男友这边不好规划。
            </p>
          </ContentDetail>
        </LeftWrapper>
        <RightWrapper>
          <WriterContent>
            <TitleContent>
              <img
                alt=''
                src='https://upload.jianshu.io/users/upload_avatars/15682939/03f3e062-ba29-4c49-89a3-bb8e97e7bb32.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
              />
              <div>
                <div>
                  <span className='title'>一个有才情的...</span>
                  <button className='follow'>关注+</button>
                </div>
                <div className='detail'>
                  <span className='desc'>总资产 3752</span>
                </div>
              </div>
            </TitleContent>
            <WriterList>
              <ListItem>
                <h3>我要结婚了</h3>
                <p> 阅读 608</p>
              </ListItem>
              <ListItem>
                <h3>我要结婚了</h3>
                <p> 阅读 608</p>
              </ListItem>
              <ListItem>
                <h3>我要结婚了</h3>
                <p> 阅读 608</p>
              </ListItem>
            </WriterList>
          </WriterContent>
        </RightWrapper>
      </ContentWrapper>
    </DetailWrapper>
  );
};

export default Detail;

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
