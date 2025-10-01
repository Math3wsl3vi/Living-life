export const getYouTubeVideoId = (url: string): string | null => {
  const regex = /[?&]v=([^&#]*)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};