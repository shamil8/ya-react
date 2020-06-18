export function checkCredentials({userName, password}) {
  if (
    userName.toLowerCase() !== 'student' ||
    password !== 'student'
  ) {
    return false
  }

  return true
}
