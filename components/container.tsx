import React from 'react';

export default function Container({ children }: React.PropsWithChildren) {
  return <div className='h-screen'>{children}</div>;
}
