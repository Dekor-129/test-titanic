import { useState,  useEffect} from "react"
import React from 'react'
import data from './data.json'
import Header from "./Components/Header"
import Main from "./Components/Main"

export default function App() {
  const [persons] = useState(data)
  const [currentPersons, setCurrentPersons] = useState(persons.filter(el=> el.id < 25))
  const [textQuery, setTextQuery] = useState('')
  const [bol, setBol] = useState(false)

  const addToList = ()=> {
    let documentHeight = document.documentElement.getBoundingClientRect().bottom
    let clientHeight = document.documentElement.clientHeight + 100
    if(documentHeight < clientHeight) setCurrentPersons([...currentPersons, ...persons.filter(el=> el.id > currentPersons.length && el.id  < (currentPersons.length + 25))])
  }

  useEffect(()=>{
    if (!bol) { 
      window.addEventListener('scroll', addToList)
    }
    return ()=>{ 
      window.removeEventListener('scroll', addToList)}
  })

  function findPerson (findPerson) {
    if (Boolean(findPerson.trim()) === false) {
      setCurrentPersons(persons.filter(el=> el.id < 25))
      setBol(false)
    }
    else{
      findPerson = findPerson.toUpperCase()
      setCurrentPersons(persons.filter(person => {
        const personName = person.name.toUpperCase()
        return personName.includes(findPerson)
      }))
  }
  }
  
  function showAllPersons (){
    setTextQuery('')
    setCurrentPersons(persons.filter(el=> el.id < 25))
  }

  return (
    <>
      <Header setBol={setBol} showAllPersons={showAllPersons} findPerson ={findPerson} textQuery ={textQuery} setTextQuery={setTextQuery}/>
      <Main persons = {currentPersons} />
    </>
  )
}
