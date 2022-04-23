import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
    >
      <div class='mb-4'>
        <label
          class='block text-gray-700 text-sm font-bold mb-2'
          for='username'
        >
          Task
        </label>
        <input
          {...register('taskName', { required: true })}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        {errors.taskName && <p>Task name is required.</p>}
      </div>

      <div class='mb-4'>
        <label
          class='block text-gray-700 text-sm font-bold mb-2'
          for='username'
        >
          Task Description
        </label>
        <input
          {...register('taskDescription', { required: true })}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        {errors.taskDescription && <p>Task description is required.</p>}
      </div>

      <div class='mb-4'>
        <label
          class='block text-gray-700 text-sm font-bold mb-2'
          for='username'
        >
          Bounty amount
        </label>
        <input
          {...register('taskBounty', { pattern: /\d+/, required: true })}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        {errors.taskBounty && <p>Bounty amount is required.</p>}
      </div>
      <input type='submit' />
    </form>
  );
}
