import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div className="flex p-4 bg-white border-b-2 justify-around items-end sticky top-0 md:block">
      <header>
        <Link to="/">
          <h1 className="text-5xl md:text-center">asai's-Portfolio</h1>
        </Link>
      </header>
      <nav className="ml-4 md:ml-0 md:mt-4">
        <ul className="flex divide-x justify-center">
          <li className="px-2">
            <Link to="/" className="hover:underline">プロフィール</Link>
          </li>
          <li className="px-2">
            <Link to="../skill" className="hover:underline">スキル</Link>
          </li>
          <li className="px-2">
            <Link to="../work" className="hover:underline">制作実績</Link>
          </li>
          <li className="px-2">
            <Link to="../contact" className="hover:underline">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;