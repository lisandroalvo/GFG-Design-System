import MuiToggleButton, { ToggleButtonProps } from '@mui/material/ToggleButton';
import { FC } from 'react';

export const ToggleButton: FC<ToggleButtonProps> = (props) => {
  return <MuiToggleButton {...props} />;
};

export default ToggleButton;
