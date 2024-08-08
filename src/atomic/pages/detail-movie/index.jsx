import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getIdYoutube } from "../../../common/utils/getIdYoutube";
import { axiosWithoutAuth } from "../../../services";
import { Card } from "../../atoms/card";
import { layThongTinPhim } from "../../../services/quan-ly-phim";

function DetailMovie() {
  // Lấy thống tin của params
  const params = useParams();
  console.log({ params });

  const [movie, setMovie] = useState(null);

  //   Lấy thống tin của search params
  //   const query = new URLSearchParams(location.search);
  //   console.log(query.get("id"));

  useEffect(() => {
    layThongTinPhim(params.id)
      .then((resp) => {
        setMovie(resp.content);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params.id]);

//   movie.map(i => {})

  if (!movie) return <>(Skeleton) loading...</>;

  return (
    <>
      <iframe
        width={560}
        height={315}
        src={"https://www.youtube.com/embed/" + getIdYoutube(movie.trailer)}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <p>Phim liên quan</p>
      <div className="flex justify-center">
        {[
          {
            maBanner: 1,
            maPhim: 1282,
            hinhAnh:
              "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png",
          },
          {
            maBanner: 2,
            maPhim: 1283,
            hinhAnh:
              "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png",
          },
          {
            maBanner: 3,
            maPhim: 1284,
            hinhAnh:
              "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png",
          },
        ].map((i) => {
          return (
            <Link key={i.maPhim} to={`/movie/${i.maPhim}`}>
              <Card
                className={"w-[20rem]"}
                image={i.hinhAnh}
                name={i.tenPhim}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default DetailMovie;
