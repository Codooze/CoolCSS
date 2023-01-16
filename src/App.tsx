import { GridView } from "./gridImgView/GridView";
import { GridImgGallery } from "./gridImgGallery/GridImgGallery";
import { CardUI } from "./cardUI/CardUI";

import "./app.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [gridView, setGridView] = useState<boolean>(false);

  const handleGridView = () => {
    setGridView(!gridView);
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className={gridView ? "mainGrid" : ""}>
          <GridView />
          <GridImgGallery />
          <button id="mainGrid__Button" onClick={handleGridView}>
            Toggle Grid View
          </button>
        </div>
        <CardUI />
      </QueryClientProvider>
    </>
  );
}

export default App;
