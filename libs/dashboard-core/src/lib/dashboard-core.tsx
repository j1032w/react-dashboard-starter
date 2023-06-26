import * as _ from 'lodash';
import {FC} from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import {useDispatch, useSelector} from 'react-redux';
import 'react-resizable/css/styles.css';

import styles from './dashboard-core.module.scss';

import {dashboardFlipWidget, dashboardRemoveWidget, dashboardUpdateAllWidgets,} from './store/dashboard-core-slice';
import {DashboardCoreState} from './store/dashboard-core-state';
import {WidgetCoreLayout} from './widget-core/models/widget-core-layout';

import {WidgetCoreOption} from './widget-core/models/widget-core-option';
import {WidgetCoreModel} from './widget-core/models/widget-core.model';
import {WidgetCore} from './widget-core/widget-core';
import {WidgetCoreProvider} from './widget-core/widget-core-context';

const ResponsiveGridLayout = WidthProvider(Responsive);

type DashboardCoreProps = {
  createWidgetCoreModels: (
    widgetCoreLayouts: WidgetCoreOption[]
  ) => WidgetCoreModel[];
};


const createWidgetCoreOptions = (
  widgetCoreLayouts: WidgetCoreLayout[],
  widgetCoreModels: WidgetCoreModel[]
): WidgetCoreOption[] => {
  return widgetCoreLayouts.map(
    (item) => {
      const widgetCoreModel = _.find(widgetCoreModels, {i: item.i});

      return {
        i: item.i,
        x: item.x,
        y: item.y,
        w: item.w,
        h: item.h,
        name: widgetCoreModel?.name ?? '',
        isFrontVisible: widgetCoreModel?.isFrontVisible ?? true,
        frontComponentType: widgetCoreModel?.frontComponentType,
        backComponentType: widgetCoreModel?.backComponentType,
      };
    }
  );

}


export const DashboardCore: FC<DashboardCoreProps> = ({
                                                        createWidgetCoreModels,
                                                      }) => {
  const dispatch = useDispatch();

  const removeWidget = (index: string) => {
    dispatch(dashboardRemoveWidget(index));
  };

  const flipWidget = (index: string) => {
    dispatch(dashboardFlipWidget(index));
  };

  const {widgetCoreLayouts, widgetCoreModels, widgetCoreOptions} =
    useSelector((state: { dashboard: DashboardCoreState }) => {
      const widgetCoreOptions: WidgetCoreOption[] =
        state.dashboard.widgetCoreOptions;

      const widgetCoreLayouts: WidgetCoreLayout[] = widgetCoreOptions.map(
        (item) => {
          return {
            i: item.i,
            x: item.x,
            y: item.y,
            w: item.w,
            h: item.h,
          };
        }
      );

      const widgetCoreModels = createWidgetCoreModels(widgetCoreOptions);

      return {widgetCoreLayouts, widgetCoreModels, widgetCoreOptions};
    });

  const onLayoutChange = (widgetCoreLayouts: WidgetCoreLayout[]) => {
    const widgetCoreOptions = createWidgetCoreOptions(widgetCoreLayouts, widgetCoreModels);
    dispatch(dashboardUpdateAllWidgets(widgetCoreOptions));
  };

  return (
    <div className={styles['grid-layout']}>
      <ResponsiveGridLayout
        layouts={{lg: widgetCoreLayouts}}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 6, sm: 3, xs: 2, xxs: 1}}
        rowHeight={30}
        width={1200}
        draggableHandle=".draggable-handle"
        onLayoutChange={onLayoutChange}
      >
        {widgetCoreModels.map((widgetCoreModel) => {
          const providerValue = {
            ...widgetCoreModel,
            remove: () => removeWidget(widgetCoreModel.i),
            flip: () => flipWidget(widgetCoreModel.i),
          };

          return (
            <div key={widgetCoreModel.i}>
              <WidgetCoreProvider value={providerValue}>
                <WidgetCore></WidgetCore>
              </WidgetCoreProvider>
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
};
