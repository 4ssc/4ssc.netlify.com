import React from 'react';
import Layout from '../component/layout.js';
import Image from '../component/image.js';
import Head from '../component/head.js'

const Success = () => {
  return(
    <Layout>
      <Head title="お問い合わせありがとうございます" canonical="/success"/>
      <div className="image-size-95">
        <Image filename="success_mark.png" alt="success_mark"/>
      </div>
      <p className="mt-4 text-center text-2xl">お問い合わせありがとうございます。2~3日ほどで返信致します。</p>
      <p className="mt-2 text-center text-2xl">返信がこない場合お手数をおかけしますがもう一度お問い合わせください。</p>
      <p className="mt-10 text-center text-2xl">もしよかったらブログも見てください。</p>
      <a className="block mt-2 text-center text-blue-400 text-2xl hover:underline" href="https://asaitem.com" rel="noopener noreferrer" target="_blank">CHECK!</a>
    </Layout>
  );
};

export default Success;