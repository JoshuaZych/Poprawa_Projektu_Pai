const ResetButton = (props) => {
  const { onResetClicked } = props;
  return <button onClick={onResetClicked}>Reset</button>;
};
export default ResetButton;
