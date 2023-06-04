import {PayloadAction} from '@reduxjs/toolkit';
import {DashboardState} from './dashboardSlice';
import {WidgetCoreModel} from './widgetCoreModel';

// Redux Toolkit's createReducer API uses Immer internally automatically.
// In turn, createSlice uses createReducer inside, so it's also safe to "mutate" state there as well:
// https://redux-toolkit.js.org/usage/immer-reducers#redux-toolkit-and-immer





export const addWidgetReducer = (
  state: DashboardState,
  action: PayloadAction<WidgetCoreModel>,
) => {
  return {
    widgetModels: [...state.widgetModels, action.payload],
  };
};


export const updateWidgetReducer = (
  state: DashboardState,
  action: PayloadAction<WidgetCoreModel>,
) => {
  const widget = state.widgetModels.find(w => w.i === action.payload.i);

  Object.assign(widget, action.payload);
};

export const removeWidgetReducer = (
  state: DashboardState,
  action: PayloadAction<WidgetCoreModel>,
) => {
  return {
    widgetModels: state.widgetModels.filter(
      widget => widget.i !== action.payload.i,
    ),
  };
};

export const restoreAllWidgetsReducer = (state: DashboardState, action) => {
  return {widgetModels: [...action.payload.widgetModels]};
};

export const removeAllWidgetsReducer = (state: DashboardState) => {
  return {
    widgetModels: [],
  };
};
