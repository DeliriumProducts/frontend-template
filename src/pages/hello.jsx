import React from 'react';
import Button from '../components/Button';

import { withRouter } from 'next/router';

function Hello({ router }) {
  return (
    <>
      <Button> Hello {router.query.message} </Button>
    </>
  );
}

export default withRouter(Hello);
