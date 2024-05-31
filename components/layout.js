import React from "react";
import Header from './header';
import Head from 'next/head';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';

export default props => {
    return (
        <Container>
            <Head>
                <link rel='icon' href="/favicon.ico" />
            </Head>
            <Header />
            {props.children}
        </Container>
    )
}