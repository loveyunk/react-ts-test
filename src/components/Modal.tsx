import React from 'react';

export interface ModalProps {}

export interface ModalState {
  visible: boolean;
}

class Modal extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick, false);
    // document
    //   .querySelector('.modal')!
    //   .addEventListener('click', (e: MouseEvent) => {
    //     e.stopPropagation();
    //   });
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick, false);
  }

  handleBodyClick = (e: MouseEvent) => {
    // console.log(e.currentTarget)

    // if (e.target && (e.target as any).matches('div.modal')) {
    //   return;
    // }

    this.setState({
      visible: false
    });
  };

  handleOpenClick = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    const { visible } = this.state;

    return (
      <div>
        <button onClick={this.handleOpenClick}>open modal</button>
        <div
          className='modal'
          style={{
            width: 100,
            height: 100,
            background: 'orange',
            display: visible ? 'block' : 'none'
          }}
        >
          <button>test</button>
        </div>
      </div>
    );
  }
}

export default Modal;
