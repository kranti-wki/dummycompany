import React from 'react'
import "./Table.css"
const Table: React.FC = () => {
  return (
    <>
    <div className='table-container'>
        <table>
            <thead>
            <tr>
                <th>chair</th>
                <th>the lead back</th>
                <th>the worker base</th>
                <th>the chair 2/4</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <th>width</th>
                <td>80 cm</td>
                <td>60 cm</td>
                <td>220 cm</td>
            </tr>
            <tr>
                <th>height</th>
                <td>50 cm</td>
                <td>20 cm</td>
                <td>200 cm</td>
            </tr>
             <tr>
                <th>depth</th>
                <td>500 cm</td>
                <td>20 cm</td>
                <td>100 cm</td>
            </tr>
             <tr>
                <th>weight</th>
                <td>700 cm</td>
                <td>200 cm</td>
                <td>1600 cm</td>
            </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Table