// import React from 'react';
import styled from '@emotion/styled';
import {
  compose,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  color,
  // TODO: investigate how to deal with ColorProps
  flexbox,
  FlexboxProps
} from 'styled-system';
import css from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop'; 

type Props = SpaceProps & LayoutProps & TypographyProps & FlexboxProps;

const base = (props: any) => css(props.__css)(props.theme);

export const Box = styled('div', { shouldForwardProp })<Props>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  compose(
    space,
    layout,
    typography,
    color,
    flexbox
  ),
);
