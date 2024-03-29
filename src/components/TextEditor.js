import React, { Component } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'

export class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    })
  }

  render() {
    const { editorState } = this.state
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          placeholder="Digite aqui!"
        />
        <textarea
          id="textarea"
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    )
  }
}
