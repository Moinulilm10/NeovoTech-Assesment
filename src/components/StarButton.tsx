import { AppContext } from "@/pages/_app";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { useContext } from "react";

const StartButton = () => {
  const { state, setState } = useContext(AppContext);
  const router = useRouter();

  return (
    <section className="buttonSection">
      <button
        onClick={() => {
          setState({
            ...state,
            started: true,
            playing: true,
          });
          router.push("/city-finder");
        }}
      >
        Start Game
      </button>
    </section>
  );
};

export default StartButton;
