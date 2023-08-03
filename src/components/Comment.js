import React, {useState} from 'react';

const Comment = ({comment, onUpvote, onDownvote, onReply}) =>{
    const [showReplyForm,setShowReplyForm]=useState(false);
    const [replyText,setReplyText]=useState('');

    const handleReplyClick = ()=>{
        setShowReplyForm(!showReplyForm);
    };
    const handleReplySubmit=(e)=>{
        e.preventDefault();
        if (replyText.trim()!==''){
            onReply(comment.id,replyText);
            setShowReplyForm(false);
            setReplyText('');
        }
    };
    return (
        <div className='comment'>
            <p>{comment.text}</p>
            <div>
                <button onClick={() => onUpvote(comment.id)}>Upvote</button>
                <span>Score: {comment.score}</span>
                <button onClick={() => onDownvote(comment.id)}>Downvote</button>
                <button onClick={handleReplyClick}>Reply</button>
            </div>
            {setShowReplyForm && (
                <form onSubmit={handleReplySubmit}>
                    <textarea
                      value={replyText}
                      onChange={(e)=> setReplyText(e.target.value)}
                      placeholder="Reply to this comment..." 
                     />
                     <button type='submit'>Reply</button>
                </form>
            )}
            {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} onUpvote={onUpvote} onDownvote={onDownvote} onReply={onReply} />
            ))}
        </div>
    );
};

export default Comment;