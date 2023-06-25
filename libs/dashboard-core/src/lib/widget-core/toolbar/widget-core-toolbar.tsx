import  { FC, useContext } from "react";
import { CgEditFlipH } from 'react-icons/cg';
import { GrFormClose } from 'react-icons/gr';
import {WidgetCoreContext} from '../widget-core-context';

import './widget-core-toolbar.scss';

export const WidgetCoreToolbar: FC = () => {
  const widgetCoreModel = useContext(WidgetCoreContext);


  return (
    <div className="toolbar">
      <div className="toolbar__title"> {widgetCoreModel.name}</div>
      <div className='toolbar__buttons'>
        <span onClick={widgetCoreModel.flip} id="flipBtn">
          <CgEditFlipH></CgEditFlipH>
        </span>

        <span onClick={widgetCoreModel.remove} id="closeBtn">
          <GrFormClose></GrFormClose>
        </span>
      </div>
    </div>
  );
};
