import { Link } from "react-router-dom";

const Book = ({ bookDetails }) => {
  const { image, bookName, author, bookId } = bookDetails;
  return (
    <Link to={`books/${bookId}`}>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="h-[166px] w-[100px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
