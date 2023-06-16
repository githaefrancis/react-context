import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import { TasksProvider } from '../context/TasksContext';

export default function TaskApp(){
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}