import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

import PartyMemberBio from './PartyMemberBio'

const WeddingParty: FunctionComponent = () => (
  <section className={classNames('container', 'mx-auto')}>
    <div className={classNames('flex', 'flex-wrap')}>
      <PartyMemberBio
        name="Taylor Hasselhoff"
        image="/people/taylor-hasselhoff.jpg"
        bio="Coming soon"
      />
      <PartyMemberBio
        name="Olivia Wachsberger"
        bio="My name is Olivia but I’m happy to go by Ollie, Olive, Oleeeve, or my new gangster rap name, “DaCheese”.
Although I haven’t known Dylan “Dildo” Newman for long, I feel as if I’ve known her for hundreds of lifetimes. (best friends in the Ming Dynasty— what up!) Her essence transcends time and space and her spirit is with me constantly — wether it be in person, in thought, or during our hourly FaceTimes.
Dylan has become my rock, my mentor, my spiritual advisor, and my best friend.
Quite frankly, Spen, I’m jealous."
      />
      <PartyMemberBio
        name="Olivia Collins"
        image="/people/olivia-collins.png"
        bio="My name is Olivia! I met Dylan at a birthday dinner about 5 years ago — we just happened to be placed next to each other at the table! I felt an instant connection with Dylan. We talked all night about everything from astrology to relationships to soulmates, and I felt like I had already known her for years. After meeting Dylan, I knew she was a special soul and that she would be part of my life for a long, long time. I'm so thankful to have a friend like Dylan in my life. She's caring, compassionate, and she cracks me TF up on the daily. She always comes through with the horoscopes when shit doesn't feel right in the universe, and I don't know what I'd do without her. Wishing you and Spencer a lifetime of love and happiness! Love you Dyl! ❤️"
      />
      <PartyMemberBio
        name="Casey Bond"
        image="/people/casey-bond.jpg"
        bio="Hi, I’m Casey! Dylan and I became friends on JV tennis in high school, where we gossiped and ate mooshy balls more than we actually played sports. We grew even closer navigating our quarter-life-crises together and medicating with live music. I live for her fascination with astrology (and occasionally laughing at it), which she pretends upsets her, but I know she loves it. And most importantly, I am her greatest subject because I am the least pisces pisces to walk this planet. While we haven’t always been joined at the hip, we always pick up wherever we left off when we’re together again, which is the best kind of friendship. <3 you Dyllie!"
      />
      <PartyMemberBio
        name="Amanda Marmer"
        image="/people/amanda-marmer.jpg"
        bio="Hi! I'm Amanda. Dylan and I met in high school because we were both on the tennis team. I’m so grateful that we’ve remained friends ever since. One thing that hasn’t changed about her is that she’s ALWAYS the life of the party. We’ve had so many memories (& most of them I can’t share because let’s just say... they’re not PG). She’s seen me at my happiest, darkest and weirdest times and guess what... she stuck around. If that’s not considered a good friend then I don’t know what is. I’m so excited to welcome Spencer into the family and can’t wait for them to pop out babies. I love you Dylan and Spencer !!"
      />
      <PartyMemberBio name="Rachel Marmer" bio="Coming soon" />
      <PartyMemberBio
        name="Isabella Guetta"
        image="/people/isabella-guetta.jpg"
        bio="Hello! My name is Izzy. I’m pretty sure I’m one of Dylan’s oldest friends. We met in 5th grade when she was exploring her interests in Jewish academia and transferred to Shalhevet. Dylan always has such vibrant and positive energy! My most fond memories are from high school. One time Dylan and I played secret agents at Starbucks during a friends blind date. We dressed up in Starbucks attire and successfully accomplished the mission. Although, we don’t see each other to frequently, I always look forward to seeing her and Spencer on double dates or Shabbat dinners. I am certain we will be in each others lives for ever. Congrats Dyl and Spencer!"
      />
      <PartyMemberBio
        name="Jennifer Hourani"
        image="/people/jennifer-hourani.jpg"
        bio="Dylan and I didn’t get the chance to create our amazing friendship until after college, which feels so rare these days. She moved into my apartment for a couple of weeks - thanks Amanda! - and we hit it off instantly, hanging out basically every night.
Not only did I love how kind, beautiful, smart and confident Dylan’s first impression was but also how mindful, receptive and refreshing she truly is deep down.
She views the world, including other people, in her own unique way. She opened my mind up in ways that you’d expect from stepping out of your comfort zone or falling in love. 
These are the qualities many people look for in life experiences, but few actually find - and I found them in Dylan.
So, I can’t imagine anyone luckier than Spencer right now. I wish Dylan and Spencer the absolute sweetest wedding and marriage and can’t wait to be standing next to her every step of the way."
      />

      <PartyMemberBio name="Hunter Owens" bio="Coming soon" />
      <PartyMemberBio name="Sam Madden" bio="Coming soon" />
      <PartyMemberBio name="Evan Cover" bio="Coming soon" />
      <PartyMemberBio name="Greg Ah-Fenne" bio="Coming soon" />
      <PartyMemberBio name="JD Remington" bio="Coming soon" />
      <PartyMemberBio name="Tyler Macdonald" bio="Coming soon" />
      <PartyMemberBio name="Will Strimling" bio="Coming soon" />
      <PartyMemberBio name="Sully Taylor" bio="Coming soon" />
    </div>
  </section>
)

export default WeddingParty
