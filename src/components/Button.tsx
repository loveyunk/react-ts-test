import React from 'react';
import classNames from 'classnames';

type buttonType = 'warning' | 'primary' | 'ghost';
type sizeType = 'large' | 'normal' | 'small';

interface ButtonProps {
  // button的类型 默认primary
  type: buttonType;
  // button的尺寸，默认normal
  size: sizeType;
  // disabled 默认为false
  disabled: boolean;
  // 按钮的loading态 默认为false
  loading: boolean;
  // onClick
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  // 前缀
  prefixCls: string;
  // 类名
  className?: string;
  // style
  style?: object;
  // icon
  icon?: React.ReactNode;
  // htmlType 原生的type  比如submit这些
  htmlType?: string;
  children?: React.ReactNode;
}

const noop = () => {};

const defaultProps: ButtonProps = {
  disabled: false,
  loading: false,
  onClick: noop,
  size: 'normal',
  prefixCls: 'lv-btn',
  type: 'primary'
};

const Button: React.FC<ButtonProps> & { defaultProps: Partial<ButtonProps> } = props => {
  const { children } = props;

  return (
    <div>
      <button>
        <span>{children}</span>
      </button>
    </div>
  );
};

Button.defaultProps = defaultProps;

export default Button;
