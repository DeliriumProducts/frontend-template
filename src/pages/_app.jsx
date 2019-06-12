import App, { Container } from 'next/app';
import Router from 'next/router';
import { Global, css } from '@emotion/core';
import Head from 'next/head';
import React from 'react';
import NProgress from 'nprogress';
import '../assets/nprogress.less';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Frontend template!</title>
        </Head>
        <Global
          styles={css`
            * {
              box-sizing: border-box;
              padding: 0;
              margin: 0;
            }

            body {
              min-height: 100%;
              background-color: rgb(245, 245, 245);
            }
          `}
        />
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }
}
