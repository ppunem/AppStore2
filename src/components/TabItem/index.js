// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, changeActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const changeTabId = () => {
    changeActiveTabId(tabId)
  }

  const active = isActive ? `active-tab` : ``

  return (
    <li>
      <button
        type="button"
        className={`tabitem ${active}`}
        onClick={changeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
