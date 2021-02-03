import React from 'react';
import Layout from '../component/layout.js';
import Image from '../component/image.js';
import Head from '../component/head.js'

const Profile = () => {
  return (
    <Layout>
      <Head title="プロフィール" canonical=""/>
      <h2 className="pb-4 border-b text-4xl text-center">プロフィール</h2>
      <div className="mt-4 p-4">
        <div className="rounded-image">
          <Image filename="asai_logo.jpg" alt="asai"/>
        </div>
        <h3 className="mt-4 text-center text-2xl">asai</h3>
        <ul className="flex mt-4 p-2 bg-gray-200 rounded-lg justify-around items-end">
          <li className="mx-2">
            <a className="block p-2 hover:underline" href="https://twitter.com/_iasa" rel="noopener noreferrer" target="_blank">
              <div className="image-size-40-50">
                <Image filename="twitter_logo.png" alt="twitter_logo"/>
              </div>
              <h4 className="text-center text-sm">Twitter</h4>
            </a>
          </li>
          <li className="mx-2">
            <a className="block p-2 hover:underline" href="https://asaitem.com" rel="noopener noreferrer" target="_blank">
              <div className="image-size-40-50">
                <Image filename="blogger_logo.png" alt="blogger_logo"/>
              </div>
              <h4 className="text-center text-sm">Blogger</h4>
            </a>
          </li>
          <li className="mx-2">
            <a className="block p-2 hover:underline" href="https://github.com/4ssc" rel="noopener noreferrer" target="_blank">
              <div className="image-size-40-50">
                <Image filename="github_logo.png" alt="github_logo"/>
              </div>
              <h4 className="text-center text-sm">GitHub</h4>
            </a>
          </li>
          <li className="mx-2">
            <a className="block p-2 hover:underline" href="https://coconala.com/users/1547705" rel="noopener noreferrer" target="_blank">
              <div className="image-size-40-50">
                <Image filename="coconala_logo.png" alt="coconala_logo"/>
              </div>
              <h4 className="text-center text-sm">ココナラ</h4>
            </a>
          </li>
        </ul>
        <p className="mt-4">スマホやイヤホンなどのガジェットを集めるのが趣味。パソコンも自分で組み立てています。</p>
        <p className="mt-4">スマホ関係のライターのしているときにプログラミングと出会い、沼にハマってしまいました。</p>
        <p className="mt-4">マークアップ言語の変更点がすぐに適応される魅力に惹かれ、いろんなコードを書いて遊んでいます。</p>
      </div>
    </Layout>
  );
};

export default Profile;