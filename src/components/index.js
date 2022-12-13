import './index.css'

const HistoryApp = props => {
  const {eachHistory, deleteSearch} = props
  const {title, id, timeAccessed, logoUrl, domainUrl} = eachHistory
  const deleteSearchHistory = () => {
    deleteSearch(id)
  }
  return (
    <li className="historyContainer">
      <div className="historyDetailsContainer">
        <p className="historyTime">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="historyWebLogo" />
        <p className="historyTitle">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="deleteIcon"
        onClick={deleteSearchHistory}
        testId="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryApp
