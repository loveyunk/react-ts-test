import React from 'react';

export interface ListProps {
  list: Array<{}>;
  handleItemChange: () => void;
}

export interface ListState {
  list: any;
}

class List extends React.Component<ListProps, ListState> {
  static defaultProps: Partial<ListProps> = {
    list: [],
    handleItemChange: () => {}
  };

  constructor(props: ListProps) {
    super(props);
    this.state = {
      list: this.props.list.map(entry => ({}))
    };
  }
}

export default List;
