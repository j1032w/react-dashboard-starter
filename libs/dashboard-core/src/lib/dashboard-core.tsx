import { DashboardCoreState } from './store/dashboard-core-state';
import { FC } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import 'react-resizable/css/styles.css';
import './dashboard-core.scss';
import { dashboardFlipWidget, dashboardRemoveWidget, dashboardUpdateLayout } from './store/dashboard-core-slice';


import { WidgetCoreLayout } from './widget-core/models/widget-core-layout';
import { WidgetCoreModel } from './widget-core/models/widget-core.model';
import { WidgetCore } from "./widget-core/widget-core";
import { WidgetCoreProvider } from './widget-core/widget-core-context';

const ResponsiveGridLayout = WidthProvider(Responsive);

type DashboardCoreProps = {
  buildWidgetCoreModels: (
    widgetCoreLayouts: WidgetCoreLayout[]
  ) => WidgetCoreModel[];
};

export const DashboardCore: FC<DashboardCoreProps> = ({ buildWidgetCoreModels }) => {
  const dispatch = useDispatch();

  const removeWidget = (index: string) => {
    dispatch(dashboardRemoveWidget(index));
  };

  const flipWidget = (index: string) => {
    dispatch(dashboardFlipWidget(index));
  };

  const widgetCoreModels: WidgetCoreModel[] = useSelector(
    (state: { dashboard: DashboardCoreState }) => {
      const widgetCoreLayouts: WidgetCoreLayout[] =
        state.dashboard.widgetCoreLayouts;
      return buildWidgetCoreModels(widgetCoreLayouts);
    }
  );

  const onLayoutChange = (widgetCoreModels: WidgetCoreModel[]) => {
    const widgetCoreLayouts: WidgetCoreLayout[] = widgetCoreModels.map(
      (item) => {
        return {
          i: item.i,
          x: item.x,
          y: item.y,
          w: item.w,
          h: item.h,
          name: item.name,
          isFrontVisible: item.isFrontVisible,
          frontComponentType: item.frontComponentType,
          backComponentType: item.backComponentType,
        };
      }
    );

    dispatch(dashboardUpdateLayout(widgetCoreLayouts));
  };

  return (
    <div>
      <ResponsiveGridLayout
        layouts={{ lg: widgetCoreModels }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 6, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={30}
        width={1200}
        className="layout"
        draggableHandle=".widget-header"
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

