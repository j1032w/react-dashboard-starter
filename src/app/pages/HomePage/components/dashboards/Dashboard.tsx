import {DonutLarge} from '@mui/icons-material';
import {Fab} from '@mui/material';
import {DashboardCore} from 'app/components/DashboardCore/DashboardCore';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/macro';
import {restoreAllWidgets} from '../../../../components/DashboardCore/stores/dashboardSlice';


import {FlexColumnWrapper} from '../styled/FlexColumnWrapper';
import {ToolbarRight} from '../styled/ToolbarRight';
import {DasDemoWidgetBack} from './DasDemoWidgetBack';
import {DasDemoWidgetFront} from './DasDemoWidgetFront';
import {DasHousingWidgetPie} from './houseMarketings/DasHousingWidgetPie';


const Toolbar = styled(ToolbarRight)`
  height: 2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
`;

const initialState = {
  widgetModels: [
    {
      i: '1',
      x: 0, y: 0, w: 3, h: 10,
      name: 'Housing Market',
      isShownFront: true,
      frontComponentName: 'DasHousingWidgetPie',
      backComponentName: 'DasDemoWidgetBack',
    },
    {
      i: '2',
      x: 3, y: 0, w: 4, h: 8,
      name: 'Widget B',
      isShownFront: true,
      frontComponentName: 'DasDemoWidgetFront',
      backComponentName: 'DasDemoWidgetBack',
    },
    {
      i: '3',
      x: 7, y: 0, w: 4, h: 8,
      name: 'Widget C',
      isShownFront: true,
      frontComponentName: 'DasDemoWidgetFront',
      backComponentName: 'DasDemoWidgetBack',
    },
    {
      i: '4',
      x: 0, y: 10, w: 4, h: 8,
      name: 'Widget D',
      isShownFront: false,
      frontComponentName: 'DasDemoWidgetFront',
      backComponentName: 'DasDemoWidgetBack',
    },
  ],
};


const buildDashboardData = (dashboardState) => {
  const widgetsData: any[] = [];
  const widgetModels = dashboardState?.dashboard?.widgetModels;
  if (!widgetModels) {
    return {widgetModels: []};
  }


  widgetModels.forEach((widgetModel) => {
    let FrontComponent;
    let BackComponent;

    switch (widgetModel.frontComponentName) {
      case 'DasHousingWidgetPie':
        FrontComponent = () => <DasHousingWidgetPie />;
        break;

      default:
        FrontComponent = ({name}) => <DasDemoWidgetFront name={name}/>;
    }

    switch (widgetModel.backComponentName) {
      case 'DasDemoWidgetBack':
        BackComponent = ({name}) => <DasDemoWidgetBack name={name}/>;
        break;
    }

    widgetsData.push({
      ...widgetModel,
      FrontComponent,
      BackComponent,
    });
  });
  return {widgetModels: widgetsData};
}


export function Dashboard() {
  const dispatch = useDispatch();
  const dashboardState = useSelector(state => buildDashboardData(state));


  const reset = () => {
    dispatch(restoreAllWidgets(initialState));
  }


  // initialize the layout
  useEffect(() => {
    reset();
  }, [dispatch]);


  let layouts = [];

  const onLayoutChange = (newLayouts) => {
    layouts = newLayouts;
  };

  const removeAll = () => {
    console.log(dashboardState);
  }

  return (
    <FlexColumnWrapper>
      <Toolbar id="dashboardToolbar">
        <Fab variant="extended" onClick={reset} id="resetBtn">
          <DonutLarge/>
          Reset
        </Fab>

        <Fab variant="extended" onClick={removeAll} id="removeAllBtn">
          <DonutLarge/>
          Remove All
        </Fab>
      </Toolbar>

      <FlexColumnWrapper>
        <DashboardCore widgetsData={dashboardState?.widgetModels} onLayoutChange={onLayoutChange}></DashboardCore>
      </FlexColumnWrapper>
    </FlexColumnWrapper>
  );
}
