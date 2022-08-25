import { useState } from 'react';
import { BiTrash } from 'react-icons/all'
import { ListTask } from '../App';
import style from './TaskList.module.css'

import Clipboard from '../assets/Clipboard.svg'

interface TaskListProps {
    task: ListTask[];
    setTask: (task: any) => void;
}

export function TaskList({ task, setTask }: TaskListProps) {

    function handleDeleteTask(id: number) {

        const taskOld = task

        const newTask = taskOld.filter(task => task.id !== id)

        setTask(newTask)
    }

    function handleToggleTaskCompletion(id: number) {
        const newTasks = task.map(task => task.id === id ? { ...task, isComplete: !task.isComplete } : task)

        setTask(newTasks)
    }

    if (task.length === 0) {
        return (
            <div className={style.containerEmpty}>
                <img src={Clipboard} alt="" />
                <p><span>Você ainda não tem tarefas cadastradas</span>
                    Crie tarefas e organize seus itens a fazer</p>
            </div>
        )
    }

    return (
        <>
            {
                task.map(task => {
                    return (
                        <div className={style.container} key={task.id}>
                            <div className={style.content}>
                                <div className={task.isComplete ? style.completed : ''}>
                                    <div className={style.wrapper}>
                                        <label>
                                            <input type="checkbox" name="checkbox" id="checkbox" className={style.checkbox} onClick={() => handleToggleTaskCompletion(task.id)} />
                                            <span className={style.checkmark}></span>

                                            <p>{task.content}</p>

                                        </label>
                                    </div>
                                </div>

                                <button onClick={() => handleDeleteTask(task.id)}>
                                    <BiTrash size={16} color='#808080' />
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}