import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';



export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
     <Layout
     noFooter={true}
     title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
     <header className={clsx('hero hero--primary', styles.heroBanner)}>
       <div className="container">
       <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
         <Link
           className={clsx(
             'button button--outline button--secondary button--lg',
             styles.getStarted,
           )}
           to={useBaseUrl('docs/intro')}>
           开始
           </Link>
       </div>
     </header>
     <footer className={clsx('hero hero--primary', styles.heroFooter)}>
       <div className="container">
         <p className={styles.customHero__subtitle}>版权所有 © {new Date().getFullYear()} umeimmense， 此网站使用 Docusaurus 构建。</p>
       </div>
     </footer>
   </Layout>
  );
}
