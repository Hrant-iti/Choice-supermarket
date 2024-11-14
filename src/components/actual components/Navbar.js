import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from './Context';
export default function Navbar() {
    const menuList = ['About', 'Products', 'Order', 'Delivery', 'Contact'];
    const props = useContext(Context);

    const workLoading = () => {
        props.setLoad(true);
        setTimeout(() => {
          props.setLoad(false);
        }, Math.round(Math.random() * 5000));
    }

  return (
    <nav>
        <ul className='navigation_menu'>
            <li onClick={() => {
                  window.scrollTo({ top : 0, behavior : 'smooth' });
                  workLoading();
            }}><Link to='/'>Home</Link></li>
            {menuList.map(menu => {
              return <li key={Math.random()} onClick={() => {
                  window.scrollTo({ top : 0, behavior : 'smooth' });
                  workLoading();
              }}><Link to={`/${menu}`}>{menu}</Link></li>
            })}
        </ul>
    </nav>
  )
}