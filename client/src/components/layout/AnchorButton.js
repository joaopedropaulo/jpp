import React from 'react';
import { Button } from '@material-ui/core';

const AnchorButton = (props) => {
  const { offset, ...rest } = props;
  const smoothScroll = (e) => {
    e.preventDefault();
    let offset = 0;
    if (props.offset) {
      offset = props.offset;
    }
    const id = e.currentTarget.getAttribute('href').slice(1);
    const $anchor = document.getElementById(id);
    const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
    window.scroll({
      top: offsetTop - offset,
      behavior: 'smooth',
    });
    if (props.onClick) {
      props.onClick(e);
    }
  };
  return <Button {...rest} onClick={smoothScroll} />;
};

export default AnchorButton;
