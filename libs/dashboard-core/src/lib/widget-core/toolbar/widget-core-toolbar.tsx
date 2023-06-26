import CloseIcon from '@mui/icons-material/Close';
import FlipIcon from '@mui/icons-material/Flip';
import {IconButton, Tooltip} from '@mui/material';
import {FC, useContext} from 'react';
import {WidgetCoreContext} from '../widget-core-context';

import styles from './widget-core-toolbar.module.scss';

export const WidgetCoreToolbar: FC = () => {
  const widgetCoreModel = useContext(WidgetCoreContext);

  return (
    <div className={styles.toolbar}>
      <div className={styles['toolbar__title'] + ' draggable-handle'}> {widgetCoreModel.name}</div>
      <div className={styles['toolbar__buttons']}>

        <Tooltip title="Flip">
          <IconButton onClick={widgetCoreModel.flip} id="flipBtn">
            <FlipIcon/>
          </IconButton>
        </Tooltip>

        <Tooltip title="Remove">
          <IconButton onClick={widgetCoreModel.remove} id="closeBtn">
            <CloseIcon/>
          </IconButton>
        </Tooltip>

      </div>
    </div>
  );
};
