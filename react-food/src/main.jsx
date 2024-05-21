import ReactDOM from 'react-dom/client'
import MainLayout from './layouts/MainLayout' /** QUESTION: vscode не смог дать подсказку на импорт этого файла, пришлось писать руками, надо разобраться почему. Плагин нужен какой-то для jsx? */

ReactDOM.createRoot(
  document.getElementById('root')).render(
    <MainLayout/>
  )
