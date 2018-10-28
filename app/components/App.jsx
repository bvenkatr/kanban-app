import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';
import autobind from 'autobind-decorator'

@autobind
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do laundry'
                }
            ]
        }
    }

    addNote = () => {
        this.setState({
            notes: [...this.state.notes, {
                id: uuid.v4(),
                task: 'New Notes'
            }]
        })
    }

    deleteNote = (id, e) => {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }

    componentWillMount() {
        console.log('Mounting phase, componentWillMount');
    }

    componentDidMount() {
        console.log('Mounting phase, componentDidMount');
    }

    componentWillReceiveProps(nestProps) {
        console.log('Mounted Phase, ComponentWillReceiveProps');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // return false, if you are sure no render is needed
    //     console.log('Mounted Phase, shouldComponentUpdate');
    //     return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        // No setState() here!
        console.log('Mounted Phase, componentWillUpdate');
    }

    componentDidUpdate() {
        // Operate on DOM after update
        console.log('Mounted Phase, componentDidUpdate');
    }

    componentWillUnmount() {
        // do cleanup operations here
        console.log('Unmounting Phase, componentWillUnmount');
    }

    activateNoteEdit = (id) => {
        this.setState({
          notes: this.state.notes.map(note => {
            if(note.id === id) {
              note.editing = true;
            }
            return note;
          })
      });
    }
    editNote = (id, task) => {
        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id === id) {
                    note.editing = false;
                    note.task = task;
                }
                return note;
            })
        });
    }

    render() {
        console.log('Mounting phase, render');
        const {notes} = this.state
        return <div>
            <button onClick={this.addNote}>+</button>
            <Notes
                notes={notes}
                onNoteClick={this.activateNoteEdit}
                onEdit={this.editNote}
                onDelete={this.deleteNote}
            />
        </div>
    }
}
