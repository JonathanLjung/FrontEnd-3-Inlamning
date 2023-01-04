import ShoeList from "../components/ShoeList";
import useFetch from "../components/useFetch";

const Home = () => {
  const {
    data: shoes,
    isPending,
    error,
  } = useFetch("http://localhost:3001/shoes");

  return (
    <div className="Home">
      {error && <div> {error}</div>}
      {isPending && <div class="loading">Laddar...</div>}
      {shoes && <ShoeList shoes={shoes} title="Alla skor" />}
    </div>
  );
};

export default Home;
