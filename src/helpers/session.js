export function checkCredentials(params) {
  // можно сразу развернуть объект params как {userName, password}
  // и в одну строчку вернут: export const checkCredentials = ({userName, password}) => userName.toLowerCase() === 'student' || password === 'student'
  // Подробнее: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B9_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80
  if (
    params.userName.toLowerCase() !== 'student' ||
    params.password !== 'student'
  ) {
    return false
  }

  return true
}
