const ReviewListItem = ({ author, content }) => {
  return (
    <li>
      <h2>
        Author: <span>{author}</span>
      </h2>
      <p>{content}</p>
    </li>
  );
};

export default ReviewListItem;
