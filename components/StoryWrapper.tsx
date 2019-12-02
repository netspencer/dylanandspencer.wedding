import React, { FunctionComponent } from 'react'
import { MDXProvider, Components } from '@mdx-js/react'

const components: Components = {
  p: ({ children }) => <p className="lh-copy f4 pv2">{children}</p>
}

const StoryWrapper: FunctionComponent = ({ children }) => (
  <article className="mv7 libre mw7 center">
    <MDXProvider components={components}>{children}</MDXProvider>
  </article>
)

export default StoryWrapper
