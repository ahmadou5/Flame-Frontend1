import { ChainId } from '@pancakeswap/sdk'
import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
  DropdownMenuItems,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { SUPPORT_ONLY_BSC } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Market'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
       
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
        
        {
          label: t('Bridge'),
          href: 'https://bridge.pancakeswap.finance/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      items: [
        {
          label: t('Farms'),
          href: '/farms',
          status: { text: t('Mainnet'), color: 'primary' },
        },
        {
          label: t('Pools'),
          href: '/pools',
          status: { text: t('Mainnet'), color: 'primary' },
          supportChainIds: SUPPORT_ONLY_BSC,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    
    {
      label: t('NFT'),
      href: `${nftsBaseUrl}`,
      disabled: ChainId.ETHEREUM ? 'true': 'false',
      icon: NftIcon,
      fillIcon: NftFillIcon,
      supportChainIds: SUPPORT_ONLY_BSC,
      image: '/images/decorations/nft.png',
      items: [
        {
          label: t('Overview'),
          href: `${nftsBaseUrl}`,
          status: { text: t('Mainnet'), color: 'success' },
        },
        {
          label: t('Collections'),
          href: `${nftsBaseUrl}/collections`,
          status: { text: t('Mainnet'), color: 'success' },
        },
        {
          label: t('Activity'),
          href: `${nftsBaseUrl}/activity`,
          status: { text: t('Mainnet'), color: 'success' },
        },
      ],
    },
    {
      label: '',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      
      items: [
        {
          label: t('Info'),
          href: '/info',
          status: { text: t('Mainnet'), color: 'success' },
        },
        
        {
          label: t('Voting'),
          href: '/voting',
          supportChainIds: SUPPORT_ONLY_BSC,
          image: '/images/voting/voting-bunny.png',
          status: { text: t('Mainnet'), color: 'success' },
        },
        {
          label: t('Careers'),
          href: '/',
          status: { text: t('Hiring'), color: 'success' },
        },
       
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Blog'),
          href: 'https://medium.com/pancakeswap',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Docs'),
          href: 'https://docs.pancakeswap.finance',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
