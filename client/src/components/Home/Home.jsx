import styles from "./styles.module.css";
import Navbar from "../Navbar/Navbar";

const Home = () => {


    return (
        <div className={styles.main_container}>
            <Navbar home="Home" profile="Profile" expenses="Expenses" />
            {/* <nav className={styles.navbar}>
                <h1>facebook</h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav> */}
        </div>
    );
};

export default Home;