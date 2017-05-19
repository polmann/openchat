import React, { Component } from 'react'

export default class MessageInput extends Component {
  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.refs.typedMessage.value)
    e.target.reset()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div
          id='type-message-group'
          className='input-group input-group-lg col-sm-8 col-md-9'>
          <input
            type='text'
            className='form-control'
            placeholder='Type a message'
            id='type-message'
            autoComplete='off'
            ref='typedMessage' />
          <span className='input-group-btn'>
            <button className='btn btn-default'
              type='submit'
              id='type-message-btn'>
              <i className='fa fa-paper-plane-o' aria-hidden='true' />
            </button>
          </span>
        </div>
      </form>
    )
  }
}

MessageInput.defaultProps = {
  onSubmit: function () {}
}
