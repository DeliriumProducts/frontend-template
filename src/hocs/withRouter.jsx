import { Component } from 'react';

/**
 * Alternative to the withRouter from next/router, until it gets migrated to the new context API.
 */
export const withRouter = C =>
  class extends Component {
    static async getInitialProps(ctx) {
      const { query } = ctx;

      /**
       * Call the getInitalProps of the wrapped component
       */
      const composedInitialProps = C.getInitialProps
        ? await C.getInitialProps(ctx)
        : {};

      return {
        ...composedInitialProps,
        query
      };
    }

    render() {
      return <C {...this.props} />;
    }
  };
