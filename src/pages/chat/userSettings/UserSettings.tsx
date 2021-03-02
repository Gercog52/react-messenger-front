import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core'
import cn from 'classnames'

const useStyles = makeStyles({
  settings: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '320px',
    height: '100vh',
    background: 'var(--background)',
    boxShadow: '6px 4px 8px rgba(37, 37, 41, 0.07)',
    transform: 'translateX(-100%)',
    transition: '.2s',
    zIndex: 3,
  },
  settingsOpen: {
    transform: 'translateX(0%)',
  },
  shadow: {
    visibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: '#7c7c7c00',
    transition: '.2s',
    zIndex: 2,
  },
  shadowShow: {
    visibility: 'visible',
    background: '#7c7c7c75',
    cursor: 'pointer',
  }
})

interface Iprops {
  isOpenSettings: boolean,
  closeFn: () => void,
}

export const UserSettings:FunctionComponent<Iprops> = ({
  isOpenSettings, closeFn
}) => {
  const classes = useStyles()

  return (
    <>
      <div className={cn(
          classes.settings,
        {[classes.settingsOpen]: isOpenSettings}
        )}
      >
        settings
      </div>
      <div className={cn(
          classes.shadow,
        {[classes.shadowShow]: isOpenSettings}
        )}
        onClick={closeFn}
      ></div>
    </>
  )
}
