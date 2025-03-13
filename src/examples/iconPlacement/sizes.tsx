import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { IconPlacement } from '@admiral-ds/react-ui';
import CloseOutline from '@admiral-ds/icons/build/service/CloseOutline.svg?react';

// eslint-disable-next-line no-console
const handleClick = () => console.log('IconPlacement clicked');

export const Template = () => {
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

export const Route = createFileRoute('/components/iconPlacement/sizes')({
  component: () => <Template />,
  staticData: {
    title: 'IconPlacement. Размеры',
    description:
      'У компонента есть три размера иконки: L 24, M 20 и S 16. Причем, у размеров L и M два размера Hover-круга для различных ситуаций, чтобы вписываться внутрь небольших компонентов. БОльшие размеры круга обозначены в названии вариантов компонента как Big, малые — Small.',
  },
});
