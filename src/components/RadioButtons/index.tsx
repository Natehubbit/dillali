import React from 'react'
import styles from './style.module.scss'
import cx from 'classnames/bind'
import { v4 as uuid } from 'uuid'

const cn = cx.bind(styles)

interface IRadioButtonsProps {
  setValue: (v:string) => void;
  value: string;
  options: string[];
}

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  active: boolean;
}

const Button: React.FC<IButtonProps> = ({
  label,
  active,
  ...props
}) => {
  return <button 
    className={cn({
      btn: true,
      active
    })}
    {...props}>
    {label}
  </button>
}

const RadioButtons:React.FC<IRadioButtonsProps> = ({
  setValue,
  value,
  options
}) => {
  return (
    <div className={styles['container']}>
      {options.map(option=>{
        const isActive = option===value
        return <Button
          onClick={()=>setValue(option)} 
          key={uuid()} 
          active={isActive} 
          label={option} />
      })}
    </div>
  )
}

export default RadioButtons
