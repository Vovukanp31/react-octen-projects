import {Routes, Route} from "react-router-dom";

import css from './App.module.css'
import Users from "./pages/users/Users";
import Posts from "./pages/posts/Posts";
import Layout from "./pages/layout/Layout";
import PostDetails from "./pages/postDetails/PostDetails";
import CommentsOfPost from "./pages/commentsOfPost/CommentsOfPost";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<CommentsOfPost/>}/>
                        </Route>

                    </Route>

                    <Route path={'users'} element={<Users/>}>

                    </Route>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
