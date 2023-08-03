import React, {useState} from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';


const CommentSection =() =>{
    const [comments,setComments] = useState([]);

    const addComment = (text) =>{
        const newComment = {
            id:Date.now(),
            text,
            score:0,
            replies: [],
        };
        setComments([...comments, newComment]);
    };
    const addReply = (parentId, replyText)=>{
        const newReply = {
            id:Date.now(),
            text:replyText,
            score:0,
            replies:[],
        };
        const updatedComments = comments.map((comment)=>{
            if (comment.id === parentId){
                return {
                    ...comment,
                    replies:[...comment.replies,newReply],
                };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    const handleUpvote = (commentId)=>{
        const updatedComments = comments.map((comment)=>{
            if (comment.id === commentId){
                return {
                    ...comment,
                    score:comment.score+1,
                };
            }
            return comment;
        });
        setComments(updatedComments);
    }
    const handleDownvote = (commentId)=>{
        const updatedComments = comments.map((comment)=>{
            if (comment.id === commentId){
                return {
                    ...comment,
                    score:comment.score - 1,

                };

            }
            return comment;
        });
        setComments(updatedComments);
    };
    return (
        <div className='comment-section'>
            <CommentForm onSubmit={addComment}/>
            {comments.map((comment)=>(
                <Comment 
                  key={comment.id}
                  comment={comment}
                  onUpvote={handleUpvote}
                  onDownvote={handleDownvote}
                  onReply={addReply}
                  />
            ))}
        </div>
    );
};

export default CommentSection;