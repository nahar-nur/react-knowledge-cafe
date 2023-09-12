import { useState } from 'react'
import './App.css'
import Header from './Ccomponents/Header/Header'
import Blogs from './Ccomponents/Blogs/Blogs'
import Bookmarks from './Ccomponents/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = blog=>{
    console.log('bookmark adding soon')
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
