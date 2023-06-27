import {
  NotFoundContainer,
  NotFoundImageContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const notFoundImage =
  'https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png'

const NotFound = () => (
  <>
    <NotFoundContainer>
      <NotFoundImageContainer>
        <NotFoundImage
          className="not-found-img"
          src={notFoundImage}
          alt="not found"
        />
      </NotFoundImageContainer>
      <NotFoundHeading className="not-found-heading">
        Page Not Found
      </NotFoundHeading>
      <NotFoundPara className="not-found-para">
        We are sorry, the page you requested could not be found
      </NotFoundPara>
    </NotFoundContainer>
  </>
)

export default NotFound
