import React, { FunctionComponent, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import cn from 'classnames'

const useStyles = makeStyles({
  inputWrap: {
    position: 'relative',
  },
  input: {
    height: 38,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 37,
    outline: 'none',
    border: '2px solid var(--background-inpit)',
    backgroundColor: 'var(--background-inpit)',
    borderRadius: 3,
    transition: '.2s',
    '&::placeholder': {
      color: 'var(--color-input)',
    },
    '&:active': {
      borderColor: '#39C3F0',
    },
    '&:focus': {
      border: '2px solid var(--outline-input)',
      backgroundColor: 'var(--background-inpit-active)',
    },
    '&:focus::placeholder': {
      color: 'var(--color-input-active)',
    },
  },
  closeIcon: {
    position: 'absolute',
    top: '50%',
    right: 6,
    fontSize: 28,
    color: 'var(--close-icon)',
    cursor: 'pointer',
    transform: 'translateY(-50%) rotate(90deg) scale(0)',
    transition: '.2s',
    '&:hover': {
      color: 'var(--close-icon-active)'
    }
  },
  closeIconOn: {
    transform: 'translateY(-50%) rotate(0deg) scale(1)'
  },
  placeholder: {
    position: 'absolute',
    left: 20,
    top: '50%',
    fontSize: 16,
    color: 'var(--color-input)',
    transform: 'translateY(-50%)',
    transition: '.2s',
  },
  placeholderOff: {
    opacity: 0,
    transform: 'translateY(-50%) translateX(100%)',
  }
})

interface Iprops {
  className?: string
}

export const Input:FunctionComponent<Iprops> = ({className}) => {
  const [value, setValue] = useState('');

  const classes = useStyles();

  return (
    <div className={classes.inputWrap}>
      <input
        onChange={e => setValue(e.target.value)}
        value={value}
        className={cn(classes.input, className)}
      />
      <div className={cn(
          classes.placeholder,
        {[classes.placeholderOff]: !!value})}
      >
        Поиск
      </div>
      <div onClick={(e) => setValue('')}>
        <CloseIcon
          className={
            cn(
              classes.closeIcon,
              {[classes.closeIconOn]: !!value}
            )
          }
        />
      </div>
    </div>
  )
}