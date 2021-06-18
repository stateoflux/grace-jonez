import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { 
  color, 
  ColorProps as SSColorProps, 
  space, 
  SpaceProps, 
  typography, 
  TypographyProps, 
  TextColorProps,
  compose, 
  variant,
  system, 
} from 'styled-system';

// https://github.com/styled-system/styled-system/issues/1206
interface ColorProps extends Omit<SSColorProps, 'color'>{
  textColor?: TextColorProps['color'];
}

type StyledButtonProps = ColorProps &SpaceProps & TypographyProps;
interface Props extends StyledButtonProps {
  children: React.ReactNode;
}

type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, Props>((props, ref) => (
  <StyledButton ref={ref} px={4} py={2} {...props}>{props.children}</StyledButton>
))

const textColor = system({
  textColor: {
    property: 'color',
    scale: 'colors',
  }
})

const StyledButton = styled.button<StyledButtonProps>(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    fontSize: 'inherit',
    border: '1px solid transparent',
    borderRadius: '4px'
  },
  variant({
    scale: 'buttons',
    variants: {
      primary: {
        color: 'white',
        bg: 'blue',
      }, 
      secondary: {
        color: 'white',
        bg: 'secondary',
      }
    }
  }),
  compose(color, textColor, space, typography)
);
