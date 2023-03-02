import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Common/Common.css'

const DomLink = () => {
  return (
    <li><Link className='font-semibold link-6' to="/blog">Blog</Link></li>
  );
};

export default DomLink;