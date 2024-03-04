import React from "react";
import NavBar from "./components/NavBar";
function App() {
  const [data, setData] = React.useState([]);
  const [content, setContent] = React.useState([]);
  async function getData() {
    try {
      await fetch("https://course-api.com/react-tabs-project")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setContent(data[0]);
          if (data.length > 0) {
            const companies = document.querySelectorAll(".btn");
            companies[0].classList.add("active");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    getData();
  }, []);

  function selectJob(index) {
    setContent(data[index]);
  }
  function selected(event) {
    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i] === event.target
        ? buttons[i].classList.add("active")
        : buttons[i].classList.remove("active");
    }
  }

  return (
    <main>
      <NavBar
        data={data}
        selectJob={selectJob}
        selected={selected}
        content={content}
      />
    </main>
  );
}
export default App;
