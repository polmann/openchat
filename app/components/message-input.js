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
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABCFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Q59ffAAAAV3RSTlMAAQIEBQYHCAkLDA4RExQWFxgaGxwgIiUmKy4vNDg8PT5BQkNETE1OUlZcXV9rbW9wd3x+gIKDhYmLkaWmq62vsLnBw8XHyNHT1drc4OLm6PHz9ff5+/2myfM7AAAA0UlEQVQYGWXBiTYCYQCG4Xfyl4xsY5Ate/zITgrZRRJjme/+78TMmTNEz0Ovfnr4dx3+ydfVvuCPzNbX2eDxDt3mXh6LcF/i18h1sOaAI49UrqoDAwVcZUk4Gx9XQ9BXN0wFJKZbz7OA116CcoNYofFpHcDqFjjZBcy+TnOAOZfGgIcF4EmHDjDRkY4AR+PAQCV43XS3Jb0ZwFWWWGb+RrEVIsWAVEXSe57I+iUpq0hY86G6R8pK4aRfC5urzUVSVpoBTLklj5TVMolhfoyW6PYN7AQfzqKVSNwAAAAASUVORK5CYII=' />
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
