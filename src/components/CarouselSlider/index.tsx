import { Outlet } from 'react-router-dom';
import { T } from '@admiral-ds/react-ui';

import { NavLink } from '../Main/NavLink';

const links = [
  { text: 'Базовый пример', path: '' },
  { text: 'Автоматическое переключение', path: '/auto_change' },
];

export const CarouselSliderExamples = () => {
  const style = ({ isActive }: any) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });
  return (
    <>
      <T font="Body/Body 1 Long">Примеры компонента CarouselSlider</T>
      <nav>
        {links.map((link) => (
          <>
            <NavLink
              to={`/carousel_slider${link.path}`}
              key={'link_' + link}
              style={style}
              $appearance="secondary"
              $dimension="s"
            >
              {link.text}
            </NavLink>
            /
          </>
        ))}
      </nav>
      <Outlet />
    </>
  );
};

export * from './CarouselSliderBasic';
export * from './CarouselSliderAutoChange';
