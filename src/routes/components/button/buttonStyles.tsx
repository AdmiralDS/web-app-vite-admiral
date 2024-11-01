import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components'

import { Button } from '@admiral-ds/react-ui'
import type { ButtonAppearance } from '@admiral-ds/react-ui'
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonContainer = styled.div<{ $appearance?: ButtonAppearance }>`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }

  ${(p) => p.$appearance === 'white' && 'background-color: #2B313B;'};
`

export const ButtonStyles = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <Button>Button 56</Button>

        <Button iconStart={<StarSolid />}>Button 56</Button>

        <Button iconEnd={<StarSolid />}>Button 56</Button>

        <Button displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button appearance="secondary">Button 56</Button>

        <Button appearance="secondary" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button appearance="secondary" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button
          appearance="secondary"
          displayAsSquare
          iconStart={<StarSolid />}
        />
      </ButtonContainer>
      <ButtonContainer>
        <Button appearance="tertiary">Button 56</Button>

        <Button appearance="tertiary" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button appearance="tertiary" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button
          appearance="tertiary"
          displayAsSquare
          iconStart={<StarSolid />}
        />
      </ButtonContainer>
      <ButtonContainer>
        <Button appearance="ghost">Button 56</Button>

        <Button appearance="ghost" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button appearance="ghost" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button appearance="ghost" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button appearance="danger">Button 56</Button>

        <Button appearance="danger" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button appearance="danger" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button appearance="danger" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button appearance="success">Button 56</Button>

        <Button appearance="success" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button appearance="success" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button
          appearance="success"
          displayAsSquare
          iconStart={<StarSolid />}
        />
      </ButtonContainer>
      <ButtonContainer $appearance="white">
        <Button appearance="white">Button 56</Button>

        <Button appearance="white" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button appearance="white" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button appearance="white" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
    </Wrapper>
  )
}

export const Route = createFileRoute('/components/button/buttonStyles')({
  component: () => <ButtonStyles />,
  staticData: {
    title: 'Button. Стили',
    description: 'Небольшое описание функционала',
  },
});
