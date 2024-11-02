import bookPic from "./public/books.jpg";
const Bannar = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bookPic} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="font-extrabold text-5xl">Boi Poka Bannar Section</h1>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
