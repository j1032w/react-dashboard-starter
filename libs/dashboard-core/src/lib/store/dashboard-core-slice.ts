import {createSlice} from '@reduxjs/toolkit';
import {
  addWidgetReducer,
  flipWidgetReducer,
  removeAllWidgetsReducer,
  removeWidgetReducer,
  updateAllWidgetsReducer,
  updateWidgetReducer
} from './dashboard-core-reducers';
import {DashboardCoreState} from './dashboard-core-state';


const initialState: DashboardCoreState = {
  widgetCoreOptions: []
}

export const dashboardCoreSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    dashboardAddWidget: addWidgetReducer,
    dashboardRemoveWidget: removeWidgetReducer,
    dashboardUpdateWidget: updateWidgetReducer,
    dashboardUpdateAllWidgets: updateAllWidgetsReducer,
    dashboardRemoveAllWidgets: removeAllWidgetsReducer,
    dashboardFlipWidget:flipWidgetReducer
  },

});

export const widgetLayoutsSelector = (state: { dashboard: DashboardCoreState }) => {
  return state.dashboard.widgetCoreOptions;
};


export const {
  dashboardAddWidget,
  dashboardRemoveWidget,
  dashboardUpdateWidget,
  dashboardRemoveAllWidgets,
  dashboardUpdateAllWidgets,
  dashboardFlipWidget
} = dashboardCoreSlice.actions;


export const dashboardReducer = dashboardCoreSlice.reducer;
