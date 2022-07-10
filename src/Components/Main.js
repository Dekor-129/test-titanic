import React from 'react'
import PersonTable from './PersonTable'

export default function Main(props) {

  return (
    <main>
        { props.persons.length === 0 ?
          <h2>No matches found</h2>:
          props.persons.map((person)=> (
            <PersonTable key = {person.id} person = {person} />
          ))
        }
    </main>
  )
}
