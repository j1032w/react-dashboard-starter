import React, {createContext} from 'react';
import {WidgetCoreModel} from './models/widget-core.model';


export const WidgetCoreContext: React.Context<WidgetCoreModel> = createContext({} as WidgetCoreModel);
export const WidgetCoreProvider = WidgetCoreContext.Provider;
