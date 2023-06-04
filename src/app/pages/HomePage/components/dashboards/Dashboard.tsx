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
      name: 'Widget A',
      isShownFront: true,
      frontComponentName: 'DasDemoWidgetFront',
      backComponentName: 'DasDemoWidgetBack',
    },
    {
      i: '2',
      x: 3, y: 0, w: 4, h: 8,
      name: 'Widget B',
      isShownFront: false,
      frontComponentName: 'DasDemoWidgetFront',
      backComponentName: 'DasDemoWidgetBack',
    },
    {
      i: '3',
      x: 7, y: 0, w: 4, h: 8,
      name: 'Widget C',
      isShownFront: false,
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
  if(!widgetModels){
    return {widgetModels: []};
  }


  widgetModels.forEach((widgetModel) => {
    let FrontComponent;
    let BackComponent;

    switch (widgetModel.frontComponentName) {
      case 'DasDemoWidgetFront':
        FrontComponent = ({name}) => <DasDemoWidgetFront name={name}/>;
        break
    }

    switch (widgetModel.backComponentName) {
      case 'DasDemoWidgetBack':
        BackComponent = ({name}) => <DasDemoWidgetFront name={name}/>;
        break
    }

    widgetsData.push({
      i: widgetModel.i,
      x: widgetModel.x,
      y: widgetModel.y,
      w: widgetModel.w,
      h: widgetModel.h,
      name: widgetModel.name,
      isShownFront: widgetModel.isShownFront,
      FrontComponent,
      BackComponent,
    });
  });
  return {widgetModels: widgetsData};
}


export function Dashboard() {
  const dispatch = useDispatch();
  const dashboardState = useSelector(state=>buildDashboardData(state));


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

  return (
    <FlexColumnWrapper>
      <Toolbar>
        <Fab variant="extended" onClick={reset}>
          <DonutLarge/>
          Reset
        </Fab>
      </Toolbar>

      <FlexColumnWrapper>
        <DashboardCore widgetsData={dashboardState?.widgetModels} onLayoutChange={onLayoutChange}></DashboardCore>
      </FlexColumnWrapper>
    </FlexColumnWrapper>
  );
}
