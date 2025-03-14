import { ExampleSection } from '#routes/-helpers/examples';
import { IconPlacement } from '@admiral-ds/react-ui';
import CloseOutline from '@admiral-ds/icons/build/service/CloseOutline.svg?react';

// eslint-disable-next-line no-console
const handleClick = () => console.log('IconPlacement clicked');

export const IconPlacementSizes = () => {
  return (
    <>
      <ExampleSection text="Размер L Small">
        <IconPlacement dimension="lSmall" onClick={handleClick}>
          <CloseOutline />
        </IconPlacement>
        <IconPlacement dimension="lSmall" onClick={handleClick} disabled={true}>
          <CloseOutline />
        </IconPlacement>
      </ExampleSection>
      <ExampleSection text="Размер L Big">
        <IconPlacement dimension="lBig" onClick={handleClick}>
          <CloseOutline />
        </IconPlacement>
        <IconPlacement dimension="lBig" disabled={true} onClick={handleClick}>
          <CloseOutline />
        </IconPlacement>
      </ExampleSection>
      <ExampleSection text="Размер M Small">
        <IconPlacement dimension="mSmall" onClick={handleClick}>
          <CloseOutline />
        </IconPlacement>
        <IconPlacement dimension="mSmall" onClick={handleClick} disabled={true}>
          <CloseOutline />
        </IconPlacement>
      </ExampleSection>
      <ExampleSection text="Размер M Big">
        <IconPlacement dimension="mBig" onClick={handleClick}>
          <CloseOutline />
        </IconPlacement>
        <IconPlacement dimension="mBig" disabled={true} onClick={handleClick}>
          <CloseOutline />
        </IconPlacement>
      </ExampleSection>
      <ExampleSection text="Размер S">
        <IconPlacement dimension="s" onClick={handleClick}>
          <CloseOutline />
        </IconPlacement>
        <IconPlacement dimension="s" disabled={true} onClick={handleClick}>
          <CloseOutline />
        </IconPlacement>
      </ExampleSection>
    </>
  );
};
