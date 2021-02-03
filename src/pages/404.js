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
    </Layout>
  );
};

export default Error;