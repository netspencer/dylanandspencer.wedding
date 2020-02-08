import React, { FunctionComponent, useState } from 'react'
import Iframe from 'iframe-resizer-react'
import classNames from 'classnames'

import Loading from './Loading'

const Registry: FunctionComponent = () => {
  const [didLoad, setDidLoad] = useState(false)

  return (
    <div className={classNames('md:pb-32')}>
      {!didLoad && <Loading />}
      <Iframe
        style={{ transition: 'opacity 1s' }}
        onInit={() => {
          setDidLoad(true)
        }}
        className={classNames('w-full', { 'opacity-0': !didLoad })}
        bodyBackground="rgba(0,0,0,0)"
        src="https://widget.zola.com/v1/widget/registry/dylanandspencer/html"
      />
    </div>
  )
}

export default Registry
