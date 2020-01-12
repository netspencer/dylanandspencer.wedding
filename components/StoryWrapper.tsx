import React, { FunctionComponent } from 'react'
import { MDXProvider, Components } from '@mdx-js/react'
import classNames from 'classnames'

const components: Components = {
  p: ({ children }) => (
    <p className={classNames('leading-normal', 'text-xl', 'my-8')}>
      {children}
    </p>
  )
}

const StoryWrapper: FunctionComponent = ({ children }) => (
  <article
    className={classNames(
      'libre',
      'max-w-3xl',
      'mx-4',
      'md:mx-auto',
      'md:py-16'
    )}
  >
    <MDXProvider components={components}>{children}</MDXProvider>
  </article>
)

export default StoryWrapper
