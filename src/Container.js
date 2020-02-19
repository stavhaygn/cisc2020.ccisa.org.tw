import React from 'react';

const BreadCrumb = props => (
  <ol className="breadcrumb">
    <li className="breadcrumb-item">
      <a href="index.html">首頁</a>
    </li>
    {props.path.map((each, key) => (
      <li className="breadcrumb-item active" key={key}>
        {each}
      </li>
    ))}
  </ol>
);
const Container = props => (
  <div className="container">
    <h1 className="mt-4 mb-3">{props.title}</h1>

    <BreadCrumb path={props.path ? props.path : [props.title]} />
    {props.children}
  </div>
);

export default Container;
