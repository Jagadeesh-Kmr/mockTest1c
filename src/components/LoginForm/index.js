import {Component} from 'react'

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  BgContainer,
  LoginContainer,
  LoginImageContainer,
  LoginImage,
  Form,
  Heading,
  Label,
  LoginBtn,
  ErrorMsg,
  InputName,
  InputPassword,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
    errorMsg: '',
    showSubmitError: false,
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {password, userName, showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <BgContainer>
        <LoginContainer>
          <LoginImageContainer>
            <LoginImage
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
            <Form onSubmit={this.submitForm}>
              <Heading>Welcome Back!</Heading>
              <Label htmlFor="userText">User ID</Label>
              <InputName
                type="text"
                id="userText"
                value={userName}
                placeholder="Enter User ID"
                onChange={this.onChangeUserName}
              />
              <Label htmlFor="password">PIN</Label>
              <InputPassword
                type="password"
                id="password"
                value={password}
                placeholder="Enter PIN"
                onChange={this.onChangePassword}
              />
              <LoginBtn type="submit">Login</LoginBtn>
              {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
            </Form>
          </LoginImageContainer>
        </LoginContainer>
      </BgContainer>
    )
  }
}

export default LoginForm
