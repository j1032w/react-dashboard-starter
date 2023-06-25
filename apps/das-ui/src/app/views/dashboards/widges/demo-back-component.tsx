
import {FC} from 'react';
import styles from  './demo-component.module.scss'

export const DemoBackComponent: FC<any> = ({name}: { name: string }) => {
  return (
    <div className={styles.widget}>
      back
    </div>
  );
}


