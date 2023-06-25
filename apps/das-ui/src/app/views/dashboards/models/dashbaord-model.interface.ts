import {WidgetCoreLayout} from '@das-ui/dashboard-core';
import React from 'react';

export interface DashboardModelInterface {
  widgetModels: WidgetModelInterface[];
}

export interface WidgetModelInterface extends WidgetCoreLayout {
  FrontComponent?: React.ComponentState;
  BackComponent?: React.ComponentState;
}

