import React, { useState } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  const listItems = [
    {
      path: '/',
      pageName: 'Главная',
    },
    {
      path: '/drift',
      pageName: 'Дрифт-такси',
    },
    {
      path: '/timeattack',
      pageName: 'Time Attack',
    },
    {
      path: '/forza',
      pageName: 'Forza Karting',
    },
  ];

  const [classes, setClasses] = useState({
    activeElementId: null,
  });

  const activeClasses = cn('menu__item', 'menu__item-active');
  const noActiveClasses = cn('menu__item');

  return (
    <div className="menu">
      {listItems.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.path}
            className={
              classes.activeElementId === index
                ? activeClasses
                : noActiveClasses
            }
            onClick={() =>
              setClasses((prev) => ({ ...prev, activeElementId: index }))
            }
          >
            {item.pageName}
          </NavLink>
        );
      })}
    </div>
  );
}
