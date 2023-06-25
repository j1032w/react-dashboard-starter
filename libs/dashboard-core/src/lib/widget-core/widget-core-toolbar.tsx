import  { FC, useContext } from "react";
import { CgEditFlipH } from 'react-icons/cg';
import { GrFormClose } from 'react-icons/gr';
import { WidgetCoreContext } from './widget-core-context';

export const WidgetCoreToolbar: FC = () => {
  const { name, flip, remove } = useContext(WidgetCoreContext);

  return (
    <div>
      <div className="widget-header"> {name}</div>
      <div>
        <div onClick={flip} id="flipBtn">
          <CgEditFlipH></CgEditFlipH>
        </div>

        <div onClick={remove} id="closeBtn">
          <GrFormClose></GrFormClose>
        </div>
      </div>
    </div>
  );
};
