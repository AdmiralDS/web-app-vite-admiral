import { createFileRoute } from '@tanstack/react-router';
import { useRef, useState } from 'react';

import { FileInput, FileItem } from '@admiral-ds/react-ui';
import type { FileAttributeProps } from '@admiral-ds/react-ui';
import { ExampleSection, PStyled, uid } from '../../-helpers/examples';

const file1 = new File(['foo'], 'example1.jpeg', {
  type: 'image/jpeg',
});
const file2 = new File(['foo'], 'veryveryveryveryveryveryveryveryverylongfilenameexample2.pdf', {
  type: 'application/pdf',
});
const file3 = new File(['foo'], 'example3.doc', {
  type: 'application/msword',
});
const file4 = new File(['foo'], 'example4.xls', {
  type: 'application/vnd.ms-excel',
});
const file5 = new File(['foo'], 'example5.zip', {
  type: 'application/zip',
});

const filesInitial = [file1, file2, file3, file4, file5];
const filesAttributesInitial: FileAttributeProps[] = [
  {
    fileId: '1',
    fileName: 'example1',
    fileType: file1.type,
    fileSize: file1.size,
    status: 'Uploaded',
  },
  {
    fileId: '2',
    fileName: 'veryveryveryveryveryveryveryveryverylongfilenameexample2',
    fileType: file2.type,
    fileSize: file2.size,
    status: 'Error',
    errorMessage: 'Что-то явно пошло не так...',
  },
  {
    fileId: '3',
    fileName: 'example3',
    fileType: file3.type,
    fileSize: file3.size,
    status: 'Loading',
  },
  {
    fileId: '4',
    fileName: 'example4',
    fileType: file4.type,
    fileSize: file4.size,
    status: 'Queue',
  },
  {
    fileId: '5',
    fileName: 'example5',
    fileType: file5.type,
    fileSize: file5.size,
    status: 'Uploaded',
  },
];

const filesMapInitial = () => {
  const initialMap = new Map<File, FileAttributeProps>();
  filesInitial.forEach((file, index) => initialMap.set(file, filesAttributesInitial[index]));
  return initialMap;
};

const FileInputTemplate = () => {
  const dimension = 'xl';
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([...filesInitial]);
  const [fileAttributesMap, setFileAttributesMap] = useState(filesMapInitial());

  const filesAreEqual = (file1: File, file2: File) =>
    file1.name === file2.name &&
    file1.size === file2.size &&
    file1.type === file2.type &&
    file1.lastModified === file2.lastModified;

  const handlePreviewIconClick = (file: File) => {
    // eslint-disable-next-line no-console
    console.log(`Preview icon on file "${file.name}" was clicked`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const updatedFileList = fileList.reduce((acc: File[], file) => {
      if (userSelectedFileList.findIndex((userFile) => filesAreEqual(userFile, file)) === -1) {
        acc.push(file);
      } else {
        updatedFileAttributesMap.delete(file);
      }
      return acc;
    }, []);
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
            Для отображения статуса загрузки файла или ошибки при валидации, компонент файла через параметр status
            принимает состояния Uploaded, Loading, Error, Queue, а через параметр error - текст ошибки.
          </PStyled>
        </>
      }
    >
      <FileInput
        dimension={dimension}
        width={'480px'}
        title={'Загрузите файлы'}
        ref={inputRef}
        onInput={handleChange}
        files={fileList}
      >
        {renderFileList()}
      </FileInput>
    </ExampleSection>
  );
};

export const FileInputFileStatuses = () => {
  return (
    <>
      <FileInputTemplate />
    </>
  );
};

export const Route = createFileRoute('/components/fileinput/filestatus')({
  component: () => <FileInputFileStatuses />,
  staticData: {
    title: 'File input. Статусы загрузки файлов',
  },
});
