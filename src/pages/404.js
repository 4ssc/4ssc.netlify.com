import React from 'react';
import { Link } from 'gatsby';
import Layout from '../component/layout.js';
import Image from '../component/image.js';
import Head from '../component/head.js'

const Error = () => {
  return(
    <Layout>
      <Head title="404 Not Found" canonical="/404"/>
      <div className="image-size-95">
        <Image filename="error_mark.png" alt="error_mark"/>
      </div>
      <p className="mt-4 text-center text-2xl">404 Not Found</p>
      <p className="mt-2 text-center text-2xl">お探しのページは見つかりませんでした</p>
      <ul className="flex mt-4 divide-x justify-center">
        <li className="px-2">
          <Link to="/" className="text-blue-400 hover:underline">プロフィール</Link>
        </li>
        <li className="px-2">
          <Link to="../skill" className="text-blue-400 hover:underline">スキル</Link>
        </li>
        <li className="px-2">
          <Link to="../work" className="text-blue-400 hover:underline">制作実績</Link>
        </li>
        <li className="px-2">
          <Link to="../contact" className="text-blue-400 hover:underline">お問い合わせ</Link>
        </li>
        <li className="px-2">
          <a className="text-blue-400 hover:underline" href="https://asaitem.com" rel="noopener noreferrer" target="_blank">ブログ</a>
        </li>
      </ul>
    </Layout>
  );
};

export default Error;