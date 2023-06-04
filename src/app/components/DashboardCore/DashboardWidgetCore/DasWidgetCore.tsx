import {FlexColumnWrapper} from '../../../pages/HomePage/components/styled/FlexColumnWrapper';
import {DasWidgetCoreToolbar} from './DasWidgetCoreToolbar';




export const DasWidgetCore = ({widgetData}) => {
  const {FrontComponent, BackComponent} = widgetData;

  const close = () => {
    console.log('close');
  }

  return (
    <>
      <DasWidgetCoreToolbar close={close} name={widgetData.name}></DasWidgetCoreToolbar>
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
