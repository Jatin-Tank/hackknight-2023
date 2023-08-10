import styles from "./styles.module.css";
import Navbar from "../Navbar/Navbar";
import LevelCard from "../LevelCard/LevelCard";
import CircularNavbar from "../CircularNavbar/CircularNavbar";

const Home = () => {


    return (
        <div className={styles.main_container}>
            <Navbar home="Home" profile="Profile" expenses="Expenses" />

            {/* <CircularNavbar /> */}
            {/* <nav className={styles.navbar}>
                <h1>facebook</h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav> */}

            <LevelCard />
        </div>
    );
};

export default Home;