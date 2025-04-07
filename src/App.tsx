import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Honda", "Audi", "Mustang", "Jaguar", "Benz"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cars"
        onSelectItem={handleSelectItem}
      />
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>SPORTS CARS</Alert>
        )}
        <Button onClick={() => setAlertVisible(true)}>Button</Button>
      </div>
    </div>
  );
}

export default App;
