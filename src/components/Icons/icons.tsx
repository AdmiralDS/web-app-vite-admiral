import { T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

// Импорт оптимизированной иконки через настроенный SVGR лоадер (https://react-svgr.com/docs/what-is-svgr/)
import CreatePullRequestSolid from '@admiral-ds/icons/build/category/CreatePullRequestSolid.svg?react';

// Импорт оригинала иконки через настроенный SVGR лоадер (https://react-svgr.com/docs/what-is-svgr/)
import BusSolid from '@admiral-ds/icons/public/icons/category/Bus Solid.svg?react';

// Импорт иконки как готового реакт компонента (лоадер не требуется)
import { CategoryBusOutline } from '@admiral-ds/icons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icons = () => {
  return (
    <Wrapper>
      <T font="Body/Body 1 Long">Примеры импорта иконок</T>
      <CreatePullRequestSolid width={24} />
      <CategoryBusOutline width={24} />
      <BusSolid width={24} />
    </Wrapper>
  );
};
