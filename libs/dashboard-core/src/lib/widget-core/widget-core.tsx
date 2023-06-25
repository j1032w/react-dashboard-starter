import React, { useContext } from 'react';
import { WidgetCoreContext } from './widget-core-context';

import { WidgetCoreToolbar } from './widget-core-toolbar';

export const WidgetCore: React.FC = () => {
  const widgetCoreModel = useContext(WidgetCoreContext);

  return (
    <>
      <WidgetCoreToolbar></WidgetCoreToolbar>
      <div>
        {widgetCoreModel.isFrontVisible && (
          <widgetCoreModel.FrontComponent name={widgetCoreModel.name}></widgetCoreModel.FrontComponent>
        )}

        {!widgetCoreModel.isFrontVisible && (
          <widgetCoreModel.BackComponent></widgetCoreModel.BackComponent>
        )}
      </div>
    </>
  );
};


