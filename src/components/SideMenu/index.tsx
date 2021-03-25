import React, { useState } from 'react'
import styles from './style.module.scss'
import cx from 'classnames/bind'
import { v4 as uuid } from 'uuid'

const cn = cx.bind(styles)

interface ISideMenuProps {
  list: string[];
  invert: boolean;
}

const SideMenu: React.FC<ISideMenuProps> = ({
  list,
  invert
}) => {
  const [active, setActive] = useState('')
  return (
    <div className={cn({
      container: true,
      invert
    })}>
      <ul className={styles['list']}>
        {list.map(item=><li 
          onClick={()=>setActive(item)}
          key={uuid()} 
          className={cn({
            listItem: true,
            active: active===item
          })}>
          {item}
        </li>)}
      </ul>
    </div>
  )
}

export default SideMenu
