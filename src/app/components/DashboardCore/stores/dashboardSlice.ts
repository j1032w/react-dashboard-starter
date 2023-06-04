import {createSlice} from '@reduxjs/toolkit';
import {addWidgetReducer, removeAllWidgetsReducer, removeWidgetReducer, restoreAllWidgetsReducer,} from './dashboardCoreReducer';
import {WidgetCoreModel} from './widgetCoreModel';

export interface DashboardState {
  widgetModels: WidgetCoreModel[];
}

const initialState: DashboardState = {
  widgetModels: [],
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: addWidgetReducer,
    removeWidget: removeWidgetReducer,
    restoreAllWidgets: restoreAllWidgetsReducer,
    removeAllWidgets: removeAllWidgetsReducer,
  },
});

export const selectDashboard = (state: any) => state.dashboard;

export const {addWidget, removeWidget, restoreAllWidgets, removeAllWidgets} =
  dashboardSlice.actions;

export const dashboardReducer = dashboardSlice.reducer;
