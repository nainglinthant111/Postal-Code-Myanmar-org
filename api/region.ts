import { axiosInstance } from "../utils/axiosInstance";

export const getRegionList = async () => {
  try {
    const res = await axiosInstance.get("/", {
      params: {
        region: "01",
      },
    });
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getSingleRegion = async (region: string) => {
  try {
    const res = await axiosInstance.get(`?region=${region}`)
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getAllRegions = async () => {
  try {
    const res = await axiosInstance.get(`/regions`)
    return res.data.data;
  } catch (e) {
    throw e;
  }
};