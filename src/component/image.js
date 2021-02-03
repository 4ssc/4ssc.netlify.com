import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = (props) => {
  return(
    <div className="image-wrapper">
      <StaticQuery
        query={graphql`
          query {
            images: allFile {
              edges {
                node {
                  relativePath
                  name
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }`
        }
        render={(data) => {
          const image = data.images.edges.find(n => {
            return n.node.relativePath.includes(props.filename);
          });
          if(!image) {return null;};
          return(
            <Img fluid={image.node.childImageSharp.fluid} alt={props.alt}/>
          );
        }}
      />
    </div>
  );
};

export default Image;