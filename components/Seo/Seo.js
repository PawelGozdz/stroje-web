import React from 'react';
import Head from 'next/head';

export default function Seo({ title, description }) {

    return (
        <Head>
            <title>{title}</title>
            <meta property='description' content={description} />
        </Head>
    );
}

Seo.defaultProps = {
    title: 'Stroje karnawałowe',
    description: 'Wypożyczalnia strojów karnawałowych dla dzieci i dorosłych. W kolekcji ponad 800 strojów!'
}
