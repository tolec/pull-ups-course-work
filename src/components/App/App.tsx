import './App.scss'
import { observer } from 'mobx-react-lite'
import { Content } from '../Content/Content'
import { Header } from '../Header/Header'

export const App = observer(() => {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  )
})
