import React from 'react';
import Layout from '../component/layout.js';
import Image from '../component/image.js';
import Head from '../component/head.js'

const Skill = () => {
  return (
    <Layout>
      <Head title="スキル" canonical="/skill"/>
      <h2 className="pb-4 border-b text-4xl text-center">スキル</h2>
      <div className="grid mt-4 p-4 grid-cols-3 grid-rows-3 gap-2 items-center sm:block">
        <div className=" row-span-3">
          <div className="image-size-95">
            <Image filename="html5_logo.png" alt="html5_logo"/>
          </div>
        </div>
        <div className="col-span-2 sm:mt-2">
          <h3 className="text-2xl sm:text-center">HTML5</h3>
        </div>
        <div className="col-span-2 row-span-2 sm:mt-2">
          <p>CSS3と合わせてレスポンシブデザインの実装など基本的なコーディングができます。</p>
        </div>
      </div>
      <div className="grid p-4 bg-gray-200 rounded-lg grid-cols-3 grid-rows-3 gap-2 items-center sm:block">
        <div className=" row-span-3">
          <div className="image-size-95">
            <Image filename="css3_logo.png" alt="css3_logo"/>
          </div>
        </div>
        <div className="col-span-2 sm:mt-2">
          <h3 className="text-2xl sm:text-center">CSS3</h3>
        </div>
        <div className="col-span-2 row-span-2 sm:mt-2">
          <p>基本的なコーディングからフレームワークを用いたコーディングができます。このサイトはTailwind CSSというフレームワークを使っています。</p>
        </div>
      </div>
      <div className="grid p-4 grid-cols-3 grid-rows-3 gap-2 items-center sm:block">
        <div className=" row-span-3">
          <div className="image-size-95">
            <Image filename="javascript_logo.png" alt="javascript_logo"/>
          </div>
        </div>
        <div className="col-span-2 sm:mt-2">
          <h3 className="text-2xl sm:text-center">JavaScript</h3>
        </div>
        <div className="col-span-2 row-span-2 sm:mt-2">
          <p>基本的なコーディングはできますが複雑なコードを書くことはできません。</p>
        </div>
      </div>
      <div className="grid p-4 bg-gray-200 rounded-lg grid-cols-3 grid-rows-3 gap-2 items-center sm:block">
        <div className=" row-span-3">
          <div className="image-size-95">
            <Image filename="react_logo.png" alt="react_logo"/>
          </div>
        </div>
        <div className="col-span-2 sm:mt-2">
          <h3 className="text-2xl sm:text-center">React</h3>
        </div>
        <div className="col-span-2 row-span-2 sm:mt-2">
          <p>初歩的なコーディングはできますが複雑なコードを書くことはできません。React Nativeも少しだけコーディングしたことがあります。</p>
        </div>
      </div>
      <div className="grid p-4 grid-cols-3 grid-rows-3 gap-2 items-center sm:block">
        <div className=" row-span-3">
          <div className="image-size-95">
            <Image filename="gatsbyjs_logo.png" alt="gatsbyjs_logo"/>
          </div>
        </div>
        <div className="col-span-2 sm:mt-2">
          <h3 className="text-2xl sm:text-center">GatsbyJS</h3>
        </div>
        <div className="col-span-2 row-span-2 sm:mt-2">
          <p>あまり複雑なコードを書くことはできませんがプラグインの導入や設定はできます。このサイトもGatsbyJSで制作しています。</p>
        </div>
      </div>
    </Layout>
  );
};

export default Skill;