// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li>
      <div className="app-card">
        <img src={imageUrl} alt={appName} className="app-image" />
        <p className="app-name">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
