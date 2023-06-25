import React, {createContext} from 'react';
import {WidgetCoreLayouts} from './models/widget-core.model';


export const WidgetCoreContext: React.Context<WidgetCoreLayouts> = createContext({} as WidgetCoreLayouts);
export const WidgetCoreProvider = WidgetCoreContext.Provider;
