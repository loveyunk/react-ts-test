import React from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './Foo.module.scss';

export interface FooProps {
  className: string;
  prefixCls: string;
}

export interface FooState {
  count: number;
}

class Foo extends React.Component<FooProps, FooState> {
  static defaultProps: Partial<FooProps> = {
    className: '',
    prefixCls: 'lv-foo'
  };

  constructor(props: FooProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    const { className, prefixCls } = this.props;

    const { count } = this.state;

    const classes = classNames(prefixCls, className, {});

    return (
      <div styleName={classes}>
        <p>count: {count}</p>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default CSSModules(Foo, styles, {
  allowMultiple: true
});
