import { useState } from "react"

const AddNote = ({onAdd, onUpdate}) => {

    const [mainTopic, setMainTopic] =useState('')
    const [subTopic, setSubTopic] =useState('')
    const [content, setContent] =useState('')

    const onSubmit =(e) => {
        e.preventDefault();
        console.log('Form submitted');

        if(!mainTopic){
            alert('Please add a main topic')
            return
        }

        const note = {
            mainTopic,
            subTopic,
            content,
        }
      
        if (onUpdate) {
            onUpdate(note);
          } else {
            onAdd(note);
          }

        setMainTopic('')
        setSubTopic('')
        setContent('')
    }  
  return (
    
    <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label >Main Topic</label>
                <input type="text" 
                placeholder="Add Main Topic" 
                value={mainTopic} 
                onChange={(e) => setMainTopic(e.target.value) }/>
            </div>
            
            <div className="form-control">
                <label > Sub Topic</label>
                <input type="text"
                 placeholder="Add Sub Topic" 
                 value={subTopic} 
                 onChange={(e) => setSubTopic(e.target.value) }/>
            </div>

            <div className="form-control ">
            <textarea 
            rows="10"
            cols="50"
                value={content} 
                onChange={(e) => setContent(e.target.value) }/>
            </div>

        
            {/* <button>Save</button> */}

            <input type="submit" value='Save Note' className="btn btn-block"/>
    </form>
  )
}

export default AddNote;