import React, { FC, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import cn from 'classnames'

const useStyles = makeStyles({
  inputWrap: {
    position: 'relative',
  },
  input: {
    height: '38px',
    fontSize: '16px',
    paddingLeft: '15px',
    paddingRight: '37px',
    outline: 'none',
    border: '2px solid var(--background-inpit)',
    backgroundColor: 'var(--background-inpit)',
    borderRadius: '3px',
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
    right: '6px',
    fontSize: '28px',
    color: 'var(--icon)',
    cursor: 'pointer',
    transform: 'translateY(-50%) rotate(90deg) scale(0)',
    transition: '.2s',
    '&:hover': {
      color: 'var(--icon-active)'
    }
  },
  closeIconOn: {
    transform: 'translateY(-50%) rotate(0deg) scale(1)'
  },
  placeholder: {
    position: 'absolute',
    left: '20px',
    top: '50%',
    fontSize: '16px',
    color: 'var(--color-input)',
    transform: 'translateY(-50%)',
    transition: '.2s',
    userSelect: 'none',
    cursor: 'text'
  },
  placeholderOff: {
    visibility: 'hidden',
    opacity: 0,
    transform: 'translateY(-50%) translateX(100%)',
  }
})

interface Iprops {
  className?: string,
  start?: () => void,
  change?: (info: {
    q: string,
    isCancel: (q: string) => boolean
  }) => void,
  end?: () => void
}

export const SearchInput:FC<Iprops> = ({className, start, change, end}) => {
  const inputRef = useRef<HTMLInputElement|null>(null)
  const [value, setValue] = useState('')
  const [isStartInput, setIsStartInput] = useState(false)

  const startInput = () => {
    setIsStartInput(true)
    start && start()
  }
  const endInput = () => {
    setIsStartInput(false)
    end && end()
  }
  const changeInput = (
    {target: {value}}: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(value)
    change && change({
      q: value,
      isCancel: (q: string) => q !== inputRef?.current?.value
    })

    if(!isStartInput && value.length === 1)
      startInput()
    if(isStartInput && value.length === 0)
      endInput()
  }

  const classes = useStyles()

  return (
    <div className={classes.inputWrap}>
      <input
        onChange={changeInput}
        ref={inputRef}
        value={value}
        className={cn(classes.input, className)}
      />
      <div className={cn(
          classes.placeholder,
        {[classes.placeholderOff]: !!value}
        )}
        onMouseDown={(e) => {
          inputRef.current?.focus()
          e.preventDefault()
        }}
      >
        Поиск
      </div>
      <div
        onClick={() => {
          setValue('')
          endInput()
        }}
      >
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
