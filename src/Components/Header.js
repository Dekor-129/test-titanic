import React from 'react'
import './Styles/Input.css'
import './Styles/Header.css'

export default function Header(props) {
  return (
    <header>
        <div className='logo'>TITANIC</div>
        <div className='input-block'>
            <input 
              onChange={(event) => props.setTextQuery(event.target.value)} 
              onKeyDown ={(event)=> {
                if (event.code === 'Enter') {
                  props.findPerson( props.textQuery)
                  Boolean(props.textQuery.trim()) === false ? props.setBol(false): props.setBol(true)
              }}}
              value={props.textQuery} 
              placeholder="Enter the passenger's full name"/>
            <button 
              className='btn btn-find' 
              onClick={() => {
                props.findPerson( props.textQuery); 
                Boolean(props.textQuery.trim()) === false ? props.setBol(false): props.setBol(true)}
              }>Find</button>
            <button 
            className='btn btn-clear' 
            onClick={() => {
              props.showAllPersons(); 
              props.setBol(false)}
            }>Clear</button>
        </div>
    </header>
  )
}
