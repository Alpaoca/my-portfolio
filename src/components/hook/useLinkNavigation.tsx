import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useLinkNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = useCallback(
    (url) => {
      if (url.startsWith("http")) {
        window.location.href = url;
      } else {
        navigate(url);
      }
    },
    [navigate]
  );

  return handleNavigation;
};

export default useLinkNavigation;
