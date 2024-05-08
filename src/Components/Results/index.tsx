import React from 'react';
import { prettyPrintJson } from 'pretty-print-json'
import './Results.scss';

export type Result = {
  name: string;
  url: string;
};

export type Data = {
  count: number;
  results: Array<Result>;
};

interface ResultsProps {
  data: Data;
}

function Results(props: ResultsProps): React.ReactElement {
  const html = prettyPrintJson.toHtml(props.data);
  return (
    <section>
      <pre dangerouslySetInnerHTML={{ __html: html }}/>
    </section>
  );
}

export default Results;
