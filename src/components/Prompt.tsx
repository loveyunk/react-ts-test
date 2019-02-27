import React from 'react';

export interface PromptProps {
  visible: boolean
}

export interface PromptState {

}

class Prompt extends React.Component {

  render () {
    return (
      <div className="prompt"></div>
    )
  }
}

export default Prompt
