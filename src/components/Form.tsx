import style from './Form.module.css'
import { BiPlusCircle } from 'react-icons/all'
import { FormEvent, useState } from 'react'
import { ListTask } from '../App'

interface FormProps {
    task: ListTask[];
    setTask: (task: any) => void;
}

export function Form({ task, setTask }: FormProps) {
    const [dataForm, setDataForm] = useState('')

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        const newData = {
            id: task?.length + 1,
            content: dataForm,
            isCompleted: false
        }

        if (dataForm) {
            setTask([...task, newData])
            setDataForm('')
        }
    }

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Adicione uma nova tarefa' onChange={e => setDataForm(e.target.value)} value={dataForm} />
                <button type="submit">Criar <BiPlusCircle size={24} /> </button>
            </form>
        </div>
    )
}