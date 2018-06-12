import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { addMessage } from './__store__/index.actions'

class AppComponent extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      currentMessage: ''
    }
  }

  onChange( e ) {
    this.setState( { currentMessage: e.target.value } )
  }

  onSubmit() {
    const { currentMessage } = this.state
    const { addMessage } = this.props

    if ( !currentMessage ) {
      return
    }

    addMessage( currentMessage )
    this.setState( { currentMessage: '' } )
  }

  onKeyPress( event ) {
    if (event.key && event.key === `Enter` || event.which && event.which === 13 || event.keyCode && event.keyCode === 13) {
      this.onSubmit()
    }
  }

  render() {
    const { messages } = this.props
    return (
      <div className="App">
        { messages.map( message =>
          <p key={message.id}>
            {message.text}
          </p>
        ) }
        <input
          onKeyPress={ this.onKeyPress.bind( this ) }
          onChange={ this.onChange.bind( this ) }
          value={ this.state.currentMessage }
          type={ 'text' }
        />
        <button onClick={ this.onSubmit.bind( this ) } >
          Enviar Mensagem
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => state

const App = connect(
  mapStateToProps,
  { addMessage }
)( AppComponent )

export default App;
