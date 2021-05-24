import Button from './Button';

const ButtonPanel = () => {
  const groups = {
    group1: ['AC', '+/-', '%', '÷'],
    group2: ['7', '8', '9', 'x'],
    group3: ['4', '5', '6', '-'],
    group4: ['1', '2', '3', '+'],
    group5: ['0', '.', '='],
  };

  return (
    <>
      {
        Object.keys(groups).map((groupName) => (
          <div key={groupName}>
            {groups[groupName].map((value) => <Button key={value} name={value} />)}
          </div>
        ))
      }
    </>
  );
};

export default ButtonPanel;
