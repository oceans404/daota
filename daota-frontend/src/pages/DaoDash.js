import { useLocation } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Tasklist from '../components/Tasklist';
import daos from '../ourData/daos';
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
            <div className='flex flex-row justify-between'>
              <h2>All Tasks</h2>
              <Link to='/new-task'>
                <button class='bg-black hover:bg-gray text-white font-bold py-2 px-4 rounded'>
                  Add new task
                </button>
              </Link>
            </div>

            <Tasklist dao={daoId === '1' ? 'Blu3 DAO' : 'FWB'} isVerbose />
          </div>
        </div>
      </Container>
    </div>
  );
}
