import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

export const QuickRegistrationPage:FunctionComponent = () => {
  return (
    <>
      quick reg
      <Link to={'/login'}>
        login
      </Link>
    </>
  )
}