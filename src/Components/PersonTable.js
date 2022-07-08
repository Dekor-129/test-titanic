import React from 'react'
import './Styles/PersonTable.css'

export default function PersonTable(props) {
  return (
    <table>
        <tbody>
        <tr>
            <td>{props.person.survived ? 'Survived' : 'Not survived'}</td>
            <td>№ {props.person.id}</td>
        </tr>
        <tr>
            <td>Name:</td>
            <td> {props.person.name || 'Not found'}</td>
        </tr>
        <tr>
            <td>Age: </td>
            <td>{props.person.age || 'Not found'}</td>
        </tr>
        <tr>
            <td>Home:</td>
            <td>{props.person['home.dest'] || 'Not found'}</td>
        </tr>
        <tr>
            <td>Gender:</td>
            <td>{props.person.gender || 'Not found'}</td>
        </tr>
        <tr>
            <td>Number ticket:</td>
            <td>{props.person.ticket || 'Not found'}</td>
        </tr>
        <tr>
            <td>Number cabin:</td>
            <td>{props.person.cabin || 'Not found'}</td>
        </tr>
        </tbody>
    </table>
  )
}
