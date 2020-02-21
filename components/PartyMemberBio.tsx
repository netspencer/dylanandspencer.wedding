import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

interface Props {
  name: string
  image?: string
  bio: string
}

const PartyMemberBio: FunctionComponent<Props> = ({ name, image, bio }) => (
  <article className={classNames('w-full', 'md:w-1/2', 'lg:w-1/4')}>
    <div className={classNames('p-4')}>
      <h1 className={classNames('libre', 'text-2xl', 'font-bold')}>{name}</h1>
      <div
        className={classNames('photo', 'relative', 'bg-wedding-tan', 'my-4')}
      >
        {image && (
          <img
            className={classNames('absolute', 'top-0', 'left-0', 'w-full')}
            src={image}
            alt={name}
          />
        )}
      </div>
      <p
        className={classNames('libre')}
        dangerouslySetInnerHTML={{ __html: bio }}
      />
    </div>
    <style jsx>{`
      .photo {
        padding-top: 125%;
      }
    `}</style>
  </article>
)

export default PartyMemberBio
