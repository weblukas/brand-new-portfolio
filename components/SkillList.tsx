import React from 'react';

const skills = [
  {
    category: 'Front-end',
    items: [
      'HTML',
      'CSS',
      'SCSS',
      'JavaScript (ES6+)',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Styled Components',
      'Material UI',
      'NextUI',
      'Bootstrap',
      'Redux',
      'Redux Toolkit',
      'TanStack Query',
      'React Hook Form',
      'REST',
      'GraphQL',
      'Apollo Client',
    ],
  },
  {
    category: 'Back-end (supporting front-end)',
    items: ['Node.js', 'Hono', 'Express'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'Storybook', 'DatoCMS', 'Webpack'],
  },
];

export default function SkillList() {
  return (
    <div className='space-y-6'>
      {skills.map((group) => (
        <div key={group.category}>
          <h3 className='mb-2 text-lg font-medium'>{group.category}</h3>
          <ul className='flex flex-wrap gap-2 text-md text-zinc-700 dark:text-zinc-300'>
            {group.items.map((s) => (
              <li key={s} className='rounded-md border px-2 py-1'>
                {s}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
