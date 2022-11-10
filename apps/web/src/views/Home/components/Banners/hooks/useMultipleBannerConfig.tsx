import { ReactElement, useMemo } from 'react'
import shuffle from 'lodash/shuffle'
import CompetitionBanner from '../CompetitionBanner'
import IFOBanner from '../IFOBanner'
import LotteryBanner from '../LotteryBanner'
import PerpetualBanner from '../PerpetualBanner'
import useIsRenderIfoBanner from './useIsRenderIFOBanner'
import useIsRenderLotteryBanner from './useIsRenderLotteryBanner'
import useIsRenderCompetitionBanner from './useIsRenderCompetitionBanner'
import AptosBanner from '../AptosBanner'
import TokenListBanner from '../TokenListBanner'
import CoreDaoBanner from '../CoreDaoBanner'

interface IBannerConfig {
  shouldRender: boolean
  banner: ReactElement
}

/**
 * make your custom hook to control should render specific banner or not
 * add new campaign banner easily
 *
 * @example
 * ```ts
 *  {
 *    shouldRender: isRenderIFOBanner,
 *    banner: <IFOBanner />,
 *  },
 * ```
 */
export const useMultipleBannerConfig = () => {
  const isRenderIFOBanner = useIsRenderIfoBanner()
  const isRenderLotteryBanner = useIsRenderLotteryBanner()
  const isRenderCompetitionBanner = useIsRenderCompetitionBanner()

  return useMemo(() => {
    const NO_SHUFFLE_BANNERS: IBannerConfig[] = [
      { shouldRender: true, banner: <AptosBanner /> },
      { shouldRender: true, banner: <TokenListBanner /> },
      { shouldRender: true, banner: <CoreDaoBanner /> },
      {
        shouldRender: false,
        banner: <IFOBanner />,
      },
    ]

    const SHUFFLE_BANNERS: IBannerConfig[] = [
      {
        shouldRender:false,
        banner: <CompetitionBanner />,
      },
      {
        shouldRender: false,
        banner: <LotteryBanner />,
      },
      {
        shouldRender: false,
        banner: <PerpetualBanner />,
      },
    ]
    return [...NO_SHUFFLE_BANNERS, ...shuffle(SHUFFLE_BANNERS)]
      .filter((bannerConfig: IBannerConfig) => bannerConfig.shouldRender)
      .map((bannerConfig: IBannerConfig) => bannerConfig.banner)
  }, [])
}
