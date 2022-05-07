import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '自我介绍',
    description: (
      <>
       我是一洋, 毕业于重庆邮电大学，一名工作两年的前端工程师，目前工作于一家全球领先的实时互动API平台专业服务商，从事全栈工程师的工作。
      </>
    ),
  },
  {
    title: '专业技能',
    description: (
      <>
        <div>追求代码高质量、可维护性</div>
        <div>熟练使用ES6+语法编程,以<code>React</code>、<code>Less</code>、<code>Vite/Webpack</code>、<code>Node.js</code>等为常用技术栈，同时也了解主流的<code>Vue</code>、<code>Sass</code>、<code>Stylus</code>等技术。</div>
        <div>熟练使用GoLang以<code>Gin</code>结合<code>Mysql</code>作为开发工具。</div>
      </>
    ),
  },
  {
    title: '爱好及个人评价',
    description: (
      <>
        <div>爱好旅游（每年固定一次独立旅行），坚持每周至少四天运动，阅读经济学及个人成长类的书籍。</div>
        <div>时刻保持好奇心，具有一定的创新创造精神，持续关注业内前沿技术。</div>
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
