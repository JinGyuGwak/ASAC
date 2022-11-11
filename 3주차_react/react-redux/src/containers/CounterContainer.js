import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <>
      <Counter number={number} onIncrease={increase} onDecrease={decrease} />
      <h1>{number}</h1>
    </>
  );
};
const mapStateToProps = (state) => ({
  number: state.counter.number,
});
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
