import styles from "./styles.module.css";
import Navbar from "../Navbar/Navbar";
import LevelCard from "../LevelCard/LevelCard";

const Home = () => {


    return (
        <div className={styles.main_container}>
            <Navbar home="Home" hindi="Hindi Quiz" english="English Quiz"/>

            <LevelCard />
        </div>
    );
};

export default Home;