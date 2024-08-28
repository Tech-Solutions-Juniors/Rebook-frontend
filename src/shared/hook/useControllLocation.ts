/* eslint-disable react-hooks/exhaustive-deps */
import { IRoute } from "@base/routes/public";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  privateRoutes: IRoute[];
}

const DEFAULT_LOCATION = "/"

export function useControllLocation({ privateRoutes }: Props) {
  const [lastUserLocation, setUserLocation] = useState<string>(DEFAULT_LOCATION);

  const location = useLocation();

  useEffect(() => {
    const findPath = privateRoutes.find((e) => e.route === location.pathname);
    const isPathDiff = location.pathname != lastUserLocation;
    if (isPathDiff && findPath) setUserLocation(location.pathname);
  }, [location]);

  return {
    lastUserLocation,
  };
}
