import { ArrowForwardIcon, Button, Text, Link, useMatchBreakpoints, useIsomorphicEffect } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

import { memo, useMemo, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'

import * as S from './Styled'


const Header = styled(S.StyledHeading)`
  font-size: 20px;
  min-height: 44px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 40px;
    min-height: auto;
  }
`

const HEADING_ONE_LINE_HEIGHT = 27

const TokenListBanner = () => {
  const {
    t,
    currentLanguage: { code },
  } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  const { isDark } = useTheme()

  const perpetualUrl = useMemo(
    () => `https://perp.pancakeswap.finance/${perpLangMap(code)}/futures/BTCUSDT?theme=${perpTheme(isDark)}`,
    [code, isDark],
  )
  const headerRef = useRef<HTMLDivElement>(null)

  useIsomorphicEffect(() => {
    const target = headerRef.current
    target.style.fontSize = '' // reset
    target.style.lineHeight = ''
    if (!target || !isMobile) return
    if (target.offsetHeight > HEADING_ONE_LINE_HEIGHT) {
      target.style.fontSize = '18px'
      target.style.lineHeight = `${HEADING_ONE_LINE_HEIGHT}px`
    }
  }, [isMobile, code])

  return (
    <S.Wrapper>
      <S.Inner>
        <S.LeftWrapper>
          <S.StyledSubheading ref={headerRef}>{t('Token Listing')}</S.StyledSubheading>
          <Header width={['160px', '160px', 'auto']}>{t('Apply For Farms and Pools')}</Header>
          <Link href={perpetualUrl} external>
            <Button>
              <Text color="invertedContrast" bold fontSize="16px" mr="4px">
                {t('Apply Now')}
              </Text>
              <ArrowForwardIcon color="invertedContrast" />
            </Button>
          </Link>
        </S.LeftWrapper>
       
      </S.Inner>
    </S.Wrapper>
  )
}

export default memo(TokenListBanner)
