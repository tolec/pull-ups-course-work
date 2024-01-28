import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Header } from '../Header/Header'
import { PlanScreen } from '../PlanScreen/PlanScreen'
import { TrainingScreen } from '../TrainingScreen/TrainingScreen'
import { HomeScreen } from '../HomeScreen/HomeScreen'
import './App.scss'

export const App = observer(() => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/plan" Component={PlanScreen} />
          <Route path="/training" Component={TrainingScreen} />
        </Routes>
      </div>
    </Router>
  )
})
