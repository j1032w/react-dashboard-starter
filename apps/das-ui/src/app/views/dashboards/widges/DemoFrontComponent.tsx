import React, { FC } from "react";


export const DemoFrontComponent: FC<any> = ({name}: { name: string }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
