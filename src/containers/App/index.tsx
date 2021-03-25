import React, { useState } from 'react';
import { ADMIN_LIST, APP_LIST, PAGES } from '../../common/constants';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import styles from './style.module.scss'

function App() {
  const [page, setPage] = useState<string>(PAGES[0])
  const isAdmin = page=== PAGES[1]
  const menuList = !isAdmin
    ? APP_LIST 
    : ADMIN_LIST
  return (
    <div className={styles['container']}>
      <Navbar page={page} setPage={setPage} radioOptions={PAGES}  />
      <div className={styles['body']}>
        <SideMenu list={menuList} invert={isAdmin} />
        <div className={styles['content']}>
          {page}
        </div>
      </div>
    </div>
  )
}

export default App;
