import {useDispatch} from 'react-redux';
import {FlexColumnWrapper} from '../../../pages/HomePage/components/styled/FlexColumnWrapper';
import {removeWidget, updateWidget} from '../stores/dashboardSlice';
import {WidgetCoreModel} from '../stores/widgetCoreModel';
import {DasWidgetCoreToolbar} from './DasWidgetCoreToolbar';



const buildWidgetModel=(widgetData)=>{
  return{
    i: widgetData.i,
    x: widgetData.x,
    y: widgetData.y,
    w: widgetData.w,
    h: widgetData.h,
    name: widgetData.name,
    isShownFront: widgetData.isShownFront,
    frontComponentName: widgetData.frontComponentName,
    backComponentName: widgetData.backComponentName,
  }
}

export const DasWidgetCore = ({widgetData}) => {
  const {FrontComponent, BackComponent} = widgetData;
  const dispatch = useDispatch();

  const close = (widgetData: WidgetCoreModel) => {
    dispatch(removeWidget(buildWidgetModel(widgetData)));
  }

  const flip = (widgetData: WidgetCoreModel) => {
    widgetData.isShownFront = !widgetData.isShownFront;
    dispatch(updateWidget(buildWidgetModel(widgetData)));
  }

  return (
    <>
      <DasWidgetCoreToolbar
        close={() => close(widgetData)}
        flip={() => flip(widgetData)}
        name={widgetData.name}></DasWidgetCoreToolbar>
      <FlexColumnWrapper>
        {widgetData.isShownFront && (
          <FrontComponent name={widgetData.name}></FrontComponent>
        )}

        {!widgetData.isShownFront && (
          <BackComponent name={widgetData.name}></BackComponent>
        )}
      </FlexColumnWrapper>
    </>
  );
};
