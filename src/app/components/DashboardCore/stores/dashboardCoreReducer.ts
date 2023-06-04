import { PayloadAction } from '@reduxjs/toolkit';
import { DashboardState } from './dashboardSlice';
import { WidgetCoreModel } from './widgetCoreModel';

export const addWidgetReducer = (
  state: DashboardState,
  action: PayloadAction<WidgetCoreModel>,
) => {
  return {
    widgetModels: [...state.widgetModels, action.payload],
  };
};

export const removeWidgetReducer = (
  state: DashboardState,
  action: PayloadAction<WidgetCoreModel>,
) => {
  return {
    widgetModels: state.widgetModels.filter(
      widget => widget.id !== action.payload.id,
    ),
  };
};

export const restoreAllWidgetsReducer = (state: DashboardState, action) => {
  return {
    widgetModels: action.payload.widgetModels,
  };
};

export const removeAllWidgetsReducer = (state: DashboardState) => {
  return {
    widgetModels: [],
  };
};
