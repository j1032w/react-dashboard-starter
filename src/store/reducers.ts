/**
 * Combine all reducers in this file and export the combined reducers.
 */

import {combineReducers} from '@reduxjs/toolkit';

import {InjectedReducersType} from 'utils/types/injector-typings';
import {dashboardReducer} from '../app/components/DashboardCore/stores/dashboardSlice';
import {dasHosingReducer} from '../app/pages/HomePage/components/dashboards/houseMarketings/stores/dasHousingSlice';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  // if (Object.keys(injectedReducers).length === 0) {
  //   return state => state;
  // } else {
  //   return combineReducers({
  //     ...injectedReducers,
  //   });
  // }

  // https://github.com/react-boilerplate/react-boilerplate-cra-template/blob/master/docs/misc/faq.md
  return combineReducers({
    dashboard: dashboardReducer,
    dasHousing: dasHosingReducer,
    ...injectedReducers,
  });
}
