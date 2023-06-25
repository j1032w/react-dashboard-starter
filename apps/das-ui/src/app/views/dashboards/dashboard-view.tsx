import {
  DashboardCore,
  dashboardUpdateAllWidgets,
  WidgetCoreOption,
} from '@das-ui/dashboard-core';
import { useEffect } from 'react';

import { useAppDispatch } from '../../stores/hooks';
import { createWidgetCoreModels } from './services/create-widget-core-model';

import { WidgetTypeEnum } from './widges/widget-types';

const defaultWidgetStates: WidgetCoreOption[] = [
  {
    i: '1',
    x: 0,
    y: 0,
    w: 4,
    h: 12,
    name: 'Housing Market',
    isFrontVisible: true,
    frontComponentType: WidgetTypeEnum.HousingMarketFront,
    backComponentType: WidgetTypeEnum.HousingMarketBack
  },
  {
    i: '2',
    x: 4,
    y: 0,
    w: 8,
    h: 7,
    name: 'Widget B',
    isFrontVisible: true,
    frontComponentType: WidgetTypeEnum.DemoFrontComponent,
    backComponentType: WidgetTypeEnum.DemoBackComponent
  },
  {
    i: '3',
    x: 7,
    y: 7,
    w: 5,
    h: 10,
    name: 'Widget C',
    isFrontVisible: true,
    frontComponentType: WidgetTypeEnum.DemoFrontComponent,
    backComponentType: WidgetTypeEnum.DemoBackComponent
  },
  {
    i: '4',
    x: 4,
    y: 7,
    w: 3,
    h: 10,
    name: 'Widget D',
    isFrontVisible: false,
    frontComponentType: WidgetTypeEnum.DemoFrontComponent,
    backComponentType: WidgetTypeEnum.DemoBackComponent
  }
];

export const DashboardView = () => {
  const dispatch = useAppDispatch();

  //initialize the layout
  useEffect(() => {
    dispatch(dashboardUpdateAllWidgets(defaultWidgetStates));
  }, [dispatch]);

  // const onLayoutChange = (newLayouts: WidgetCoreLayout[]) => {
  //   layouts = newLayouts;
  // };

  return (
    <DashboardCore
      createWidgetCoreModels={createWidgetCoreModels}
    ></DashboardCore>
  );
};
