import { ExampleSection } from '#examples/-helpers';
import { IconButton, IconButtonGroup, UnorderedList, ListItem } from '@admiral-ds/react-ui';
import PrintOutline from '@admiral-ds/icons/build/system/PrintOutline.svg?react';
import ShareOutline from '@admiral-ds/icons/build/service/ShareOutline.svg?react';
import EditOutline from '@admiral-ds/icons/build/system/EditOutline.svg?react';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';

export const Base = () => {
  return (
    <ExampleSection
      header="Рекомендации"
      text={
        <>
          <UnorderedList dimension="s">
            <ListItem>
              Используйте компонент только для организации схожих функций. Не группируйте кнопки только потому, что они
              стоят рядом.
            </ListItem>
            <ListItem>
              Не группируйте слишком много кнопок — это создает излишнюю когнитивную нагрузку на пользователя.
            </ListItem>
            <ListItem>
              Не используйте компонент для навигации по вкладкам, для этого есть специализированные компоненты.
            </ListItem>
          </UnorderedList>
          <br />
          Компонент используется только в сочетании с IconButton c appearance = 'secondary' (серые иконки и обводка).
          Если нужна вариация синего цвета, то используйте компонент ButtonGroup.
        </>
      }
    >
      <IconButtonGroup>
        <IconButton>
          <PrintOutline />
        </IconButton>
        <IconButton>
          <ShareOutline />
        </IconButton>
        <IconButton>
          <EditOutline />
        </IconButton>
        <IconButton>
          <DeleteOutline />
        </IconButton>
      </IconButtonGroup>
    </ExampleSection>
  );
};
