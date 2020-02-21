import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

import bios from '../content/bios'
import PartyMemberBio from './PartyMemberBio'

const WeddingParty: FunctionComponent = () => (
  <section className={classNames('container', 'mx-auto')}>
    <div className={classNames('flex', 'flex-wrap')}>
      {bios.map(bio => (
        <PartyMemberBio
          key={bio.name}
          name={bio.name}
          image={bio.photo}
          bio={bio.bio}
        />
      ))}
    </div>
  </section>
)

export default WeddingParty
