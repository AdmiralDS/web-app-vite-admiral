import { createFileRoute } from '@tanstack/react-router';
import { useRef, useState } from 'react';

import { FileInput, FileItem } from '@admiral-ds/react-ui';
import type { FileInputProps } from '@admiral-ds/react-ui';
import type { FileAttributeProps, InputStatus } from '@admiral-ds/react-ui';
import { ExampleSection, PStyled, uid } from '#routes/-helpers/examples';

const filesAreEqual = (file1: File, file2: File) =>
  file1.name === file2.name &&
  file1.size === file2.size &&
  file1.type === file2.type &&
  file1.lastModified === file2.lastModified;

const accept = ['image/*', '.pdf', 'application/json'];
const ACCEPT_STR = accept.join(', ');
const maxFilesNumber = 3;

const Template = ({ dimension, width }: { dimension: FileInputProps['dimension']; width: FileInputProps['width'] }) => {
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
    <FileInput
      dimension={dimension}
      width={width}
      title={dimension === 'xl' ? `Загрузите не более 3-х файлов типа ${ACCEPT_STR}` : 'Добавьте файлы'}
      ref={inputRef}
      onInput={handleChange}
      accept={ACCEPT_STR}
      files={fileList}
      status={status}
    >
      {renderFileList()}
    </FileInput>
  );
};

const FileInputXL = () => {
  const dimension = 'xl';
  const width = '480px';

  return (
    <ExampleSection text="Размер xl">
      <Template dimension={dimension} width={width} />
    </ExampleSection>
  );
};

const FileInputM = () => {
  const dimension = 'm';
  const width = '320px';

  return (
    <ExampleSection text="Размер m">
      <Template dimension={dimension} width={width} />
    </ExampleSection>
  );
};

export const FileInputDimensions = () => {
  return (
    <>
      <FileInputXL />
      <FileInputM />
    </>
  );
};

export const Route = createFileRoute('/components/fileinput/dimensions')({
  component: () => <FileInputDimensions />,
  staticData: {
    title: 'File input. Размеры',
  },
});
