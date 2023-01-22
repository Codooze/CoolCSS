import { GridView } from "./gridImgView/GridView";
import { GridImgGallery } from "./gridImgGallery/GridImgGallery";
import { CardUI } from "./cardUI/CardUI";
import { Button1 } from "./buttons/Button1";
import { Netflix } from "./netflixCopy/Netflix";

import "./app.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { GridHas } from "./gridHas/GridHas";

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
          <GridHas />
          <CardUI />
          <Button1 handleClick={handleGridView} />
        </div>
        <Netflix />
      </QueryClientProvider>
    </>
  );
}

export default App;
