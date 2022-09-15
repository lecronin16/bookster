import React, { useState, useEffect } from 'react'
import Post from '../components/Post'
import { useParams, Link } from 'react-router-dom';


export default function SingleReview({ user }) {
    const { reviewId } = useParams()
    const [ review, setReview ] = useState({})

    const getSingleReview = async () => {
        const res = await fetch(`http://localhost:5000/api/reviews/${reviewId}`);
        const data = await res.json();
        if (data.status === 'ok'){
            setPost(data.post)
        }
    };

    useEffect(()=>{
        getSinglePost()
    }, [])

  return (
    <div>
        <Post postInfo = {post}/>


        {post.user_id===user.id?
        <>
            <Link to={`/posts/update/${postId}`}>
                <button>Update</button>
            </Link>
            <button>Delete</button>
        </>
        :
        ''    }
        

    </div>
  )
}