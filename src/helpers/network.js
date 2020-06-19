export const getData = (endPoint, API_ROOT) => {    // данная функция не используется!
  return fetch(`${API_ROOT}/${endPoint}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        Promise.reject('Error')
      }
    })
    .then(json => json)
    .catch(err => alert('getData error '))
}
