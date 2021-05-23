import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    startPostLoading,
    stopPostLoading,
    setPosts,
    setPostError,

    setComments,
    setCommentsError,
    startCommentsLoading,
    stopCommentsLoading,

    setAlbums,
    startAlbumsLoading,
    setAlbumsError,
    stopAlbumsLoading,

    startTodosLoading,
    setTodos,
    setTodosError,
    stopTodosLoading
} from './redux';

const useSetComments = () => {
    const dispatch = useDispatch();
    return (payload) => dispatch(setComments(payload));

    const fetcher = React.useCallback(
        (payload) => dispatch(setComments(payload)),
        [dispatch()]
    );
    return fetcher;
};


const Todos = () => {
    const data = useSelector(({todos}) => todos);
    const dispatch = useDispatch();

    const todosFetcher = async  () => {
        try{
            dispatch(startTodosLoading());
            const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await resp.json();
            dispatch(setTodos(data));
        }catch (e){
            console.log(e);
            dispatch(setTodosError('failed to fetch data'))
        } finally {
            dispatch(stopTodosLoading());
        }
    };
    React.useEffect(() => {
        todosFetcher();
    },[]);

    if (data.error) {
        return <h2>{data.error}</h2>;
    }    if (data.isTodosLoaing) {
        return <h2>Albums are loading</h2>;
    }

    return (

        <div>
            {data.todos.map(({id, title }) =>
                <h1 key={id}>
                    {id}. {title}
                </h1>
            )}
        </div>
    );
};





const Albums = () => {
    const data = useSelector(({albums}) => albums);
    const dispatch = useDispatch();

    const albumsFetcher = async  () => {
        try{
            dispatch(startAlbumsLoading());
            const resp = await fetch('https://jsonplaceholder.typicode.com/albums')
            const data = await resp.json();
            dispatch(setAlbums(data));
        }catch (e){
            console.log(e);
            dispatch(setAlbumsError('failed to fetch data'))
        } finally {
            dispatch(stopAlbumsLoading());
        }
    };
    React.useEffect(() => {
        albumsFetcher();
    },[]);

    if (data.error) {
        return <h2>{data.error}</h2>;
    }    if (data.isAlbumsLoaing) {
        return <h2>Albums are loading</h2>;
    }

    return (

        <div>
            {data.albums.map(({id, title }) =>
                <h1 key={id}>
                    {id}. {title}
                </h1>
            )}
        </div>
    );
};

const Comments = () => {
    const setComments = useSetComments();
    const data = useSelector(({comments}) => comments);
    const dispatch = useDispatch();

    const commentsFetcher = async  () => {
        try{
            dispatch(startCommentsLoading());
            const resp = await fetch('https://jsonplaceholder.typicode.com/comments')
            const data = await resp.json();
            setComments(data);
        }catch (e){
            console.log(e);
            dispatch(setCommentsError('failed to fetch data'))
        } finally {
            dispatch(stopCommentsLoading());
        }
    };
    React.useEffect(() => {
        commentsFetcher();
    },[]);

    if (data.error) {
        return <h2>{data.error}</h2>;
    }    if (data.isCommentsLoaing) {
        return <h2>Comments are loading</h2>;
    }

    return (

        <div>
            {data.comments.map(({id,name, body }) =>
                <h1 key={id}>
                    {name} - {body}
                </h1>
            )}
        </div>
    );
};

const Posts = () => {
    const data = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const postsFetcher = async  () => {
        try{
           dispatch(startPostLoading());
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await resp.json();
            dispatch(setPosts(data));
        }catch (e){
            console.log(e);
            dispatch(setPostError('failed to fetch data'))
        } finally {
            dispatch(stopPostLoading());
        }
    };
    React.useEffect(() => {
        postsFetcher();
    },[]);

    if (data.error) {
        return <h2>{data.error}</h2>;
    }    if (data.isPostLoaing) {
        return <h2>Posts are loading</h2>;
    }

  return (

      <div>
          {data.posts.map(({id,title, body }) =>
            <h1 key={id}>
                {title} - {body}
            </h1>
          )}
      </div>
  );
};



export default function App() {
  return (
    <div className="App">
      {/*<Posts/>*/}
      {/*<Comments/>*/}
      {/*<Albums/>*/}
      <Todos/>
    </div>
  );
}
