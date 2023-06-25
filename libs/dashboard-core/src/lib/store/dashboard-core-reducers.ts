import { PayloadAction } from '@reduxjs/toolkit';
import { WidgetCoreLayout } from '../widget-core/models/widget-core-layout';

import { DashboardCoreState } from './dashboard-core-state';

// Redux Toolkit's createReducer API uses Immer internally automatically.
// In turn, createSlice uses createReducer inside, so it's also safe to "mutate" state there as well:
// https://redux-toolkit.js.org/usage/immer-reducers#redux-toolkit-and-immer

export const addWidgetReducer = (
  state: DashboardCoreState,
  payLoadAction: PayloadAction<WidgetCoreLayout> // {payload}: {payload: WidgetCoreLayout}
) => {
  state.widgetCoreLayouts.push(payLoadAction.payload);
};

export const updateWidgetReducer = (
  state: DashboardCoreState,
  payloadAction: PayloadAction<WidgetCoreLayout>
) => {
  const widget = state.widgetCoreLayouts.find(
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
  state.widgetCoreLayouts = state.widgetCoreLayouts.filter(
    (item) => item.i !== action.payload
  );
};

export const updateLayoutReducer = (
  state: DashboardCoreState,
  action: PayloadAction<WidgetCoreLayout[]>
) => {
  state.widgetCoreLayouts = action.payload;
};

export const flipWidgetReducer = (
  state: DashboardCoreState,
  action: PayloadAction<string>
) => {
  const widget = state.widgetCoreLayouts.find(
    (item) => item.i === action.payload
  );
  if (widget) {
    widget.isFrontVisible = !widget.isFrontVisible;
  }
};

export const removeAllWidgetsReducer = (state: DashboardCoreState) => {
  state.widgetCoreLayouts = [];
};
