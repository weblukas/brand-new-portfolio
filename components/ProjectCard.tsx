import React from 'react';
import Image from 'next/image';

interface CardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  url?: string;
  github?: string;
}

const ProjectCard = ({
  id,
  name,
  image,
  description,
  url,
  github,
}: CardProps) => {
  return (
    <article className='relative overflow-hidden rounded-2xl border border-zinc-200 bg-[#ecfeff] p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg dark:bg-white/6 dark:backdrop-blur-sm dark:border-white/6'>
      <div
        style={{
          background:
            'linear-gradient(90deg, var(--accent-1), var(--accent-2))',
        }}
        className='absolute left-0 top-0 h-1 w-full'
      />

      <h3 className='mb-2 text-lg font-semibold'>{name}</h3>
      <p className='mb-4 text-sm text-zinc-700 dark:text-zinc-300'>
        {description}
      </p>
      <a
        href={url || '#'}
        className='inline-flex items-center gap-2 text-sm font-semibold text-(--accent-3) hover:underline'
        style={{ textDecorationSkipInk: 'auto' }}
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

      <figure>
        {/* <img src={image} alt="project screenshot" /> */}
        <Image
          className='w-full h-auto'
          src={image}
          width={300}
          height={300}
          alt='project screenshot'
        />
      </figure>
    </article>
  );
};

export default ProjectCard;
