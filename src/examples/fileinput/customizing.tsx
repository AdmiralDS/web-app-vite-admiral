import { useRef, useState } from 'react';
import styled from 'styled-components';
import type { css } from 'styled-components';

import { FileInput, Button, fullWidthPositionMixin } from '@admiral-ds/react-ui';
import type { RenderFileInputProps } from '@admiral-ds/react-ui';
import AttachFileOutline from '@admiral-ds/icons/build/system/AttachFileOutline.svg?react';
import CloseOutline from '@admiral-ds/icons/build/service/CloseOutline.svg?react';
import { ExampleSection, PStyled } from '#examples/-helpers';

interface MyFileItemProps extends React.HTMLAttributes<HTMLDivElement> {
  filesLayoutCssMixin?: ReturnType<typeof css>;
  onCloseIconClick?: () => void;
}
const MyFileItem = styled.div<{ filesLayoutCssMixin?: ReturnType<typeof css> }>`
  display: flex;
  align-items: center;
  user-select: none;
  flex-flow: nowrap;
  position: relative;
  justify-content: space-between;
  outline: none;
  margin: 0;
  padding: 12px 16px;
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  margin-top: 16px;
  ${(p) => p.filesLayoutCssMixin}

  &:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
    color: var(--admiral-color-Magenta_Magenta60Main, ${(p) => p.theme.color['Magenta/Magenta 60 Main']});
  }
`;

const CloseIcon = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;
const CustomFileItem = ({ children, filesLayoutCssMixin, onCloseIconClick, ...props }: MyFileItemProps) => {
  const handleCloseIconClick = () => {
    onCloseIconClick?.();
  };

  return (
    <MyFileItem filesLayoutCssMixin={filesLayoutCssMixin} {...props}>
      {children}
      <CloseIcon onClick={handleCloseIconClick}>
        <CloseOutline />
      </CloseIcon>
    </MyFileItem>
  );
};

const FileInputTemplate = () => {
  const dimension = 'xl';
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);

  const filesAreEqual = (file1: File, file2: File) =>
    file1.name === file2.name &&
    file1.size === file2.size &&
    file1.type === file2.type &&
    file1.lastModified === file2.lastModified;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    const updatedFileList = fileList.reduce((acc: File[], file) => {
      if (userSelectedFileList.findIndex((userFile) => filesAreEqual(userFile, file)) === -1) {
        acc.push(file);
      }
      return acc;
    }, []);
    setFileList([...updatedFileList, ...userSelectedFileList]);
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const updatedFileList = fileList.filter((file) => !filesAreEqual(file, fileToRemove));

    setFileList(updatedFileList);
  };

  const renderFileList = () => {
    return fileList.map((file) => (
      <CustomFileItem
        key={file.name}
        onCloseIconClick={() => handleRemoveFile(file)}
        filesLayoutCssMixin={fullWidthPositionMixin}
      >
        {file.name}
      </CustomFileItem>
    ));
  };

  const renderCustomInput = (options: RenderFileInputProps) => {
    const handleButtonClick = () => options.onQueryUpload();
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ textAlign: 'justify' }}>Загрузите файлы изображений</p>
        <Button onClick={handleButtonClick}>
          <AttachFileOutline />
          Загрузить документы
        </Button>
      </div>
    );
  };

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Функцию загрузки файла можно “повесить” на другие компоненты, например, кнопки, сделав соответствующие
            текстовые инструкции. В этом случае нужно воспользоваться методом renderCustomFileInput для отрисовки
            реакт-компонента. Для отображения выбранных файлов можно использовать кастомные компоненты.
          </PStyled>
        </>
      }
    >
      <FileInput
        dimension={dimension}
        width="260px"
        ref={inputRef}
        onInput={handleChange}
        renderCustomFileInput={renderCustomInput}
        files={fileList}
      >
        {renderFileList()}
      </FileInput>
    </ExampleSection>
  );
};

export const FileInputCustomizing = () => {
  return (
    <>
      <FileInputTemplate />
    </>
  );
};
