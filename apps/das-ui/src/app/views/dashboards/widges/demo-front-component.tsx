import React, { FC } from "react";

import styles from  './demo-component.module.scss'

export const DemoFrontComponent: FC<any> = ({name}: { name: string }) => {
  return (
    <div className={styles.widget}>
      Front
    </div>
  );
}
