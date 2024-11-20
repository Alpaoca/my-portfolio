import { useCallback } from "react";

const useLinkNavigation = () => {
  const navigate = useCallback((url) => {
    const processedUrl = url.startsWith("http") ? url : `https://${url}`;
    window.open(processedUrl, "_blank");
  }, []);

  return navigate;
};

export default useLinkNavigation;
