import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from './pages/Home';
import Manufacturer from './pages/Manufacturer';

import './App.css';

function App() {
  // onSomeButtonClicked() {
  //   const { userId, dispatch } = this.props
  //   dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
  // }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='main-heading'><Link to="/">Vehicle manufacturers</Link></h1>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manufacturers/:id" element={<Manufacturer />} />
      </Routes>
    </div>
  )
}

export default App;
