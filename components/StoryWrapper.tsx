import React, { FunctionComponent } from 'react'
import { MDXProvider, Components } from '@mdx-js/react'
import classNames from 'classnames'

const components: Components = {
  h1: ({ children }) => (
    <h1
      className={classNames(
        'opensans',
        'font-bold',
        'text-xl',
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
        'opensans',
        'font-bold',
        'text-xl',
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
  p: ({ children }) => (
    <p className={classNames('leading-relaxed', 'md:text-xl', 'my-6')}>
      {children}
    </p>
  )
}

const StoryWrapper: FunctionComponent = ({ children }) => (
  <article
    className={classNames(
      'libre',
      'max-w-3xl',
      'md:mx-auto',
      'px-8',
      'pb-12',
      'md:pb-32'
    )}
  >
    <MDXProvider components={components}>{children}</MDXProvider>
  </article>
)

export default StoryWrapper
