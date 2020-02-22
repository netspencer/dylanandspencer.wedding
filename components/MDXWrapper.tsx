import React, { FunctionComponent } from 'react'
import { MDXProvider, Components } from '@mdx-js/react'
import classNames from 'classnames'

interface Props {
  centerHeadings?: boolean
  useAbril?: boolean
}

const components = (
  useAbril: boolean,
  centerHeadings: boolean
): Components => ({
  h1: ({ children }) => (
    <h1
      className={classNames(
        { 'font-sans': !useAbril },
        { 'font-slab': useAbril },
        { 'font-bold': !useAbril },
        { 'text-xl': !useAbril },
        { 'text-2xl': useAbril },
        { 'text-center': centerHeadings },
        'md:text-3xl',
        'leading-snug'
      )}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      className={classNames(
        { 'font-sans': !useAbril },
        { 'font-slab': useAbril },
        { 'font-bold': !useAbril },
        { 'text-xl': !useAbril },
        { 'text-2xl': useAbril },
        { 'text-center': centerHeadings },
        'md:text-3xl',
        'leading-snug'
      )}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <p
      className={classNames('leading-relaxed', 'text-l', 'md:text-2xl', 'my-6')}
    >
      {children}
    </p>
  ),
  a: ({ children, ...rest }) => (
    <a {...rest} className={classNames('text-blue-800')}>
      {children}
    </a>
  ),
  p: ({ children }) => (
    <p className={classNames('leading-relaxed', 'md:text-xl', 'my-6')}>
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul
      className={classNames(
        'leading-relaxed',
        'md:text-xl',
        'my-6',
        'list-disc'
      )}
    >
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol
      className={classNames(
        'leading-relaxed',
        'md:text-xl',
        'my-6',
        'list-decimal'
      )}
    >
      {children}
    </ol>
  ),

  li: ({ children }) => <li className={classNames('my-3')}>{children}</li>
})

const MDXWrapper: FunctionComponent<Props> = ({
  useAbril,
  centerHeadings,
  children
}) => (
  <article
    className={classNames('font-serif', 'max-w-3xl', 'md:mx-auto', 'px-8')}
  >
    <MDXProvider
      components={components(useAbril ?? false, centerHeadings ?? false)}
    >
      {children}
    </MDXProvider>
  </article>
)

export default MDXWrapper
