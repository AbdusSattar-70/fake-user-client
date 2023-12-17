import HomeDecorator from "./HomeDecorator";

const Home = () => {
  return (
    <section>
      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
        <HomeDecorator />
      </div>
    </section>
  );
};

export default Home;
