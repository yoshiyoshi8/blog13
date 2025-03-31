import React from 'react';

const PostBukken = (bukken) => {
  return (
    <div>
      {bukken.bukken.tel && <p>価格 {bukken.bukken.tel}</p>}
      {bukken.bukken.price && <p>価格 {bukken.bukken.price}</p>}
    </div>
  );
};

export default PostBukken;
