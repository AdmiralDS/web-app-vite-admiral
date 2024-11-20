import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';
import type { Color } from '@admiral-ds/react-ui';

import ProductsOutline from '@admiral-ds/icons/build/category/ProductsOutline.svg?react';
import IconsOutline from '@admiral-ds/icons/build/category/IconsOutline.svg?react';
import GithubIcon from '../../assets/GithubIcon.svg?react';
import ReactIcon from '../../assets/ReactIcon.svg?react';
import PixsoIcon from '../../assets/PixsoIcon.svg?react';

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Sources = styled.div`
  display: grid;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Source = styled.a`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  box-sizing: border-box;
  border-radius: 8px;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  text-decoration: none;
  transition: box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
  }
`;

const SourceIcon = styled.div<{ $background: keyof Color }>`
  width: 28px;
  height: 28px;
  padding: 2px;
  margin-bottom: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  background: ${(p) => p.theme.color[p.$background]};
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  }
`;

const SourceName = styled(T)`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;
const SourceDesc = styled(T)`
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
`;

const sources = [
  {
    id: '1',
    icon: <ProductsOutline />,
    iconColor: 'Primary/Primary 60 Main',
    href: 'https://admiralds.github.io/react-ui/',
    name: 'Components',
    description: 'Компоненты в Storybook',
  },
  {
    id: '2',
    icon: <IconsOutline />,
    iconColor: 'Purple/Purple 60 Main',
    href: 'https://admiralds.github.io/icons/',
    name: 'Icons',
    description: 'Иконки в Storybook',
  },
  {
    id: '3',
    icon: <PixsoIcon />,
    iconColor: 'Magenta/Magenta 50',
    href: 'https://pixso.t1-pixso.ru/app/editor/0bmDY0CENBvcPkVPPpt6AA?file_type=10&icon_type=1&page-id=9%3A32 Invite you to join the Pixso Design file "Admiral 2.1 UI Kit"',
    name: 'Pixso',
    description: 'Макеты в Pixso',
  },
  {
    id: '4',
    icon: <ReactIcon />,
    iconColor: 'Cyan/Cyan 30',
    href: 'https://react.dev/',
    name: 'React',
    description: 'Документация по React',
  },
  {
    id: '5',
    icon: <GithubIcon />,
    iconColor: 'Success/Success 50 Main',
    href: 'https://github.com/AdmiralDS/react-ui/',
    name: 'Github',
    description: 'Ресурсы на Github',
  },
];

export const Route = createFileRoute('/general/resources')({
  component: () => (
    <Sources>
      {sources.map(({ id, icon, iconColor, href, name, description }) => (
        <Source href={href} target="_blank" key={id}>
          <SourceIcon $background={iconColor as keyof Color}>{icon}</SourceIcon>
          <SourceName font="Subtitle/Subtitle 1">{name}</SourceName>
          <SourceDesc font="Caption/Caption 1">{description}</SourceDesc>
        </Source>
      ))}
    </Sources>
  ),
  staticData: {
    title: 'Resources',
    description: 'Полезные материалы и ссылки, которые могут пригодиться при использовании библиотеки Адмирал',
  },
});
