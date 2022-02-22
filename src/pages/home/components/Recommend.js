import styled from "styled-components";
import img01 from "../../../static/images/img1.png";
import img02 from "../../../static/images/img2.png";
import img03 from "../../../static/images/img3.png";
import img04 from "../../../static/images/img4.png";
import ma from "../../../static/images/ma.png";
import ma1 from "../../../static/images/ma1.png";

const ReCommend = () => {
  return (
    <ReCommendWrapper>
      <CommentItem url={img01} />
      <CommentItem url={img02} />
      <CommentItem url={img03} />
      <CommentItem url={img04} />
      <CommentDownload url={ma} maUrl={ma1}>
        <span className='ma' />
      </CommentDownload>
    </ReCommendWrapper>
  );
};

export default ReCommend;

const ReCommendWrapper = styled.div`
  padding: 0 0 0 10px;
`;

const CommentItem = styled.a`
  display: block;
  width: 280px;
  height: 50px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 5px;
`;

const CommentDownload = styled.a`
  margin-bottom: 30px;
  display: block;
  width: 280px;
  height: 82px;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  cursor: pointer;
  .ma {
    position: absolute;
    background-image: url(${(props) => props.maUrl});
    background-repeat: no-repeat;
    background-size: contain;
    width: 150px;
    height: 160px;
    visibility: hidden;
    top: -160px;
    left: 70px;
  }
  &:hover {
    .ma {
      visibility: visible;
    }
  }
`;
