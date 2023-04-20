import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Basketball from './pages/Basketball'
import North from './components/North'
import South from './components/South'
import East from './components/East'
import West from './components/West'
import Soccer from './pages/Soccer'
import Badminton from './pages/Badminton'
import PlayedList from './pages/PlayedList'
import Book from './pages/Book'
import Schedule from './pages/Schedule'
import Ratinglist from './pages/Ratinglist'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path={"basketball/"} element={<Basketball />} >
                  <Route path={"north"} element={<North />} />
                  <Route path={"south"} element={<South />} />
                  <Route path={"east"} element={<East />} />
                  <Route path={"west"} element={<West />} />
                </Route>
                <Route path={"soccer/"} element={<Soccer />} >
                  <Route path={"north"} element={<North />} />
                  <Route path={"south"} element={<South />} />
                  <Route path={"east"} element={<East />} />
                  <Route path={"west"} element={<West />} />
                </Route>
                <Route path={"badminton/"} element={<Badminton />} >
                  <Route path={"north"} element={<North />} />
                  <Route path={"south"} element={<South />} />
                  <Route path={"east"} element={<East />} />
                  <Route path={"west"} element={<West />} />
                </Route>
                <Route path="schedule" element={<Schedule />} />
                <Route path="list" element={<PlayedList />} />
                <Route path="ratinglist" element={<Ratinglist/>}/>
                <Route path="profile" element={<Profile />} />
                <Route path=":locationId" element={<Book />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router

// <Route path={"soccer/"} element={<Soccer />} >
// <Route path={"north"} element={<North />} />
// <Route path={"south"} element={<South />} />
// <Route path={"east"} element={<East />} />
// <Route path={"west"} element={<West />} />
// </Route>