import { createBrowserRouter } from "react-router-dom";
import { Template } from "../atomic/templates/template";
import { Form } from "../atomic/pages/form";
import { Product } from "../atomic/pages/product";

// Chỉnh sửa để cho 2 page sử dụng chung template
export const router = createBrowserRouter([
  {
    path: "",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Product />,
      },
      {
        path: "create",
        element: <Form />,
      },
    ],
  },
]);
