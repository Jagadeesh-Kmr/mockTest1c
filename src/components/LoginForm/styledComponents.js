import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const LoginImageContainer = styled.div`
  background-color: #e0eefe;
  width: 560px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30px;
`

export const LoginImage = styled.img`
  height: 240px;
  width: 260px;
  margin-right: 11px;
`

export const Form = styled.form`
  background-color: #ffffff;
  width: 360px;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 15px;
  border-radius: 30px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
  color: #183b56;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 11px;
  font-weight: 700;
  color: #5a7184;
`

export const InputName = styled.input`
  border: 1px solid #64748b;
  border-radius: 6px;
  color: #5a7184;
  background-color: transparent;
  height: 8%;
  width: 95%;
  padding: 11px;
  margin-top: 6px;
  margin-bottom: 18px;
  font-family: 'Roboto';
  font-size: 11px;
  outline: none;
`
export const InputPassword = styled.input`
  border: 1px solid #64748b;
  border-radius: 6px;
  color: #5a7184;
  background-color: transparent;
  height: 8%;
  width: 95%;
  padding: 11px;
  margin-top: 6px;
  margin-bottom: 18px;
  font-family: 'Roboto';
  font-size: 11px;
  outline: none;
`

export const LoginBtn = styled.button`
  color: #ffffff;
  background-color: #6366f1;
  border: 0;
  border-radius: 5px;
  width: 95%;
  font-weight: bold;
  font-size: 17px;
  font-family: 'Roboto';
  padding: 5px;
  height: 30px;
  margin-top: 11px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 11px;
  font-weight: 600;
  margin-left: 96px;
  margin-top: 0;
`
