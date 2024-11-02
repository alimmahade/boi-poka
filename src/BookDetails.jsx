import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const bookData = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const book = bookData.find((book) => book.bookId == id);
  const { bookId: currentBookId, image } = book;
  const handleMarkAsRead = () => {};
  return (
    <div>
      <h2>Book Details {bookId}</h2>
      <img className="w-36" src={image} alt="" />
      <button className="btn btn-outline">Mark as Read</button>
      <button className="btn btn-secondary">Add to Wishlist</button>
    </div>
  );
};

export default BookDetails;
