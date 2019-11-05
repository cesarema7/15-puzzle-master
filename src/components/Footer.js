import React from 'react';
import styled from 'styled-components';
import GitHubIcon from './GitHubIcon';

const FooterContent = styled.div`
  flex:none;
  background-color: rgb(232, 232, 232);
  color: rgb(0, 0, 0);
  padding-top: 10px;
  text-align: center;

  & .footerheart {
    color: #D4726A;
  }

  & .footerlink {
    text-decoration: none;
    color: #226666;
  }
`;

const Footer = () => (
  <FooterContent>
    <a
      href="https://github.com/cesarema7"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon className="menuIcon" />
    </a>
    <p>
      Hecho con{' '}
      <span className="footerheart">♥</span>
      {' '},{' '}
      <a
        className="footerlink"
        href="https://github.com/cesarema7/juego-puzzle"
        rel="noopener noreferrer"
        target="_blank"
      >
        {' '}Juego-Puzzle
      </a>
    </p>
  </FooterContent>
);

export default Footer;
