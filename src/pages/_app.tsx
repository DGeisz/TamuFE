import * as React from 'react';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
    return <Component {...pageProps}/>;
};

export default MyApp;