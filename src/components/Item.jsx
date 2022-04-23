const Item = ({ itemID, setCheckedItems }) => {
  return (
    <span className="item">
      <input
        className="checker"
        type="text"
        onChange={e => {
          setCheckedItems(e.target.value);
        }}
      />
    </span>
  );
};

export default Item;
