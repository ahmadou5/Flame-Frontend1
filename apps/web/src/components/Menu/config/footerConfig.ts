import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://',
        isHighlighted: true,
      },
     
      {
        label: t('Blog'),
        href: 'https://medium.com/',
      },
      {
        label: t('CoreDao'),
        href: 'https://coredao.og',
      },
      
    ],
  },
  {
    label: t('Help'),
    items: [
     
      {
        label: t('Guides'),
        href: 'https://',
      },
      {
        label: t('Getting Started With Core'),
        href: 'https://docs.coredao.org/developer',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: 'Docs',
        href: 'https://',
      },
      {
        label: 'Core Network Docs',
        href: 'https://docs.coredao.org/core-white-paper-v1.0.5',
      },
      {
        label: t('Careers'),
        href: 'https://',
        status: {text : 'hiring' , color : 'primary'}
      },
    ],
  },
]
