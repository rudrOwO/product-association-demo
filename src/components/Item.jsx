const Item = ({ itemID }) => {
  return (
    <div className="item">
      <input className="checker" type="checkbox" />
      <span className="item-text">Item {itemID}</span>
    </div>
  );
};

export default Item;
