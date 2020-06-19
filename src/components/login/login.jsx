import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  state = {   // лучше присвоить переменной внутри конструктора
    redirectToPreviousRoute: false,
    userName: '',
    password: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    const { userName, password } = this.state

    this.props.logIn(   // вывести props в конструктор
      {                 // лучше написать аргументы в одной строке
        userName,
        password,
      },
      () => {
        this.setState({ redirectToPreviousRoute: true })
      }
    )
  }

  handleChange = e => {
    const value = e.currentTarget.value
    const fieldName = e.currentTarget.dataset.fieldName

    this.setState(prev => ({    // можно без стрелочной функции и аргумента
      ...prev,    // зачем передавать какие-то аргументы функции(
      [fieldName]: value,
    }))
  }

  render() {
    const { location, errorMessage } = this.props
    const { from } = location.state || { from: { pathname: '/' } }  // Если данные валидны: редирект на /profile а не на главную
    const { userName, password, redirectToPreviousRoute } = this.state

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />
    }

    return (
      <div>
        {errorMessage && <p>{errorMessage}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name={'userName'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Имя'}
            value={userName}
          />
          <input
            data-field-name={'password'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Пароль'}
            value={password}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {   // проверка типов данных, это очень хорошо
  logIn: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}

export default Login
