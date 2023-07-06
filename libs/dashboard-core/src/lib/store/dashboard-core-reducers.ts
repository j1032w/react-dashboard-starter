import { PayloadAction } from '@reduxjs/toolkit';
import { WidgetCoreOption } from '../widget-core/models/widget-core-option';

import { DashboardCoreState } from './dashboard-core-state';

// Redux Toolkit's createReducer API uses Immer internally automatically.
// In turn, createSlice uses createReducer inside, so it's also safe to "mutate" state there as well:
// https://redux-toolkit.js.org/usage/immer-reducers#redux-toolkit-and-immer

export const addWidgetReducer = (
  state: DashboardCoreState,
  payLoadAction: PayloadAction<WidgetCoreOption> // {payload}: {payload: WidgetCoreLayout}
) => {
  state.widgetCoreOptions.push(payLoadAction.payload);
};

export const updateWidgetReducer = (
  state: DashboardCoreState,
  payloadAction: PayloadAction<WidgetCoreOption>
) => {
  const widget = state.widgetCoreOptions.find(
    (item) => item.i === payloadAction.payload.i
  );
  if (widget) {
    Object.assign(widget, payloadAction.payload);
  }
};

export const removeWidgetReducer = (
  state: DashboardCoreState,
  action: PayloadAction<string>
) => {
  state.widgetCoreOptions = state.widgetCoreOptions.filter(
    (item) => item.i !== action.payload
  );
};

export const updateAllWidgetsReducer = (
  state: DashboardCoreState,
  action: PayloadAction<WidgetCoreOption[]>
) => {
  state.widgetCoreOptions = action.payload;
};

export const flipWidgetReducer = (
  state: DashboardCoreState,
  action: PayloadAction<string>
) => {
  const widget = state.widgetCoreOptions.find(
    (item) => item.i === action.payload
  );
  if (widget) {
    widget.isFrontVisible = !widget.isFrontVisible;
  }
};

export const removeAllWidgetsReducer = (state: DashboardCoreState) => {
  state.widgetCoreOptions = [];
};
