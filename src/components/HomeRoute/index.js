import Cookies from 'js-cookie'

import {
  HomeBgContainer,
  HomeHeaderContainer,
  BankImage,
  Logout,
  BankHeading,
  BankImageContainer,
  BankLogo,
} from './styledComponents'

const bankLogo = 'https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png'
const bankCard =
  'https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png'

const HomeRoute = props => {
  const redirectToLogin = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <HomeBgContainer>
      <HomeHeaderContainer>
        <BankLogo src={bankLogo} alt="website logo" />
        <Logout type="button" onClick={redirectToLogin}>
          Logout
        </Logout>
      </HomeHeaderContainer>
      <BankImageContainer>
        <BankHeading>Your Flexibility, Our Excellence</BankHeading>
        <BankImage src={bankCard} alt="digital card" />
      </BankImageContainer>
    </HomeBgContainer>
  )
}

export default HomeRoute
