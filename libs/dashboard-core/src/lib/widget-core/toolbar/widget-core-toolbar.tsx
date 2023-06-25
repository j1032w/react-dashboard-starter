import CloseIcon from '@mui/icons-material/Close';
import FlipIcon from '@mui/icons-material/Flip';
import { FC, useContext } from 'react';
import { WidgetCoreContext } from '../widget-core-context';

import styles from './widget-core-toolbar.module.scss';

export const WidgetCoreToolbar: FC = () => {
  const widgetCoreModel = useContext(WidgetCoreContext);

  return (
    <div className={styles.toolbar}>
      <div className={styles['toolbar__title']}> {widgetCoreModel.name}</div>
      <div className={styles['toolbar__buttons']}>
        <span onClick={widgetCoreModel.flip} id="flipBtn">
          <FlipIcon />
        </span>

        <span onClick={widgetCoreModel.remove} id="closeBtn">
          <CloseIcon />
        </span>
      </div>
    </div>
  );
};
