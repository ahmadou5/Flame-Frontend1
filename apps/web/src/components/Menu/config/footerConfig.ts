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
        label: t('Brand'),
        href: 'https://',
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
        label: t('Careers'),
        href: 'https://',
      },
    ],
  },
]
