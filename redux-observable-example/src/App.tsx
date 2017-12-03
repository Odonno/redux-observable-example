import * as React from 'react';

import { Action, increment, decrement } from './actions';

import { AppState } from './state';
import { connect, Dispatch } from 'react-redux';
import { Group } from './models';

interface OwnProps {
}

interface PropsFromRedux {
  values: Group[];
}

interface DispatchFromRedux {
  onIncrement(key: string): void;
  onDecrement(key: string): void;
}

class App extends React.Component<OwnProps & PropsFromRedux & DispatchFromRedux, {}> {
  render() {
    return (
      <div>
        {this.props.values.map(v => {
          return (
            <div key={v.key}>
              <input value={v.key} readOnly={true} />
              <input value={v.value} readOnly={true} />
              <button onClick={() => this.props.onIncrement(v.key)}>increment</button>
              <button onClick={() => this.props.onDecrement(v.key)}>decrement</button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ values }: AppState): PropsFromRedux => {
  return {
    values
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchFromRedux => {
  return {
    onIncrement: (key: string) => dispatch(increment(key)),
    onDecrement: (key: string) => dispatch(decrement(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);