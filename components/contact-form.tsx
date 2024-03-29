import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center w-[40rem] gap-2'
    >
      <div className='w-full flex justify-between gap-5'>
        <div className='grow'>
          <label
            htmlFor='name'
            className='block mb-2 text-lg font-medium text-palette-color-c'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            className='border text-sm rounded-lg text-palette-color-a bg-palette-color-d border-palette-color-c focus:ring-palette-color-b focus:border-palette-color-b block w-full p-2.5'
            placeholder='name here...'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='grow'>
          <label
            htmlFor='email'
            className='block mb-2 text-lg font-medium text-palette-color-c'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            className='border text-sm rounded-lg text-palette-color-a bg-palette-color-d border-palette-color-c focus:ring-palette-color-b focus:border-palette-color-b block w-full p-2.5'
            placeholder='and your email address here...'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className='w-full'>
        <label
          htmlFor='message'
          className='block mb-2 text-lg font-medium text-palette-color-c'
        >
          Message
        </label>
        <textarea
          id='message'
          rows={4}
          name='message'
          value={message}
          className='block p-2.5 w-full text-sm rounded-lg border text-palette-color-a bg-palette-color-d border-palette-color-c focus:ring-palette-color-b focus:border-palette-color-b h-[120px]'
          placeholder='also write your message here...'
          maxLength={300}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        type='submit'
        className='w-max border border-palette-color-b px-4 py-2 mt-2 rounded hover:bg-palette-color-b/[0.2] transition-[background-color] ease-in-out duration-300'
      >
        Submit
      </button>
    </form>
  );
}
