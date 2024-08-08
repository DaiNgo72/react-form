import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../../../common/hooks";
import { Card } from "../../atoms/card";

function ShowingMovie() {
  const [listMovie, setListMovie] = useState([]);

  useTitle("Phim Đang Chiếu");

  useEffect(() => {
    (async () => {
      const data = await axios({
        method: "get",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNzUwNDAwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM3NjUxNjAwfQ.nl0s6U9TVtfCtNNz9yMfG6ZupTn18NciJE96XGDOTmQ",
        },
      });

      setListMovie(data.data.content.filter((i) => i.dangChieu));
    })();
  }, []);

  return (
    <>
      <div className="flex justify-center gap-4 mt-4">
        {listMovie.map((i,index) => {
          return (
            <>
              <Link to={`/movie/${i.maPhim}`}>
                <Card image={i.hinhAnh} name={i.tenPhim} />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ShowingMovie;
