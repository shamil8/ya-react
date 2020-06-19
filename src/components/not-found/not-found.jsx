import React from 'react'

const NotFound = ({ data }) => {    // не используется data!
  return (
    <React.Fragment>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
    </React.Fragment>
  )
}

export default NotFound
