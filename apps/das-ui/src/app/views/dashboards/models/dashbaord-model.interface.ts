import {WidgetCoreOption} from '@das-ui/dashboard-core';
import React from 'react';

export interface DashboardModelInterface {
  widgetModels: WidgetModelInterface[];
}

export interface WidgetModelInterface extends WidgetCoreOption {
  FrontComponent?: React.ComponentState;
  BackComponent?: React.ComponentState;
}

