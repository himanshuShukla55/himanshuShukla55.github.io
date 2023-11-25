export const openLinkInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
export const downloadResume = () => {
  window.open(
    "https://drive.google.com/file/d/1dOS5zZS1u3-qwoBuQe5-q2VNAKJXVjzA/view?usp=drive_link",
    "_blank"
  );
};
