import React from 'react';
import styled from 'styled-components';

const getPageLinks = () => {
  const linksArray = location.pathname.split('/');
  // Takes the url and created an array with all the links with the full path.
  const links = linksArray.reduce((acc, link, i, array) => {
    const linkWithNoPage = ['Products', 'Collections'];
    const dupArray = [...array];
    const pathArray = dupArray.splice(0, i + 1);
    const url = `${pathArray.join('/')}/`;
    const name = link
      .split('-')
      .map((item) => (item ? `${item[0].toUpperCase()}${item.substr(1)}` : ''))
      .join(' ');

    if (!linkWithNoPage.includes(name)) {
      acc.push({
        name: name || 'Home',
        url,
      });
    }

    return acc;
  }, []);

  return links.length < 3 ? links : links.splice(links.length - 3, links.length);
};

const BreadCrumbs = () => {
  const pageLinks = getPageLinks();

  return (
    <BreadCrumbContainer>
      {pageLinks.map((link, i) => (
        <a className="font-serif" key={link.url} href={link.url}>
          {link.name}
          {i !== pageLinks.length - 1 && <span>{'>'}</span>}
        </a>
      ))}
    </BreadCrumbContainer>
  );
};

const BreadCrumbContainer = styled.div.attrs({
  className: 'mt-2 uppercase md:pl-12',
})`
  font-size: 10px;
  line-height: 1.5rem;

  a {
    color: #9c9c9c;
  }

  span {
    margin: 0 5px;
  }
`;

export default BreadCrumbs;
