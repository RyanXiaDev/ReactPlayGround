import "./UItest.css"
const UItest = () => {
  const person = {
    name: 'Ryan'
  }
  return (
    <>
      <h3 className={`${person.name}`}>UI test</h3>

    </>
  );
};

export default UItest;
