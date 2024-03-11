import './App.css'
import { TextEditor } from './components/TextEditor'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextEditor />
      </header>
    </div>
  )
}

export default App
