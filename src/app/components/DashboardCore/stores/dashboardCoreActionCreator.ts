import { DASHBOARD_STATE, DashboardCoreActionTypes } from './dataType.constant';
import {WidgetCoreModel} from './widgetCoreModel';


export const addWidget = (widget: WidgetCoreModel) => {
  return createEvent(DashboardCoreActionTypes.AddWidget, widget);
};

export const removeWidget = (widget: WidgetCoreModel) => {
  return createEvent(DashboardCoreActionTypes.RemoveWidget, widget);
};

const createEvent = (
  actionType: DashboardCoreActionTypes,
  payload: WidgetCoreModel,
) => {
  return {
    type: actionType,
    dataType: DASHBOARD_STATE,
    payload,
  };
};
