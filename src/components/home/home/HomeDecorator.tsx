import { Link } from "react-router-dom";
import bgImg from "../../../assets/bg.jpg";

const HomeDecorator = () => {
  return (
    <section className="pt-5">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <h1 className="font-bold text-2xl sm:text-3xl">
              Unleash Testing Possibilities Generate Seamless Fake Data for
              Comprehensive Testing
            </h1>
            <p className="text-sm">
              Your Gateway to Consistent Test Scenarios. Same seed, same data,
              and tailored errors for robust testing.
            </p>
            <Link to={"/users"} className="btn btn-primary mt-4">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDecorator;
