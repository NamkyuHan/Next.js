import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

const example = '샘플 블로그 만들기';
const url = '이곳을 보면 참조 가능';
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          [나는 지금 Next.js를 배우고 있다. 튜토리얼로 블로그를 만들고 있는데
          재미있다. 올해에는 더 강인한 개발자가 되는게 목표이다. 삼위일체를 고루
          갖춘 개발자로 성장할테다!]
        </p>
        <p>
          ({example} - <a href="https://nextjs.org/learn">{url}</a>
          .)
        </p>
        <p>
          (내가 만든 일정관리 TodoList -{' '}
          <a href="http://nkdevworld.com">TodoList</a>)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>나의 블로그 게시물</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
