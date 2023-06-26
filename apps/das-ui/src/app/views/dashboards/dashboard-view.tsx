import {DashboardCore, dashboardUpdateAllWidgets, WidgetCoreOption,} from '@das-ui/dashboard-core';
import {useEffect} from 'react';

import {useAppDispatch} from '../../stores/hooks';
import {defaultWidgetOptions} from './dashboard-view-mock-data';

import styles from './dashboard-view.module.scss';
import {createWidgetCoreModels} from './services/create-widget-core-model';
import {DashViewToolbar} from './toolbar/dash-view-toolbar';

import {WidgetTypeEnum} from './widges/widget-types';



export const DashboardView = () => {
  const dispatch = useAppDispatch();

  //initialize the layout
  useEffect(() => {
    dispatch(dashboardUpdateAllWidgets(defaultWidgetOptions));
  }, [dispatch]);

  // const onLayoutChange = (newLayouts: WidgetCoreLayout[]) => {
  //   layouts = newLayouts;
  // };

  return (
    <div className={styles['main-container']}>
      <DashViewToolbar></DashViewToolbar>
      <div className={styles['main-container__dashboard-core']}>
        <DashboardCore
          createWidgetCoreModels={createWidgetCoreModels}
        ></DashboardCore>
      </div>
    </div>
  );
};
