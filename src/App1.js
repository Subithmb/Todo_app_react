// import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'
// import React from 'react'
// import { Home } from './Home'
// import { Contact } from './Contact'

// function App1() {
//   return ( <div>
    
//     <Router>
//     <Link to={'/'}>Home  </Link>
//     <Link to={'/Contact'}>  contact</Link>
//     <Routes>
//         <Route  path='/' element={<Home/>} />
//         <Route  path='/Contact' element={<Contact/>} />

        
//     </Routes>
//      </Router>

//   </div>

//   )
// }

// export default App1

import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'
import { Home } from './Home'
import { Contact } from './Contact'
function App1() {
  return (
    <div>
        <Router>
            
            <Link to={'/'}>HOME</Link>
            <Link to={'/Contact'}>Contact</Link>
            <Routes>
                <Route path='/'  element={<Home/>}/>
                <Route path='/Contact'  element={<Contact/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App1