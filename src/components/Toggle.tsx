import React from 'react';

export interface ToggleProps {
  render: (args: any) => any;
}

export interface ToggleState {
  on: boolean;
}

class Toggle extends React.Component<ToggleProps, ToggleState> {
  constructor(props: ToggleProps) {
    super(props);
    this.state = {
      on: false
    };
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() { 
    const { render } = this.props;

    return (
      <div>
        {render({
          on: this.state.on,
          toggle: this.toggle
        })}
      </div>
    );
  }
}

export default Toggle;
