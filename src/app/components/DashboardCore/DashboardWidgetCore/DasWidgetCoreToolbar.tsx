import {GrFormClose} from 'react-icons/gr';
import styled from 'styled-components/macro';
import {ToolbarButton, ToolbarRight} from '../../../pages/HomePage/components/styled/ToolbarRight';

const Wrapper = styled.div`
  height: 2rem;
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  display: flex;
  flex-direction: row;
  background-color: #eee;  
  
  .widget-header {
    flex:1;
    cursor: move; 
  }
`;

export const DasWidgetCoreToolbar = ({close, name}) => {


  return (
    <Wrapper>
      <div className='widget-header'> {name}</div>
      <ToolbarRight>
        <ToolbarButton>
          <GrFormClose onClick={close}></GrFormClose>
        </ToolbarButton>
      </ToolbarRight>
    </Wrapper>
  )
}
