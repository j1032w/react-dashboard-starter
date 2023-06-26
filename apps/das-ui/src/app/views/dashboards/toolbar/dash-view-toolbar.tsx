import {dashboardRemoveAllWidgets, dashboardUpdateAllWidgets} from '@das-ui/dashboard-core';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ResetTvIcon from '@mui/icons-material/ResetTv';
import {IconButton} from '@mui/material';
import * as React from 'react';
import {FC} from 'react';
import {useAppDispatch} from '../../../stores/hooks';
import {defaultWidgetOptions} from '../dashboard-view-mock-data';

import styles from './dash-view-toolbar.module.scss';

export const DashViewToolbar: FC = () => {
  const dispatch = useAppDispatch();

  const reset = () => {
    dispatch(dashboardUpdateAllWidgets(defaultWidgetOptions));
  }

  const removeAll = () => {
    dispatch(dashboardRemoveAllWidgets());
  }

  return (
    <div className={styles['toolbar']} id='dashboardToolbar'>


      <IconButton onClick={reset} id='resetBtn'>
        <ResetTvIcon></ResetTvIcon>
        <span className={styles['toolbar__button-text']}>Reset</span>
      </IconButton>

      <IconButton onClick={removeAll} id='removeAllBtn'>
        <ClearAllIcon></ClearAllIcon>
        <span className={styles['toolbar__button-text']}>Remove All</span>
      </IconButton>


    </div>
  );
};
