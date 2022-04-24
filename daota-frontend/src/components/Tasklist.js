import tasks from '../ourData/tasks';

function Tasklist(props) {
  const { dao, isVerbose } = props;
  return (
    <div className='w-full pr-3 py-4'>
      <ul class='w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
        {tasks
          .filter((t) => {
            if (dao) {
              return t.dao === dao;
            }
            return true;
          })
          .map((t, i) => (
            <div>
              <li class=' w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600'>
                <div className='flex flex-row justify-between'>
                  <div>
                    {t.complete && '✅ '}
                    <strong>{t.task}</strong>
                  </div>
                  <div>{t.dao}</div>
                </div>
                {isVerbose && (
                  <ul>
                    <li> - Description: {t.description}</li>
                    <li> - Bounty: {t.bounty} $ONE</li>
                  </ul>
                )}
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default Tasklist;
