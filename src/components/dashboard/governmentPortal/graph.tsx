'use client';

import { LineChart, Card, Divider } from '@tremor/react';
import { useState } from 'react';

// Initial Data for Yearly Data
const initialData = [
  { date: '2020', 'This Year': 45000 },
  { date: '2021', 'This Year': 56000 },
  { date: '2022', 'This Year': 67000 },
  { date: '2023', 'This Year': 78000 },
  { date: '2024', 'This Year': 89000 },
  { date: '2025', 'This Year': 100000 },
];

// Format currency values
function valueFormatter(number: number) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short',
    style: 'currency',
    currency: 'USD',
  }).format(number);
}

export default function StaticLineChart() {
  const [chartData] = useState(initialData);

  return (
    <Card className="sm:mx-auto w-full p-6">
      <h3 className="ml-1 mr-1 font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Travel Booking Trends (Yearly)
      </h3>

      <LineChart
        data={chartData}
        index="date"
        categories={['This Year']}
        colors={['blue']}
        yAxisWidth={45}
        valueFormatter={valueFormatter}
        className="mt-6 h-80 sm:block"
      />

      <Divider />
    </Card>
  );
}
