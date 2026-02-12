import { ExampleSection, PStyled, rowFlexMixin } from '#examples/-helpers';
import { TextArea, TextField, UnorderedList, ListItem } from '@admiral-ds/react-ui';

export const TextAreaBasic = () => {
  return (
    <>
      <ExampleSection
        cssMixin={rowFlexMixin}
        text={
          <>
            <PStyled>
              Поле ввода для текстов, высота которых превышает две строки. По умолчанию компонент настроен на 3 строки
              текста, каждая новая строка добавляет 24px к высоте компонента (высота компонента регулируется вставкой
              пустых строк). Ширина компонента произвольная.
            </PStyled>
            <PStyled>
              Количество знаков можно ограничивать. Информация об этом выводится дополнительно под полем ввода
              (Counter). Ограничений по лимиту знаков нет, можно задавать любой лимит.
            </PStyled>
            <PStyled>
              Компонент может иметь два состояния :
              <UnorderedList dimension="s" style={{ marginTop: '8px' }}>
                <ListItem>
                  С фиксированнной высотой, когда при заполнении формы появляется скролл. Высота поля задается
                  пользователем.
                </ListItem>
                <ListItem>
                  С адаптивной высотой, когда форма изменяет высоту в зависимости от количества текста.
                </ListItem>
              </UnorderedList>
            </PStyled>
          </>
        }
      >
        <div style={{ width: '70%' }}>
          <TextArea defaultValue="test" />
        </div>
      </ExampleSection>
      <ExampleSection
        text={
          <>
            <PStyled>Для того, чтобы добавить лэйбл или дополнительный текст, используйте компонент TextField</PStyled>
          </>
        }
      >
        <div style={{ width: '70%' }}>
          <TextField defaultValue="test" label="Лэйбл" extraText="Дополнительный текст" />
        </div>
      </ExampleSection>
    </>
  );
};
