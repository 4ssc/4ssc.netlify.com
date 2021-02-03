import React from 'react';
import { Helmet } from 'react-helmet';

const Head = (props) => {
  return(
    <Helmet
      htmlAttributes={{lang:"ja"}}
      title={(props.title) + " - asai's-Portfolio"}
      meta={[
        {
          name: "robots",
          content: "noindex, nofollow",
        },
      ]}
      link={[
        {
          rel: "canonical",
          href: "https://test.com" + (props.canonical),
        },
      ]}
    />
  );
};

export default Head;