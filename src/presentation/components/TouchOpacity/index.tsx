import React from 'react';
import { Button } from './styles';

interface TouchOpacityParams {
  backgroundColor?: string;
  color?: string;
  width?: number;
  height?: number;
  children: JSX.Element | JSX.Element[] | string;
}

export const TouchOpacity: React.FC<TouchOpacityParams> = ({
  children,
  width = 13.5,
  height = 3.7,
  backgroundColor = '#F97D26',
  color = '#FFFFFF',
}: TouchOpacityParams): JSX.Element => {
  return (
    <Button
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      type="button"
    >
      {children}
    </Button>
  );
};
