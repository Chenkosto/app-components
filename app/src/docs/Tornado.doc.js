import React from 'react';

// components
import Base from './Base';
import { Row, Col } from '../components/index';
import Snippet from './Snippet';

const snippet = `
() => {
  
  const data = {
  labels: [
    "Paid Advertising",
    "BDR Prospecting",
    "Event",
    "Account Growth",
    "Sales Prospecting"
  ],
  stats: [
    {
      id: 0,
      qualified: "Qualified Rate",
      conversion: "Conversion Rate",
      close: "Close Rate",
      qualifiedValue: "33.7",
      conversionValue: "16.9",
      closeValue: "1.4"
    },
    {
      id: 1,
      qualified: "Qualified Rate",
      conversion: "Conversion Rate",
      close: "Close Rate",
      qualifiedValue: "48.4",
      conversionValue: "12.9",
      closeValue: "1.9"
    },
    {
      id: 2,
      qualified: "Qualified Rate",
      conversion: "Conversion Rate",
      close: "Close Rate",
      qualifiedValue: "34.1",
      conversionValue: "5.9",
      closeValue: "1.3"
    },
    {
      id: 3,
      qualified: "Qualified Rate",
      conversion: "Conversion Rate",
      close: "Close Rate",
      qualifiedValue: "29.1",
      conversionValue: "9.7",
      closeValue: "1.2"
    },
    {
      id: 4,
      qualified: "Qualified Rate",
      conversion: "Conversion Rate",
      close: "Close Rate",
      qualifiedValue: "41.5",
      conversionValue: "15.2",
      closeValue: "2.8"
    }
  ],
  rows: [
    {
      id: "row-0",
      data: [356, 620, 675, 412, 1447],
      label: "leads created",
      totalValue: 3620,
      totalPercentage: "100"
    },
    {
      id: "row-1",
      data: [120, 300, 230, 120, 600],
      label: "qualified leads",
      totalValue: 1410,
      totalPercentage: "39"
    },
    {
      id: "row-2",
      data: [60, 80, 40, 40, 220],
      label: "leads converted",
      totalValue: 450,
      totalPercentage: "12"
    },
    {
      id: "row-3",
      data: [5, 12, 9, 5, 40],
      label: "closed won",
      totalValue: 73,
      totalPercentage: "2"
    }
  ]
}

  return (
   <Tornado data={data}/>
  );
}
`;

const SpinnerDoc = () => {
  const title = 'tornado';
  const description = '';

  return (
    <Base title={title} description={description} name="Tornado">
      <Row align="stretch">
        <Col>
          <Snippet snippet={snippet} />
        </Col>
      </Row>
    </Base>
  );
};

export default SpinnerDoc;
