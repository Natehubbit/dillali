import React from 'react'
import styles from './style.module.scss'
import logo from '../../assets/images/logo.webp'
import RadioButtons from '../RadioButtons'
import { PAGES } from '../../common/constants'

interface INavbarProps {
  setPage: (v:string) => void;
  radioOptions: string[];
  page: typeof PAGES[number];
}

const Navbar: React.FC<INavbarProps> = ({
  setPage,
  page,
  radioOptions
}) => {
  return (
    <div className={styles['container']}>
      <img height={40} src={logo} alt='logo' />
      <RadioButtons 
        setValue={setPage} 
        value={page} 
        options={radioOptions}  />
    </div>
  )
}

export default Navbar
