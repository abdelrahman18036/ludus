import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import Territorymap from 'src/data/territory_map.json';

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}) {
  return (
    <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>

    </Stack>
  );
}

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const dateCounts = Territorymap.reduce((acc, device) => {
  const date = formatDate(device.time_last_moved);
  acc[date] = (acc[date] || 0) + 1;
  return acc;
}, {});

const dataset = Object.keys(dateCounts).map(date => ({
  month: date,
  devices: dateCounts[date],
}));

const valueFormatter = (value) => `${value} devices`;

const chartSetting = {
  yAxis: [
    {
      label: 'Number of Devices',
    },
  ],
  series: [{ dataKey: 'devices', color: '#9C27B0', label: 'Device Count', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
      color: '#9C27B0',
    },
    [`& .${axisClasses.directionX} .${axisClasses.label}`]: {
      color: '#7B1FA2',
    },
  },
};

export default function TickPlacementBars() {
  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');

  return (
    <div style={{ width: '100%' }} className='mt-14'>
      <TickParamsSelector

        tickPlacement={tickPlacement}
        tickLabelPlacement={tickLabelPlacement}
        setTickPlacement={setTickPlacement}
        setTickLabelPlacement={setTickLabelPlacement}
      />
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'month', tickPlacement, tickLabelPlacement },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
