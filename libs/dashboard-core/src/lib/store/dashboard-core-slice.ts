import {createSlice} from '@reduxjs/toolkit';
import {
  addWidgetReducer,
  flipWidgetReducer,
  removeAllWidgetsReducer,
  removeWidgetReducer,
  updateLayoutReducer,
  updateWidgetReducer
} from './dashboard-core-reducers';
import {DashboardCoreState} from './dashboard-core-state';


const initialState: DashboardCoreState = {
  widgetCoreLayouts: []
}

export const dashboardCoreSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    dashboardAddWidget: addWidgetReducer,
    dashboardRemoveWidget: removeWidgetReducer,
    dashboardUpdateWidget: updateWidgetReducer,
    dashboardUpdateLayout: updateLayoutReducer,
    dashboardRemoveAllWidgets: removeAllWidgetsReducer,
    dashboardFlipWidget:flipWidgetReducer
  },

});

export const widgetLayoutsSelector = (state: { dashboard: DashboardCoreState }) => {
  return state.dashboard.widgetCoreLayouts;
};


export const {
  dashboardAddWidget,
  dashboardRemoveWidget,
  dashboardUpdateWidget,
  dashboardRemoveAllWidgets,
  dashboardUpdateLayout,
  dashboardFlipWidget
} = dashboardCoreSlice.actions;


export const dashboardReducer = dashboardCoreSlice.reducer;
