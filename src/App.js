import {Routes, Route} from "react-router-dom";
import Users from "./pages/users/Users";
import Posts from "./pages/posts/Posts";
import Layout from "./pages/layout/Layout";
import PostDetails from "./pages/postDetails/PostDetails";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'/posts'} element={<Posts/>}>
                        <Route path={'/posts/:id'} element={<PostDetails/>}/>
                    </Route>

                    <Route path={'/users'} element={<Users/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
