
import { useState , useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([
       { _id: "1",
        image: "https://images.unsplash.com/photo-1654888995860-f498304748a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D ",
       caption: 'Beautiful sunset at the beach!' 
}
    ])
    //fetch posts from the backend when the component mounts
    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            setPosts(res.data.posts)
        })
    },[])   
        
//render the posts in the feed
  return (
    <section className="feed-section">
      {
        posts.length > 0 ? (
            posts.map(post => (
                <div key={post._id} className="post-card">
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))
        ) : (
            <p>No posts available.</p>
        )

      }
    </section>
  )
}

export default Feed
