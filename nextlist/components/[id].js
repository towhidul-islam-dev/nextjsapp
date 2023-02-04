const url = "https://jsonplaceholder.typicode.com/posts";

export const getStaticPaths = async () => {
    const res = await fetch(url);
    const data = await res.json();

    const paths = data.map(identity => {
        const {id} = identity;
        return {
            params: {id: id.toString()}
        }
    })

    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async (context) => {
    const {id} = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();

    return{
        props: {nextList : data}
    }
} 

const TodoId = ({nextList}) => {
    return ( 
        <div className="text-orange-700">
            <h2>{nextList.title}</h2>
            <h2>{nextList.body}</h2>
        </div>
     );
}
 
export default TodoId;