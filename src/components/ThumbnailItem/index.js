// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
