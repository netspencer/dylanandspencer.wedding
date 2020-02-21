import { NextSeoProps } from 'next-seo'

const SEO: NextSeoProps = {
  titleTemplate: '%s - Dylan & Spencer',
  description:
    'Dylan Michelle Newman & Spencer Davis Schoeben are getting married on May 24, 2020.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://dylanandspencer.wedding/',
    site_name: 'Dylan & Spencer',
    images: [
      {
        url: 'https://dylanandspencer.wedding/og-image.jpg',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    site: '@netspencer',
    cardType: 'summary_large_image'
  }
}

export default SEO
