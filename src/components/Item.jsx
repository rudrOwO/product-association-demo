const Item = ({ itemID, setCheckedItems }) => {
  return (
    <div className="item">
      <input
        className="checker"
        type="checkbox"
        onChange={e => {
          setCheckedItems(prev =>
            e.target.checked ? [...prev, itemID] : prev
          );
        }}
      />
      <span className="item-text">Item {itemID}</span>
    </div>
  );
};

export default Item;
