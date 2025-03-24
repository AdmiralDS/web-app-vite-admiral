import { useRef, useState } from 'react';

import { FileInput, FileInputField, FileItem } from '@admiral-ds/react-ui';
import type { FileAttributeProps, InputStatus } from '@admiral-ds/react-ui';
import { ExampleSection, PStyled, uid } from '#examples/-helpers';

const filesAreEqual = (file1: File, file2: File) =>
  file1.name === file2.name &&
  file1.size === file2.size &&
  file1.type === file2.type &&
  file1.lastModified === file2.lastModified;

const accept = ['image/*', '.pdf', 'application/json'];
const ACCEPT_STR = accept.join(', ');
const maxFilesNumber = 3;

const FileInputTemplate = () => {
  const dimension = 'xl';
  const width = '480px';
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);
  const [fileAttributesMap, setFileAttributesMap] = useState(new Map<File, FileAttributeProps>());
  const [status, setStatus] = useState<InputStatus | undefined>(undefined);
  const handlePreviewIconClick = (file: File) => {
    // eslint-disable-next-line no-console
    console.log(`Preview icon on file "${file.name}" was clicked`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    // eslint-disable-next-line no-console
    userSelectedFileList.forEach((file) => console.log(`change ${file.name}`));
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const updatedFileList = fileList.reduce((acc: File[], file) => {
      if (userSelectedFileList.findIndex((userFile) => filesAreEqual(userFile, file)) === -1) {
        acc.push(file);
      } else {
        updatedFileAttributesMap.delete(file);
      }
      return acc;
    }, []);
    if (userSelectedFileList.length + updatedFileList.length > maxFilesNumber) {
      userSelectedFileList.splice(maxFilesNumber - updatedFileList.length);
      setStatus('error');
    } else {
      setStatus(undefined);
    }
    userSelectedFileList.forEach((file) => {
      const imageURL = file.type.startsWith('image') ? URL.createObjectURL(file) : undefined;
      const onPreviewIconClick = file.type.startsWith('image') ? () => handlePreviewIconClick(file) : undefined;
      updatedFileAttributesMap.set(file, {
        fileId: uid(),
        fileName: file.name.substring(0, file.name.lastIndexOf('.')),
        fileType: file.type,
        fileSize: file.size,
        status: 'Uploaded',
        errorMessage: 'Что-то явно пошло не так...',
        previewImageURL: imageURL,
        onPreviewIconClick: onPreviewIconClick,
      });
    });
    setFileList([...updatedFileList, ...userSelectedFileList]);
    setFileAttributesMap(updatedFileAttributesMap);
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const updatedFileList = fileList.filter((file) => !filesAreEqual(file, fileToRemove));
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const attributes = fileAttributesMap.get(fileToRemove);
    if (attributes && attributes.previewImageURL) {
      URL.revokeObjectURL(attributes.previewImageURL);
    }
    updatedFileAttributesMap.delete(fileToRemove);
    setFileList(updatedFileList);
    setFileAttributesMap(updatedFileAttributesMap);
    setStatus(undefined);
  };

  const renderFileList = () => {
    return fileList.map((file) => {
      const attributes = fileAttributesMap.get(file);
      if (attributes) {
        return (
          <FileItem
            fileId={attributes.fileId}
            key={attributes.fileId}
            fileName={attributes.fileName}
            fileType={attributes.fileType}
            fileSize={attributes.fileSize}
            status={attributes.status}
            errorMessage={attributes.errorMessage}
            previewImageURL={attributes.previewImageURL}
            onCloseIconClick={() => handleRemoveFile(file)}
            onPreviewIconClick={attributes.onPreviewIconClick}
            dimension={dimension}
          />
        );
      }
    });
  };

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Компонент позволяет выбирать локальные файлы пользователя для последующей загрузки их на сервер. Выбирать
            файлы можно как через нажатие на компонент, так и через Drag and Drop на компонент. Компонент имеет две
            разновидности отображения — размер XL с превью изображения или иконкой формата файла и размер M без превью,
            передается параметром fileDimension.
          </PStyled>
          <PStyled>
            Для отображения компонента в другом варианте можно использовать параметр renderCustomFileInput.
          </PStyled>
          <PStyled>
            В компоненте есть возможность синхронизировать внешний стейт списка файлов с внутренним стейтом нативного
            инпута через параметр files.
          </PStyled>
          <PStyled>Компонент можно изменять по ширине, минимальная ширина 320px.</PStyled>
        </>
      }
    >
      <FileInput
        dimension={dimension}
        width={width}
        title={`Загрузите не более 3-х файлов типа ${ACCEPT_STR}`}
        ref={inputRef}
        onInput={handleChange}
        accept={ACCEPT_STR}
        files={fileList}
        status={status}
      >
        {renderFileList()}
      </FileInput>
    </ExampleSection>
  );
};

const FileInputFieldTemplate = () => {
  const dimension = 'xl';
  const width = '480px';
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);
  const [fileAttributesMap, setFileAttributesMap] = useState(new Map<File, FileAttributeProps>());
  const [status, setStatus] = useState<InputStatus | undefined>(undefined);
  const handlePreviewIconClick = (file: File) => {
    // eslint-disable-next-line no-console
    console.log(`Preview icon on file "${file.name}" was clicked`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    // eslint-disable-next-line no-console
    userSelectedFileList.forEach((file) => console.log(`change ${file.name}`));
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const updatedFileList = fileList.reduce((acc: File[], file) => {
      if (userSelectedFileList.findIndex((userFile) => filesAreEqual(userFile, file)) === -1) {
        acc.push(file);
      } else {
        updatedFileAttributesMap.delete(file);
      }
      return acc;
    }, []);
    if (userSelectedFileList.length + updatedFileList.length > maxFilesNumber) {
      userSelectedFileList.splice(maxFilesNumber - updatedFileList.length);
      setStatus('error');
    } else {
      setStatus(undefined);
    }
    userSelectedFileList.forEach((file) => {
      const imageURL = file.type.startsWith('image') ? URL.createObjectURL(file) : undefined;
      const onPreviewIconClick = file.type.startsWith('image') ? () => handlePreviewIconClick(file) : undefined;
      updatedFileAttributesMap.set(file, {
        fileId: uid(),
        fileName: file.name.substring(0, file.name.lastIndexOf('.')),
        fileType: file.type,
        fileSize: file.size,
        status: 'Uploaded',
        errorMessage: 'Что-то явно пошло не так...',
        previewImageURL: imageURL,
        onPreviewIconClick: onPreviewIconClick,
      });
    });
    setFileList([...updatedFileList, ...userSelectedFileList]);
    setFileAttributesMap(updatedFileAttributesMap);
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const updatedFileList = fileList.filter((file) => !filesAreEqual(file, fileToRemove));
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const attributes = fileAttributesMap.get(fileToRemove);
    if (attributes && attributes.previewImageURL) {
      URL.revokeObjectURL(attributes.previewImageURL);
    }
    updatedFileAttributesMap.delete(fileToRemove);
    setFileList(updatedFileList);
    setFileAttributesMap(updatedFileAttributesMap);
    setStatus(undefined);
  };

  const renderFileList = () => {
    return fileList.map((file) => {
      const attributes = fileAttributesMap.get(file);
      if (attributes) {
        return (
          <FileItem
            fileId={attributes.fileId}
            key={attributes.fileId}
            fileName={attributes.fileName}
            fileType={attributes.fileType}
            fileSize={attributes.fileSize}
            status={attributes.status}
            errorMessage={attributes.errorMessage}
            previewImageURL={attributes.previewImageURL}
            onCloseIconClick={() => handleRemoveFile(file)}
            onPreviewIconClick={attributes.onPreviewIconClick}
            dimension={dimension}
          />
        );
      }
    });
  };

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Для того, чтобы добавть лэйбл или дополнительный текст, используйте компонент FileInputField
          </PStyled>
        </>
      }
    >
      <FileInputField
        dimension={dimension}
        width={width}
        title={`Загрузите не более 3-х файлов типа ${ACCEPT_STR}`}
        ref={inputRef}
        onInput={handleChange}
        accept={ACCEPT_STR}
        files={fileList}
        status={status}
        label="Лэйбл"
        extraText="Дополнительный текст"
      >
        {renderFileList()}
      </FileInputField>
    </ExampleSection>
  );
};

export const FileInputBasic = () => {
  return (
    <>
      <FileInputTemplate />
      <FileInputFieldTemplate />
    </>
  );
};
