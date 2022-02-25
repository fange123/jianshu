import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Write = (props) => {
  const { login } = props;

  return login ? <div>写文章</div> : <Navigate to='/login' />;
};

const mapStateToProps = (state) => {
  return {
    login: state.getIn(["login", "login"]),
  };
};
export default connect(mapStateToProps, null)(Write);
