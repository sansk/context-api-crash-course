import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const Parent = () => {
  const [userName, setUserName] = useState("SangyK");

  return (
    <AppContext.Provider>
      <div>
        {userName}
        <Child />
      </div>
    </AppContext.Provider>
  );
};

export const Child = () => {
  return (
    <div>
      <Grandchild1 />
      <Grandchild2 />
    </div>
  );
};

export const Grandchild1 = () => {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <button
        onClick={() => {
          setUserName("SK Technologies");
        }}
      >
        Change Username
      </button>
    </div>
  );
};

export const Grandchild2 = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      {userName}
    </div>
  )
}
