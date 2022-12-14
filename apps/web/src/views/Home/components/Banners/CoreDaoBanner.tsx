import { useTranslation } from '@pancakeswap/localization'
import { Button, Text, useMatchBreakpoints,  OpenNewIcon } from '@pancakeswap/uikit'

import styled from 'styled-components'

import * as S from './Styled'


const AptosTitle = styled.div`
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 70%;
  color: #ffffff;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin-bottom: 18px;
  margin-top: 13px;
 
  @media screen and (max-width: 375px) {
    font-size: 19px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 35px;
    margin-top: 10px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 40px;
  }
`

const CoreDaoBanner = () => {
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

          <AptosTitle>  {t('FlameFinance X CoreDao')}</AptosTitle>
          <AptosTitle> 👋 {t('Hello CoreDao Team')}</AptosTitle>
          <Button
            minHeight="48px"
            onClick={() =>
              window?.open('https://coredao.org/', '_blank', 'noopener noreferrer')
            }
          >
            <Text color="invertedContrast" bold fontSize="16px" mr="14px">
             {t('Explore CoreDao')}
            </Text>
            <OpenNewIcon color="invertedContrast" />
          </Button>
        </S.LeftWrapper>
      </S.Inner>
    </S.Wrapper>
  )
}

export default CoreDaoBanner
