import { useQuery } from "@tanstack/react-query";
import {getAllRegions, getRegionList, getSingleRegion} from "../api/region";

const getRegionListHook = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: ["get", "regions"],
    queryFn: getRegionList,
  });
};

const useGetSingleRegionHook = (region:string) => {
  return useQuery({
    queryKey: ["get", "single",region],
    queryFn: () => getSingleRegion(region),
  });
};

const useGetAllRegions = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: ["get", "all"],
    queryFn: getAllRegions,
  });
};

export const useRegion = () => {
  return {
    getRegionListHook,
    useGetSingleRegionHook,
    useGetAllRegions,
  };
};
