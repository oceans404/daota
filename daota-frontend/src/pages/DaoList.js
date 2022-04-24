import { Link } from 'react-router-dom';
import Card from '../components/Card';
import daos from '../ourData/daos';

export default function DaoList(props) {
  return (
    <div className='flex flex-row'>
      {daos
        .filter((d) => (props.max ? d.id <= props.max : true))
        .map((d) => (
          <div className={`${props.max ? 'w-1/2' : 'w-1/4'} m-1`}>
            <Link to={`/daos/${d.id.toString()}`}>
              <Card {...d} />
            </Link>
          </div>
        ))}
    </div>
  );
}
