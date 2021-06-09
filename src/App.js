import './App.css';

import TaskList from "./components/TaskList";
import styled from "styled-components";
import {connect} from "react-redux";
import {addTask} from "./actions/task";
import {useState} from "react";


function App() {

    return (
        <TaskList/>
    );
}


export default App;

