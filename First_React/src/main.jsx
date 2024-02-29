import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



function MyApp(){
return(
  <div>
    <h1>hey buddy</h1>
  </div>
  )
}
//we are create  a react element means how inside of react take the input
const reactElement =React.createElement(
  "a",
  {href:"http://sflix.com"},
  "click to watch movies"
  )
const anotherElement =(
  <a href='https://google.com'>visit google</a>
  )


ReactDOM.createRoot(document.getElementById('root')).render(
  

  <App/>
  
)
