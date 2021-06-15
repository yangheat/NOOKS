export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }

      runCb(true);
    }
  };

  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (element.current.msExitFullscreen) {
      document.current.msExitFullscreen();
    } else if (document.current.mozmsExitFullscreen) {
      document.current.mozmsExitFullScreen();
    } else if (document.current.webkitmsExitFullscreen) {
      document.current.webkitmsExitFullscreen();
    } else if (document.current.msExitFullscreen) {
      document.current.msmsExitFullscreen();
    }

    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
