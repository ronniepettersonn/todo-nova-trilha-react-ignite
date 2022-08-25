import { ListTask } from '../App';
import style from './Task.module.css'

interface TaskProps {
    task: ListTask[];
    setTask: (task: any) => void;
}

export function Task({ task, setTask }: TaskProps) {
    const isComplete = task.filter(task => task.isComplete === true)

    const totalTask = task.map(task => task.id)

    console.log(isComplete)

    return (
        <div className={style.container}>
            <div className={style.info}>
                <p className={style.taskCreated}>
                    Tarefas criadas <span>{task.length}</span>
                </p>
                <p className={style.taskDone}>
                    Concluídas <span>{isComplete.length !== 0 ? `${isComplete.length} de ${totalTask.length}` : 0}</span>
                </p>
            </div>
        </div>
    )
}