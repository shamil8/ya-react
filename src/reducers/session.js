import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from '../actions/SessionActions'
// из actions получаете константы, это не совсем хорошая практика (файл можно переименовать  в auth или user)
// для констант, лучше создать отельную папку в src, к примеру constants и там создать файл, и внутри файла можно создать объект authConstants

const initialState = {
  user: null,
  errorMessage: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: {    // можно просто action.user (с учетом замечания в SessionAction)
          name: action.payload.name,
        },
        errorMessage: '',   // по дефолту в state уже есть это строка
      }
    case LOG_OUT:
      return {
        ...state,   // мы уже вышли из системы, можно ничего не возвращать
        user: null,
        errorMessage: '',
      }
    case LOG_IN_FAILURE:
      return {
        ...state, // ненужная строка
        errorMessage: action.payload.errorMessage,
        // с учетом замечания в SessionAction мы могли бы просто получить action.error
      }
    default:
      return state
  }
}
