import {Paper} from '@mui/material';
import React, { useContext } from 'react';
import {WidgetCoreToolbar} from './toolbar/widget-core-toolbar';
import { WidgetCoreContext } from './widget-core-context';



import './widget-core.scss';

export const WidgetCore: React.FC = () => {
  const widgetCoreModel = useContext(WidgetCoreContext);

  return (
    <Paper className='widget' data-testid='das-dashboard-widget'>
      <WidgetCoreToolbar></WidgetCoreToolbar>
      <div className='widget__content'>
        {widgetCoreModel.isFrontVisible && widgetCoreModel.FrontComponent && (
          <widgetCoreModel.FrontComponent name={widgetCoreModel.name}></widgetCoreModel.FrontComponent>
        )}

        {!widgetCoreModel.isFrontVisible && widgetCoreModel.BackComponent && (
          <widgetCoreModel.BackComponent></widgetCoreModel.BackComponent>
        )}
      </div>
    </Paper>
  );
};


