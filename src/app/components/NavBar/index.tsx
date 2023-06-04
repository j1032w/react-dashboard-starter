import { Badge, Typography } from '@mui/material';
import * as React from 'react';
import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { Link } from '../Link';
import { PageWrapper } from '../PageWrapper';
import { Logo } from './Logo';

export function NavBar() {
  return (
    <Wrapper>
      <PageWrapper>
        <Logo />
      </PageWrapper>
      <ToolBar>
        <Badge badgeContent={4}>
          <Typography >🛍</Typography>
        </Badge>
        <Badge badgeContent="❕">
          <Typography >🔔</Typography>
        </Badge>
        <a href="https://github.com/j1032w/react-dashboard-starter">
          <BsGithub></BsGithub>
        </a>
      </ToolBar>
    </Wrapper>
  );
}

const ToolBar = styled.div`
  justify-content: flex-end;
  margin: 1rem;
  font-size: 1.5rem;
`;

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.border};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${p => p.theme.background};
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
