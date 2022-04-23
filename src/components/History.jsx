const History = ({ history }) => {
  return (
    <div className="history">
      <h3>Purchase History</h3>
      <div>{history.toString()}</div>
    </div>
  );
};

export default History;
