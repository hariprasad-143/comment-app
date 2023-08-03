import React, {useState} from 'react';

const CommentForm = ({onSubmit}) =>{
    const [text,setText] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (text.trim() !== ''){
            onSubmit(text);
            setText('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <textarea
              value={text}
              onChange={(e)=> setText(e.target.value)}
              placeholder = "Add a new comment..."
            />
            <button type="submit">Add Comment</button>

        </form>
    );
};

export default CommentForm;