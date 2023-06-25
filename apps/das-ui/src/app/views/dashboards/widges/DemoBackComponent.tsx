import {Paper} from '@mui/material';
import {FC} from 'react';

export const DemoBackComponent: FC<any> = ({name}: { name: string }) => {
  return (
    <>{name} back</>
  );
}


