import React from 'react';
import { Helmet } from 'react-helmet';

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
    <Helmet>
      <title>第三十屆全國資訊安全會議-{props.title}</title>
    </Helmet>
    <h1 className="mt-4 mb-3">{props.title}</h1>
    <BreadCrumb path={props.path ? props.path : [props.title]} />
    {props.children}
  </div>
);

const Row = props => <div className="row">{props.children}</div>;

const BlankA = props => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

export { Container, Row, BlankA };
