import { ExampleSection } from '#examples/-helpers';
import { TextField } from '@admiral-ds/react-ui';

export const TextAreaVariants = () => {
  return (
    <>
      <ExampleSection text="С отображением иконки очистки (проп 'displayClearIcon').">
        <div style={{ width: '70%' }}>
          <TextField defaultValue="test" label="Лэйбл" extraText="Дополнительный текст" displayClearIcon />
        </div>
      </ExampleSection>
      <ExampleSection text="Опционально можно включать иконку копирования, если возможность копировать текст является важной в вашем сценарии. При этом недоступно удаление текста через иконку очистки «крестик». То есть, либо очистка, либо копирование. Иконка копирования видна только при наличии текста в поле (проп 'displayCopyIcon').">
        <div style={{ width: '70%' }}>
          <TextField defaultValue="test" label="Лэйбл" extraText="Дополнительный текст" displayCopyIcon />
        </div>
      </ExampleSection>
      <ExampleSection
        text="Counter. Можно задавать при каком значении от максимума знаков появляется счетчик, по дефолту стоит 80% (пропсы 'characterCounterVisibilityThreshold' и 'maxLength')."
      >
        <div style={{ width: '70%' }}>
          <TextField defaultValue="test" label="Лэйбл" extraText="Дополнительный текст" displayCharacterCounter characterCounterVisibilityThreshold={0} maxLength={500} />
        </div>
      </ExampleSection>
      <ExampleSection
        text="С фиксированной высотой (проп 'rows')."
      >
        <div style={{ width: '70%' }}>
          <TextField defaultValue="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text." label="Лэйбл" extraText="Дополнительный текст" rows={3} />
        </div>
      </ExampleSection>
      <ExampleSection
        text="Минимальная и максимальная высота (комбинация пропсов 'rows', 'maxRows', 'autoHeight')."
      >
        <div style={{ width: '70%' }}>
          <TextField defaultValue="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text." label="Лэйбл" extraText="Дополнительный текст" rows={3} maxRows={6} autoHeight />
        </div>
      </ExampleSection>
    </>
  );
};
