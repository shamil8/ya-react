import { checkCredentials } from '../helpers/session'

export const LOG_IN = 'LOG_IN';           // лучше создать отдельный файл для констант
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export function logIn(params, next) {
  return dispatch => {
    if (checkCredentials(params)) {
        dispatch({
          type: LOG_IN,
          payload: {  // лучше переименовать на user
            name: params.userName,
          },
        });
      next()
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {  // зачем еще объект создавать(, можно просто error возвращать
          errorMessage: 'Имя пользователя или пароль некорректны',
        },
        error: true, // данная переменная не используется!
      })
    }
  }
}
