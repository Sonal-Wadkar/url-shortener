import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shortenurls", token],

    queryFn: async () => {
      const response = await api.get("/api/urls/myurls", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    },

    select: (data) => {
      const sortedData = [...(data.data || [])].sort(
        (a, b) =>
          new Date(b.createdDate) -
          new Date(a.createdDate)
      );

      return sortedData;
    },

    enabled: !!token,

    staleTime: 5000,

    onError: (error) => {
      console.error("My URLs API Error:", error);

      if (onError) {
        onError(error);
      }
    },
  });
};


export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalclick", token],

    queryFn: async () => {
      const response = await api.get(
        "/api/urls/totalClicks?startDate=2024-01-01&endDate=2025-12-31",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response;
    },

    select: (data) => {
      const clickData = data?.data || {};

      const convertToArray = Object.keys(clickData).map(
        (key) => ({
          clickDate: key,
          count: clickData[key],
        })
      );

      return convertToArray;
    },

    enabled: !!token,

    staleTime: 5000,

    onError: (error) => {
      console.error("Total Clicks API Error:", error);

      if (onError) {
        onError(error);
      }
    },
  });
};