import React from 'react';

// components
import Base from './Base';
import { Row, Col } from '../components/index';
import Snippet from './Snippet';
import styled from 'styled-components';

const standard = `
() => {
  
  const data = {
  labels: [
    "Social",
    "Display",
    "Search",
    "Email",
    "Other",
  ],
  stats: [
    {
      id: 0,
      revenue: '$0',
      orders: 173,
      roas: 0,
    },
    {
      id: 1,
      revenue: '$0',
      orders: 173,
      roas: 0,

    },
    {
      id: 2,
      revenue: '$50K',
      orders: 173,
      roas: 29,
    },
    {
      id: 3,
      revenue: '$50K',
      orders: 173,
      roas: 36,

    },
    {
      id: 4,
      revenue: '$100K',
      orders: 173,
      roas: 95,
    },
  ],
  rows: [
    {
      id: "row-0",
      data: [33, 152, 200, 254, 60],
      label: "Website visits",
      totalValue: 687,
      totalPercentage: "100"
    },
    {
      id: "row-1",
      data: [120, 300, 150, 120, 600],
      label: "Page visits",
      totalValue: 1410,
      totalPercentage: "39"
    },
    {
      id: "row-2",
      data: [60, 80, 100, 40, 220],
      label: "Carts created",
      totalValue: 450,
      totalPercentage: "12"
    },
    {
      id: "row-3",
      data: [5, 12, 14, 5, 40],
      label: "Orders placed",
      totalValue: 73,
      totalPercentage: "2"
    }
  ]
}


  return (
     <Tornado
        data={data}
         topLabelRenderer={({ text, pathColor, isSelected }) => (
          <TopTornadoLabel color={pathColor} isSelected={isSelected}>
            {text}
          </TopTornadoLabel>
        )}
        bottomStatsRenderer={({ stats, pathColor, isSelected }) => (
          <BottomTornadoStatsLabel
            stats={stats}
            pathColor={pathColor}
            isSelected={isSelected}
          />)}
       />)
       }
       
`;

const customized = `
()=>{
const customizedData = {
  labels: [
    "Social",
    "Display",
    "Search",
    "Email"
  ],
  stats: [
    {
      id: 0,
      revenue: '$0',
      orders: 173,
      roas: 0,
    },
    {
      id: 1,
      revenue: '$0',
      orders: 173,
      roas: 0,

    },
    {
      id: 2,
      revenue: '$50K',
      orders: 173,
      roas: 29,
    },
    {
      id: 3,
      revenue: '$50K',
      orders: 173,
      roas: 36,

    }
  ],
  rows: [
    {
      id: "row-0",
      data: [33, 152, 200, 254],
      label: "Website visits",
      totalValue: 687,
      totalPercentage: "100"
    },
    {
      id: "row-2",
      label: "Carts created",
      placeholderMessage: "Connect ‘View Cart’ to Discover this Step",
      onPlaceholderClick: ()=> alert("🌪️🌪️🌪️"),  
    },
    {
      id: "row-3",
      data: [5, 12, 14, 5],
      label: "Orders placed",
      totalValue: 73,
      totalPercentage: "2"
    }
  ]
}

return (
<Tornado
        data={customizedData}
        initialIndex={0}
        topLabelRenderer={({ text, pathColor, isSelected }) => (
          <TopTornadoLabel color={pathColor} isSelected={isSelected}>
            {text}
          </TopTornadoLabel>
        )}
        bottomStatsRenderer={({ stats, pathColor, isSelected }) => (
          <BottomTornadoStatsLabel
            stats={stats}
            pathColor={pathColor}
            isSelected={isSelected}
          />
        )}
      />)

}
`;

const TornadoDoc = () => {
  const title = 'tornado';
  const description = '';

  return (
    <Base title={title} description={description} name="Tornado">
      <Row>
        <Col>
          <SectionTitle>Standard Tornado Chart</SectionTitle>
        </Col>
      </Row>
      <Row align="stretch">
        <Col>
          <Snippet snippet={standard} direction="column" />
        </Col>
      </Row>
      <Row>
        <Col>
          <SectionTitle>
            3 rows 4 funnels Tornado with placeholder and initial index
          </SectionTitle>
        </Col>
      </Row>
      <Row align="stretch">
        <Col>
          <Snippet snippet={customized} direction="column" />
        </Col>
      </Row>
    </Base>
  );
};

export default TornadoDoc;

const SectionTitle = styled.div`
  ${({ theme }) => theme.text.subHeadline};
`;
