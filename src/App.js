import css from './App.module.css'
import Users from "./components/users/Users";
import UserDetails from "./components/userDetails/UserDetails";
import Posts from "./components/posts/Posts";
import {useState} from "react";
import {postService} from "./services/post.service"

function App() {

   const [user, setUser] = useState(null);

   const [posts, setPosts] = useState(null)

    const chooseUser = (user) => {
      setUser(user);
      setPosts([]);
    }

    const getUserId = (id) => {
postService.getByUserId(id).then(value => {
setPosts(value.data);
})
    }

    return (
        <div className="App">
            <div className={css.usersContainer}>
                <Users chooseUser={chooseUser}/>
                {
                    user && <UserDetails user={user} getUserId={getUserId}/>
                }
            </div>
            {
              posts &&  <Posts posts={posts}/>
            }
        </div>
    );
}

export default App;
