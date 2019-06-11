import React from 'react';

import { withRouter } from 'next/router';

function Hello({ router }) {
  return <>Hello {router.query.message}</>;
}

export default withRouter(Hello);
