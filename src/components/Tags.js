import React from 'react';
import Link from 'gatsby-link';
import TagIcon from 'react-icons/lib/fa/tag';

import '../css/tags.css';

export default function Tags({ list = [] }) {
  return (
    <div className="tag-list">
      {list.map(tag =>
        <Link to={`/tags/${tag}`}>
          <TagIcon/>{tag}
        </Link>
      )}
    </div>
  );
}
