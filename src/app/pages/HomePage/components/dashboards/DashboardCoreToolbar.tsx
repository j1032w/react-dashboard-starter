import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .toolbar {
    display: flex;
    flex: 1;
  }
`;


export const DashboardCoreToolbar = () => {
  return (
    <Wrapper>
      <div className="toolbar">

      </div>
    </Wrapper>
  );
};
