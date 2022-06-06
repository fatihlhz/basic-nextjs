import { ReactNode } from 'react'
import Footer from '../footer'
import { Header } from '../header'
import styles from "./Layout.module.css"
import Head from "next/head"

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

function Layout(props: LayoutProps) {
    const { children, pageTitle } = props;
    return (
        <>
        <Head>
            <title>
                NextJs Basic |
                {' '}
                {pageTitle}
            </title>
        </Head>
        <div className={styles.container}>
            <Header />
            <div className={styles.cotent}>{children}</div>
            <Footer />
        </div>
        </>
    )
}

export default Layout