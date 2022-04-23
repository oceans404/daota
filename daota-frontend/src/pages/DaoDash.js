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
import Card from '../components/Card';

export default function DaoDash(props) {
  const { pathname } = useLocation();

  const daoId = pathname.split('/').pop();

  const currentDao = daos.find((d) => d.id === daoId);

  return (
    <div>
      <Container>
        <div className='flex flex-row flex-between'>
          <div className='w-1/3'>
            <Card {...currentDao} tags={null} />
          </div>
          <div className='w-2/3 ml-3'>
            <h2>All Tasks</h2>
          </div>
        </div>
      </Container>
    </div>
  );
}
