import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import './App.css';

function App() {
  const [currentlyReading, setCurrentlyReading] = useState([{
    "title": "Best Android Apps",
    "authors": [
      "Mike Hendrickson",
      "Brian Sawyer"
    ],
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
      "id": "xlp6NE2NWecC",
    "shelf": "currentlyReading"
    },
    {
      "title": "Android Design Patterns",
      "subtitle": "Interaction Design Solutions for Developers",
      "authors": [
        "Greg Nudelman"
      ],
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "id": "Ifg1ZpSo7cwC",
      "shelf": "currentlyReading"
    },
    {
      "title": "Android Apps Security",
      "authors": [
        "Sheran Gunasekera"
      ],
      
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=IEk2m00o9_IC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=IEk2m00o9_IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
     "id": "IEk2m00o9_IC",
     "shelf": "currentlyReading"
    }

  ])
  const [wantToRead, setWantToReading] = useState([
    {
      "title": "Best Android Apps",
      "authors": [
        "Mike Hendrickson",
        "Brian Sawyer"
      ],
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      },
      "id": "xlp6NE2NWecC",
      "shelf": "wantToRead"
    },
    {
      "title": "Android Design Patterns",
      "subtitle": "Interaction Design Solutions for Developers",
      "authors": [
        "Greg Nudelman"
      ],

      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "id": "Ifg1ZpSo7cwC",
      "shelf": "wantToRead"
    },
    {
      "title": "Android Apps Security",
      "authors": [
        "Sheran Gunasekera"
      ],

      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=IEk2m00o9_IC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=IEk2m00o9_IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "id": "IEk2m00o9_IC",
      "shelf": "wantToRead"
    }

  ])
  const[read,setRead]=useState([
    {
      "title": "Voice Application Development for Android",
      "authors": [
        "Michael F. McTear",
        "Zoraida Callejas"
      ],
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=V-gtAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=V-gtAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },

      "id": "V-gtAgAAQBAJ",
      "shelf":"read"
    },
    {
      "title": "Android Fully Loaded",
      "authors": [
        "Rob Huddleston"
      ],
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=H8tNBKmPO5UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=H8tNBKmPO5UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "id": "H8tNBKmPO5UC",
      "shelf": "read"
    }
  ])
console.log(currentlyReading);
console.log(wantToRead);
console.log(read);
 
  return (
    <Router>
    <div className="app">

        <Switch>
        <Route exact path='/'>
           <ListBooks /> 
        </Route>
        </Switch>

        <Switch>
        <Route path='/search'>
        <SearchBooks />   
        </Route>
        </Switch>

      </div>
  </Router>);
}

export default App