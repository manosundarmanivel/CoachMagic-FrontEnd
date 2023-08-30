import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function BasicTimePicker(props) {
    const label = props.label;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label={label} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
