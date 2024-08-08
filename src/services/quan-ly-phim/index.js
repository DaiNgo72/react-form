import { axiosWithoutAuth } from "../axios.config";

export const layThongTinPhim = (id) => {
  return axiosWithoutAuth({
    method: "get",
    url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
  });
};
