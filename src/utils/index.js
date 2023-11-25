export const openLinkInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
export const downloadResume = () => {
  window.open(
    "https://drive.google.com/file/d/1YLEbzo1KAVXPXTlWV2aLhYweS9gf-Xq3/view?usp=sharing",
    "_blank"
  );
};
