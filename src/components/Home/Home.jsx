import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.Home} mt-[-50px] flex h-screen items-center justify-center`}>
      <div className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
        <h1>
          <span className="text-green-700">Minecraft </span>
          Helper Tools
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-800">
          Find what you need with these helper tools.
        </p>
        <div className={styles.btn_group}>
          <a className="btn btn-primary" href="/chunkfind" rel="noreferrer">Chunk Finder</a>
          <a className="btn btn-primary" href="/portallink" rel="noreferrer">Portal Linker</a>
        </div>
      </div>
    </div>
  );
};

export default Home;