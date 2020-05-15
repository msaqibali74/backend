import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor (props) {
      super(props)
      this.state = {
        email: '',
        password: '',
      }
      /*
      this.handleFieldChange = this.handleFieldChange.bind(this)
      this.handleCreateApp = this.handleCreateApp.bind(this)
      this.hasErrorFor = this.hasErrorFor.bind(this)
      this.renderErrorFor = this.renderErrorFor.bind(this)*/
    }
    handleEmailChange(event) {
      this.setState({email: event.target.value});
      //alert(event.target.value);
   }
   handlePasswordChange(event){
      this.setState({password: event.target.value});
   }
/*
    handleFieldChange (event) {
      this.setState({
        [event.target.email]: event.target.value
      })
    }*/

    handleLoginApp (event) {
      //  console.log("Hello");
       alert(`EMail: ${email.value}`);
        //console.log("Password: " + this.state.password);
      
        /*
      event.preventDefault()

      const { history } = this.props

      const project = {
        name: this.state.name,
        description: this.state.description
      }*/
/*
      axios.post('/api/projects', project)
        .then(response => {
          // redirect to the homepage
          history.push('/')
        })
        .catch(error => {
          this.setState({
            errors: error.response.data.errors
          })
        })*/
    }
/*
    hasErrorFor (field) {
      return !!this.state.errors[field]
    }*/
/*
    renderErrorFor (field) {
      if (this.hasErrorFor(field)) {
        return (
          <span className='invalid-feedback'>
            <strong>{this.state.errors[field][0]}</strong>
          </span>
        )
      }
    }*/

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

  ReactDOM.render(<App />, document.getElementById('login'))
/*
class App extends Component{
    constructor()
    {
        super();
        this.state={
            email:"",
            password:"",
        }
    }
    submit()
    {
        console.log(this.state);
        //alert("Hello");
    }
    render(){
        return(
            <div className="container">
                <h1>Login</h1>
                <input type="text" onChange={(item)=>{this.setState({email:item.target.value})}} />
                <input type="password" onChange={(item)=>{this.setState({password:item.target.value})}} />
                <button onClick="{()=>this.submit()}">Login</button>
            </div>
        );
    }
}

export default App;
if (document.getElementById('login')) {
    ReactDOM.render(document.getElementById('login'));
}*/