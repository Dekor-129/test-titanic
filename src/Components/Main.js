import React from 'react'
import PersonTable from './PersonTable'

export default function Main(props) {

  return (
    <main>
        {props.persons.map((person)=> (
          <PersonTable key = {person.id} person = {person} />
        ))}
    </main>
  )
}
