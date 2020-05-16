import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor (props) {
      super(props)
      this.state = {
        email: '',
        password: '',
      }
    }
    handleEmailChange(event) {
      this.setState({email: event.target.value});
   }
   handlePasswordChange(event){
      this.setState({password: event.target.value});
   }
    handleLoginApp (event) {
       //alert(`EMail: ${email.value}`);
       $.ajax({
        url:'login',
        type: 'post',
        success:function(response)
        {   
            alert(response);
        }
       });
    }
    render () {
      return (
        <div className='container py-4'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-header'>Create new project</div>
                <div className='card-body'>
                  <form method="post" >
                    <div className='form-group'>
                      <label htmlFor='email'>Email</label>
                      <input
                        id='email'
                        type='text'
                        className={`form-control`}
                        name='email'
                        onChange={this.handleEmailChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='description'>Project description</label>
                      <input
                        id='password'
                        className={`form-control`}
                        name='password'
                        type='password'
                        onChange={this.handlePasswordChange}
                      />
                    </div>
                  </form>
                  <button className='btn btn-primary' onClick={this.handleLoginApp}>Create</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  ReactDOM.render(<App />, document.getElementById('lodgin'))