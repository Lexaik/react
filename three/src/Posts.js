import Post from './Post';
function Posts(props) {
    return (
        <div>
            {
            props.posts.map(post=>(
                <Post
                    key={post.id}
                name ={post.name}
                    title={post.title}
                    id={post.id}
                    removePost={post.removePost}
                />
            ))
            }
        </div>
    )
}
export default Posts;