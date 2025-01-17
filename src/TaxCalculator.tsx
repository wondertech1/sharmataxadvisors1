//import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function FunctionLabel() {
  return (
    <BarChart
      {...props}
      series={[
        { data: [2400], label: 'Federal Tax' },
        { data: [500], label: 'State Tax'  },
      ]}
    />
  );
}

const props = {
  width: 500,
  height: 500,
  xAxis: [{ data: ['A'], scaleType: 'band' as const }],
};




