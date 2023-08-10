import React from 'react';
import parse, { domToReact } from 'html-react-parser';

import Link from 'next/link';

import './Content.css'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

var colors = ["blue", "green", "brown", "yellow"];

const Content = ({currentURL, data }) => {
  if (!data) {
    data = "<h1>Not found</h1>";
  }
  
  const replaceTable = (node) => {
    if (node.name === 'table') {
      const tableHeader = node.children[0].children[0].children.map(
        (th) => th.children[0].data
      );
      const tableBody = node.children[1].children.map((tr) =>
        tr.children.map((td) => td.children[0].data)
      );

      return (
        <Table className="imported-table">
          <TableHeader>
            <TableRow>
              {tableHeader.map((item, index) => (
                <TableHead key={index}>{item}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableBody.map((row, index) => (
              <TableRow key={index}>
                {row.map((item, index) => (
                  <TableCell key={index}>{item}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }
  };

  const finalElements = parse(data, { replace: replaceTable });

  return <div className="app__content">{finalElements}</div>;
};

export default Content;
