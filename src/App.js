import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>
  };
} 

function App() {
  return (
    <div>
      <Welcome name ="Sara" />
      <Welcome name ="Argen" />
      <Welcome name ="Arsen" />
    </div>
  );
}

export default App;
