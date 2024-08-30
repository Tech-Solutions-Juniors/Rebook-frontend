/* eslint-disable react-hooks/exhaustive-deps */
import { IRoute } from "@base/@types/route";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  privateRoutes: IRoute[];
  token: string | null;
}

const DEFAULT_LOCATION = "/";

export function useControllLocation({ privateRoutes, token }: Props) {
  const [lastUserLocation, setUserLocation] =
    useState<string>(DEFAULT_LOCATION);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const findPath = privateRoutes.find((e) => e.route === location.pathname);
    if (!token && findPath) {
        setUserLocation(location.pathname);
        navigate("/signin");
      }
  }, [location, token]);

  return {
    lastUserLocation,
  };
}
