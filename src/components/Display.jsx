import { useState } from 'react';



const Display = (props) =>{
    const {note} = props;
    const [ mainTopic, setMainTopic] = useState(note.mainTopic);
    const [ subTopic, setSubTopic] = useState(note.subTopic);
    const [ noteContent, setContent] = useState(note.content);
    
    return(
        <>
            <form className="note-form">
                <h1>Previous notes!</h1>
                <div className="inputs">
                    <input type="text" placeholder="main topic" className="main-topic" DefaultValue={mainTopic} onChange={(e)=>{setMainTopic(e.target.value);}}/>
                    <input type="text" placeholder="sub topic" className="sub-topic" defaultValue={subTopic} onChange={(e)=>{setSubTopic(e.target.value);}}/>
                    <textarea placeholder="details" defaultValue={noteContent} onChange={(e)=>{setContent(e.target.value);}} />
                </div>
            </form>
        </>
    )

}

export default Display