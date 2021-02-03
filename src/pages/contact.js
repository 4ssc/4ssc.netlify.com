import React from 'react';
import Layout from '../component/layout.js';
import Head from '../component/head.js'

const Contact = () => {
  return (
    <Layout>
      <Head title="お問い合わせ" canonical="/contact"/>
      <h2 className="pb-4 border-b text-4xl text-center">お問い合わせ</h2>
      <div className="mt-4 p-4">
        <form name="portfolio-contact" action="/success" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" name="portfolio-contact"/>
          <input type="hidden" name="bot-field"/>
          <div className="grid p-4 grid-cols-2 grid-rows-2 items-center md:grid-rows-3">
            <label for="name" className="font-bold md:col-span-2">名前<span className="ml-1 text-red-500">*</span></label>
            <input type="text" id="name" name="name" className="p-1 border border-gray-400 rounded md:col-span-2" required/>
            <p className="ml-2 text-sm font-bold col-span-2">例）山田 太郎</p>
          </div>
          <div className="grid p-4 bg-gray-200 rounded-lg grid-cols-2 grid-rows-2 items-center md:grid-rows-3">
            <label for="email" className="font-bold md:col-span-2">メールアドレス<span className="ml-1 text-red-500">*</span></label>
            <input type="text" id="email" name="email" className="p-1 border border-gray-400 rounded md:col-span-2" required/>
            <p className="ml-2 text-sm font-bold col-span-2">例）example@example.com</p>
          </div>
          <div className="grid p-4 grid-cols-2 grid-rows-2 items-center md:grid-rows-3">
            <label for="subject" className="font-bold md:col-span-2">件名</label>
            <input type="text" id="subject" name="subject" className="p-1 border border-gray-400 rounded md:col-span-2"/>
            <p className="ml-2 text-sm font-bold col-span-2">例）○○について</p>
          </div>
          <div className="grid p-4 bg-gray-200 rounded-lg grid-cols-2 grid-rows-5 items-center">
            <label for="message" className="font-bold col-span-2">内容<span className="ml-1 text-red-500">*</span></label>
            <textarea id="message" name="message" className="p-1 min-h-9 border border-gray-400 rounded col-span-2 row-span-4" required></textarea>
          </div>
          <div className="p-4 text-right">
            <input type="submit" value="送信" className="p-1 border border-gray-400 rounded"/>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;