import { useLocation } from 'react-router-dom';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Container from '../components/Container';
import daos from '../mockData/daos';

const data = [
  {
    name: 'Jan 22',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb 22',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar 22',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr 22',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

export default function DaoDash(props) {
  const { pathname } = useLocation();

  const daoId = pathname.split('/').pop();

  const currentDao = daos.find((d) => d.id === daoId);

  return (
    <div>
      <Container>
        <h1>{currentDao.title}</h1>

        <h2>Open Tasks</h2>
      </Container>
    </div>
  );
}
