import styled from 'styled-components/macro';

const Wrapper = styled.div`
  flex: 1;

`;

export function DasDemoWidgetFront({ name }: { name: string }) {
  return (
    <Wrapper>
      <h1>{name}</h1>
    </Wrapper>
  );
}
