import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { UserTemplate } from "../atomic/templates/user";
import { axiosWithoutAuth } from "../services";

// import Movie from "../atomic/pages/movie";
// import Anime from "../atomic/pages/anime";

// Lazy load
const Movie = lazy(() => import("../atomic/pages/movie"));
const Anime = lazy(() => import("../atomic/pages/anime"));
const ShowingMovie = lazy(() => import("../atomic/pages/showing-movie"));
const Home = lazy(() => import("../atomic/pages/home"));
const ComingMovie = lazy(() => import("../atomic/pages/coming-movie"));
const DetailMovie = lazy(() => import("../atomic/pages/detail-movie"));

{
  /* <UserTemplate>
  <ShowingMovie />
</UserTemplate> */
}

// /showing-movie/1
{
  /* <UserTemplate>
  <ShowingMovie>
    <>Component 1</>
  </ShowingMovie>
</UserTemplate> */
}
const comingLoader = async () => {
  const data = await axiosWithoutAuth({
    method: "get",
    url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
  });

  return data;
};

export const router = createBrowserRouter([
  {
    path: "",
    element: <UserTemplate />,
    errorElement: <>Oops 2</>,
    children: [
      {
        index: true,
        // path: '',
        element: <Home />,
      },
      {
        path: "showing-movie",
        element: <ShowingMovie />,
      },
      {
        path: "coming-movie",
        element: <ComingMovie />,
        loader: comingLoader,
      },

      {
        // params: truyền được một tham số
        path: "movie/:id",
        element: <DetailMovie />,
        errorElement: <>Oops 1</>,
        loader: ({ params }) => {
          console.log(params);
        },
      },

      {
        // search params: truyền được nhiều tham số
        // movie?id=123&q=456
        // path: "movie",
        // element: <DetailMovie />,
      },
    ],
  },

  {
    path: "admin",
    element: <>Admin</>,
    children: [
      {
        path: "create-user",
        element: "",
      },
      {
        path: "delete-user",
        element: "",
      },
    ],
  },

  {
    path: "movie",
    element: (
      // Đợi page của chúng ta tải xong rồi mới sử dụng để render.
      // fallback: render tạm thời khi page chưa tải xong
      <Suspense fallback={<>Loading....</>}>
        <Movie />
      </Suspense>
    ),
  },

  {
    path: "tv-series",
    element: <>tv-series</>,
  },

  {
    path: "anime",
    element: (
      <Suspense fallback={<>Loading....</>}>
        <Anime />
      </Suspense>
    ),
  },

  {
    path: "*",
    // C1: Custom Page Not Found
    element: <>Not Found</>,

    // C2: Mong muốn chuyển về trang home
    // element: <Navigate to={"/"} replace />,
  },
]);
