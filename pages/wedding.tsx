import React from 'react'
import { NextPage } from 'next'
import classNames from 'classnames'
import Layout from '../components/Layout'
import PartyMemberBio from '../components/PartyMemberBio'

const WeddingPage: NextPage = () => {
  return (
    <Layout>
      <div className={classNames('pb-12', 'md:pb-32')}>
        <section className={classNames('container', 'mx-auto')}>
          <h1
            className={classNames(
              'libre',
              'text-center',
              'text-3xl',
              'font-bold',
              'p-6'
            )}
          >
            The Wedding Party
          </h1>
          <div className={classNames('flex', 'flex-wrap')}>
            <PartyMemberBio
              name="Taylor Hasselhoff"
              image="/people/taylor-hasselhoff.jpg"
              bio="hello blah"
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
              bio="Dylan cals me A.. man. Dylan and I met in high school because we were both on the tennis team. I’m so grateful that we’ve remained friends ever since. One thing that hasn’t changed about her is that she’s ALWAYS the life of the party. We’ve had so many memories (& most of them I can’t share because let’s just say... they’re not PG). She’s seen me at my happiest, darkest and weirdest times and guess what... she stuck around. If that’s not considered a good friend then I don’t know what is. I’m so excited to welcome Spencer into the family and can’t wait for them to pop out babies. I love you Dylan and Spencer !!"
            />
            <PartyMemberBio name="Rachel Marmer" bio="hello blah" />
            <PartyMemberBio
              name="Isabella Guetta"
              image="/people/isabella-guetta.jpg"
              bio="Hello! My name is Izzy. I’m pretty sure I’m one of Dylan’s oldest friends. We met in 5th grade when she was exploring her interests in Jewish academia and transferred to Shalhevet. Dylan always has such vibrant and positive energy! My most fond memories are from high school. One time Dylan and I played secret agents at Starbucks during a friends blind date. We dressed up in Starbucks attire and successfully accomplished the mission. Although, we don’t see each other to frequently, I always look forward to seeing her and Spencer on double dates or Shabbat dinners. I am certain we will be in each others lives for ever. Congrats Dyl and Spencer!"
            />
            <PartyMemberBio name="Jennifer Hourani" bio="hello blah" />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default WeddingPage
