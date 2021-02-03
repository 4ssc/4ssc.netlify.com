import React from 'react';
import { Link } from 'gatsby';
import Layout from '../component/layout.js';
import Image from '../component/image.js';
import Head from '../component/head.js'

const Work = () => {
  return (
    <Layout>
      <Head title="制作実績" canonical="/work"/>
      <h2 className="pb-4 border-b text-4xl text-center">制作実績</h2>
      <div className="grid mt-4 p-4 grid-cols-3 grid-rows-4 gap-2 items-center sm:block">
        <div className=" row-span-4">
          <div className="image-size-170">
            <Image filename="portfolio_site.png" alt="portfolio_site"/>
          </div>
        </div>
        <div className="col-span-2 sm:mt-2">
          <h3 className="text-2xl sm:text-center">asai's-Portfolio</h3>
        </div>
        <div className="col-span-2 sm:mt-2 sm:text-center">
          <Link to="/" className="hover:underline">https://4ssc.netlify.app</Link>
        </div>
        <div className="col-span-2 row-span-2 sm:mt-2">
          <p>JavaScriptのライブラリであるReactがベースとなっている、GatsbyJSというフレームワークを利用して、ほぼ無編集のスターターを使用しサイトを制作しました。</p>
        </div>
      </div>
      <div className="grid p-4 bg-gray-200 rounded-lg grid-cols-3 grid-rows-3 gap-2 items-center sm:block">
        <div className=" row-span-4">
          <div className="image-size-170">
            <Image filename="asaitem_site.png" alt="asaitem_site"/>
          </div>
        </div>
        <div className="col-span-2 sm:mt-2">
          <h3 className="text-2xl sm:text-center">あさいてむ</h3>
        </div>
        <div className="col-span-2 sm:mt-2 sm:text-center">
          <a className="hover:underline" href="https://asaitem.com" rel="noopener noreferrer" target="_blank">https://asaitem.com</a>
        </div>
        <div className="col-span-2 row-span-2 sm:mt-2">
          <p>GoogleのブログサービスであるBloggerでブログを運営するにあたってテンプレートを制作しました。</p>
        </div>
      </div>
      <div className="grid mt-4 p-4 grid-cols-3 grid-rows-4 gap-2 items-center sm:block">
        <div className=" row-span-4">
          <div className="image-size-170">
            <Image filename="bios_site.png" alt="bios_site"/>
          </div>
        </div>
        <div className="col-span-2 sm:mt-2">
          <h3 className="text-2xl sm:text-center">一級建築士事務所 ビオス</h3>
        </div>
        <div className="col-span-2 sm:mt-2 sm:text-center">
          <a className="hover:underline" href="https://bios-a.com/" rel="noopener noreferrer" target="_blank">https://bios-a.com</a>
        </div>
        <div className="col-span-2 row-span-2 sm:mt-2">
          <p>WordPressというCMSでLightningというテンプレートを利用してサイトを制作しました。</p>
        </div>
      </div>
    </Layout>
  );
};

export default Work;