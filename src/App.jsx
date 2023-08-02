import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Categories from "./categories/Categories";
import Content from "./Content";
import ProductView from "./productView/ProductView";
import Products from "./products/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Content />,
      children: [
        {
          path: "product/:id",
          element: <ProductView />
        },
        {
          path: "products/",
          element: <Products />
        },
        {
          path: "categories/",
          element: <Categories />
        },
        {
          path: "products/:category",
          element: <>category</>
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
