import React from 'react';
import Note from './Note'
import Editable from './Editable';

export default ({notes, onNoteClick = () => {}, onEdit = () => {}, onDelete = () => {}, ...props}) => {
    return <ul>
        {
            notes.map((i) => {
                return <li key={i.id}>
                    <div style={{display: 'flex'}}>
                        <Note className="note" onClick={onNoteClick.bind(null, i.id)}>
                            <Editable
                                className="editable"
                                editing={i.editing}
                                value={i.task}
                                onEdit={onEdit.bind(null, i.id)}
                            />
                        </Note>
                        <button
                            className="delete"
                            onClick={onDelete.bind(null, i.id)}
                        >
                            x
                        </button>
                    </div>
                </li>
            })
        }
    </ul>
}