import React from 'react';
import { useState } from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";
import TableData from "../../components/TableData";

export default function VxTelCalculateCall() {
  const [data, setData] = useState(false);

  return (
    <>
      <Header />
      <Form setData={setData} />
      <TableData data={data} />
    </>
  );
}
