import React from 'react';
import landingStyles from '../components/landingStyles.jsx';

function PageWrapper({ children }) {
  return (
    <div style={landingStyles.pageWrapper}>
      {children}
    </div>
  );
}

export default PageWrapper;
