// Made for 67: Working with multiple JSX slots
export default function Tabs({ children, buttons, ButtonsContainer }) {
  //   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
