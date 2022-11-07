/* eslint-disable react/prop-types */

//import React, {Component, PropTypes} from 'react';



export default function TodoListItem(props) {
    return (
        
            <tr>
            <td>1</td>
            <td> {props.item.name}</td>
            <td>{props.item.date}</td>
            <td>{props.item.discriptions}</td>
            <td>{props.item.tags}</td>
            <td>{props.item.priority}</td>
          </tr>
    );
}