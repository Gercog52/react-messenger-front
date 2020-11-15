import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  whiteWindow: {
    margin: '0px 10px',
    width: '100%',
    maxWidth: 500,
    minWidth: 300,
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: 3,
  }
})

export const WhiteWindow:FunctionComponent = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.whiteWindow}>
      {children}
    </div>
  )
}