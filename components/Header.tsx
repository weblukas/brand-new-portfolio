import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='border-b border-zinc-200 bg-white dark:bg-[#0f172a] dark:border-zinc-800'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-6 py-4'>
        <div>
          <Link href='/' className='text-2xl font-semibold'>
            Lukasz Szmyd
          </Link>
          <div className='text-sm text-zinc-600 dark:text-zinc-400'>
            React · TypeScript · Next.js
          </div>
        </div>

        <nav className='flex items-center gap-4 text-sm'>
          <Link href='#projects' className='hover:underline dark:text-zinc-200'>
            Projects
          </Link>
          <Link href='#contact' className='hover:underline dark:text-zinc-200'>
            Contact
          </Link>
          <Link
            href='#github'
            target='_blank'
            rel='noreferrer'
            className='text-zinc-300 hover:text-teal-400'
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
}
