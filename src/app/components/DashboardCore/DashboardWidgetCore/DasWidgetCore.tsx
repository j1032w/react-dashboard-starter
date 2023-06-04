import {FlexColumnWrapper} from '../../../pages/HomePage/components/styled/FlexColumnWrapper';
import {WidgetCoreModel} from '../stores/widgetCoreModel';
import {DasWidgetCoreToolbar} from './DasWidgetCoreToolbar';




export const DasWidgetCore = ({widgetData}) => {
  const {FrontComponent, BackComponent} = widgetData;

  const close = (widgetData:WidgetCoreModel) => {
    console.log('close');
  }

  return (
    <>
      <DasWidgetCoreToolbar close={()=>close(widgetData)} name={widgetData.name}></DasWidgetCoreToolbar>
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
