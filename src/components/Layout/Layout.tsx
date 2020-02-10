import React from "react";

import styles from './Layout.module.css';

const Layout: React.FC = ({children}) => {
    return (
        <div className={styles.page}>
            <header className={styles.header}></header>
            <section className={styles.body}>
                <aside className={styles.menu}></aside>
                <div className={styles.content}>{children}</div>
            </section>
            <footer className={styles.footer}></footer>
        </div>
    );
}

export default Layout;
