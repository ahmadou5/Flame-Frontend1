import { useTranslation } from '@pancakeswap/localization'
import { Button, Text, useMatchBreakpoints,  OpenNewIcon } from '@pancakeswap/uikit'

import styled from 'styled-components'

import * as S from './Styled'


const AptosTitle = styled.div`
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 110%;
  color: #ffffff;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin-bottom: 21px;
  margin-top: 16px;

  @media screen and (max-width: 375px) {
    font-size: 21px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 35px;
    margin-top: 10px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 40px;
  }
`

const AptosBanner = () => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  return (
    <S.Wrapper
      style={{
        background: `linear-gradient(180deg, #00BFA5 0%, #005A5A 100%)`,
        overflow: isMobile ? 'hidden' : 'visible',
      }}
    >
      <S.Inner>
        <S.LeftWrapper>
         
          <AptosTitle>{t('👋 Hi there Welcome To FlameFinance Beta!')}</AptosTitle>

          <Button
            minHeight="48px"
            onClick={() =>
              window?.open('https://', '_blank', 'noopener noreferrer')
            }
          >
            <Text color="invertedContrast" bold fontSize="16px" mr="4px">
              👋 {t('Get Whitelisted')}
            </Text>
            <OpenNewIcon color="invertedContrast" />
          </Button>
        </S.LeftWrapper>
      </S.Inner>
    </S.Wrapper>
  )
}

export default AptosBanner
