import css from './App.module.css';
import Header from "./components/header/Header";
import UsersOrPosts from "./components/usersOrPosts/UsersOrPosts";
import UserOrPostDetails from "./components/userOrPostDetails/UserOrPostDetails";
import AllUserPostsOrComments from "./components/allUserPostsOrComments/AllUserPostsOrComments";

function App() {
    return (
        <div className="App">
            <Header/>

            <div className={css.mainPart}>

                <UsersOrPosts/>

                <div>
                    <UserOrPostDetails/>
                    <AllUserPostsOrComments/>
                </div>

            </div>
        </div>
    );
}

export default App;
