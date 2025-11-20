import React from 'react';
import Image from 'next/image';
import imperator from '@/public/imperator.jpg';

type Project = {
  title: string;
  desc: string;
  tech: string[];
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className='relative overflow-hidden rounded-2xl border border-zinc-200 bg-[#ecfeff] p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg  dark:bg-white/6 dark:backdrop-blur-sm dark:border-white/6'>
      <div
        style={{
          background:
            'linear-gradient(90deg, var(--accent-1), var(--accent-2))',
        }}
        className='absolute left-0 top-0 h-1 w-full'
      />

      <h3 className='mb-2 text-lg font-semibold'>{project.title}</h3>
      <p className='mb-4 text-sm text-zinc-700 dark:text-zinc-300'>
        {project.desc}
      </p>
      <div className='mb-4 flex flex-wrap gap-2'>
        {project.tech.map((t) => (
          <span
            key={t}
            className='rounded-md bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200'
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={project.link || '#'}
        className='inline-flex items-center gap-2 text-sm font-semibold text-(--accent-3) hover:underline'
      >
        View project
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          className='h-4 w-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M5 12h14M12 5l7 7-7 7'
          />
        </svg>
      </a>
      <Image
        src={imperator}
        alt='imperator drązka'
        placeholder='blur'
        className='w-full mb-5 relative z-10'
      />
    </article>
  );
}
