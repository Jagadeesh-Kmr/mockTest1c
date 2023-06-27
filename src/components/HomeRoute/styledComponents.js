import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: #152850;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const HomeHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px;
`

export const BankLogo = styled.img`
  height: 60px;
  width: 120px;
`

export const Logout = styled.button`
  color: #5a7184;
  background-color: transparent;
  border: 1px solid #5a7184;
  border-radius: 5px;
  font-weight: bold;
  font-size: 17px;
  font-family: 'Roboto';
  height: 42px;
  width: 80px;
  cursor: pointer;
`

export const BankImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`

export const BankHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 42px;
  font-weight: 600;
  color: #ffffff;
`

export const BankImage = styled.img`
  height: 280px;
  width: 420px;
`
