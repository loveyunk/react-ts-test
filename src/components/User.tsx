import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/user';
import { AppState } from '../store/index';

export interface UserProps {
  count: number;
  increment: () => {};
  decrement: () => {};
}

export interface UserState {}

class User extends React.Component<UserProps, UserState> {
  render() {
    const { count, increment, decrement } = this.props;

    return (
      <div>
        <h1>Hello World!</h1>
        <p>count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = ({ user }: AppState) => ({
  ...user
});

const mapDispatchToProps = (dispatch: any) => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
