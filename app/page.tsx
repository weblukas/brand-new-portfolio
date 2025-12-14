import React from 'react';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';
import { projectsData } from '@/utils/projectsData';



export default function Home() {
  return (
    <div className='min-h-screen bg-zinc-50 text-zinc-900 dark:bg-[#0b1f2b] dark:text-zinc-100'>
      <Header />

      <main className='mx-auto max-w-5xl px-6 py-16'>
        {/* Hero with creative-man image */}
        <section className='hero-gradient mb-12 rounded-lg border border-zinc-100 p-8 dark:border-zinc-800'>
          <div className='mx-auto flex flex-col gap-6 md:flex-row md:items-center'>
            <div className='md:flex-1'>
              <h1 className='text-4xl font-bold'>Front-end developer</h1>
              <p className='mt-4 max-w-3xl text-lg leading-7 text-zinc-700 dark:text-zinc-300'>
                Front-end developer with over four years of commercial
                experience, focused on building modern web applications using
                React, TypeScript and Next.js.
              </p>
              <div className='mt-6 flex flex-wrap gap-3'>
                <a
                  className='btn-accent inline-block rounded-md px-4 py-2 text-sm font-medium'
                  href='#contact'
                >
                  Contact me
                </a>
                <a
                  className='rounded-md border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-100'
                  href='#projects'
                >
                  See projects
                </a>
              </div>
            </div>
            <div className='md:ml-8 md:w-64 md:shrink-0'>
              <Image
                src='/creative-man.png'
                alt='creative portrait'
                width={400}
                height={400}
                className='w-full rounded-lg shadow-md object-cover'
                priority={false}
              />
            </div>
          </div>
        </section>
        <section className='mb-12'>
          <h2 className='text-4xl mb-4 font-bold'>Introduction</h2>
          <p className='max-w-3xl text-lg leading-7 text-zinc-700 dark:text-zinc-300'>
            Hi, I&apos;m Lukasz Szmyd, a passionate developer dedicated to
            crafting high-quality web experiences. Comfortable working
            end-to-end on the front-end: from translating Figma designs into
            clean, accessible UI, through state management and data fetching
            (REST / GraphQL), to basic Node.js backends (Hono, Express) that
            support the client side. I care about readable code, consistent
            design systems and good developer experience.
          </p>
        </section>

        <section className='mb-12 '>
          <h3 className='text-4xl font-bold mb-4'>Skills</h3>
          <Skills />
        </section>

        <section id='projects' className='mb-12'>
          <h4 className='text-4xl font-bold mb-4'>Selected projects</h4>
          <div className='grid gap-6 md:grid-cols-2'>
            {projectsData.map((project) => {
              const { id, name, image, description, url, github } = project
              return (
                <ProjectCard
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  description={description}
                  url={url}
                  github={github}
                />
              );
            })}
          </div>
        </section>

        <section id='contact' className='mb-12'>
          <h5 className='mb-4 text-2xl font-semibold'>Contact</h5>
          <p className='mb-4 text-zinc-700 dark:text-zinc-300'>
            I am available for freelance and full-time roles. You can reach me
            via email:
            <a
              className='ml-2 font-medium text-blue-600'
              href='mailto:your.email@example.com'
            >
              lukaszszmyd.dev@gmail.com
            </a>
          </p>
          <div className='flex gap-4'>
            <a
              className='text-sm font-medium text-zinc-700 hover:underline'
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
            <a
              className='text-sm font-medium text-zinc-700 hover:underline'
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className='border-t border-zinc-200 py-8 text-center text-sm text-zinc-600 dark:border-zinc-800'>
        © {new Date().getFullYear()} Front-end developer — built with Next.js
        and TypeScript
      </footer>
    </div>
  );
}
