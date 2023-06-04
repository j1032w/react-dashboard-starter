import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Dashboard } from './components/dashboards/Dashboard';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="React Dashboard Starter homepage" />
      </Helmet>

      <NavBar />

      <PageWrapper>
        <Dashboard />
      </PageWrapper>
    </>
  );
}
