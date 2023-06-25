import React from 'react';



export const DemoBackComponent: React.FunctionComponent<any> = ({name}: { name: string }) => {
  return (
    <div>
      <h1>{name} back</h1>
    </div>
  );
}


