const DEVICES_MAP = {
  laptop: { from: 1025, to: 1200 },
  tablet: { from: 768, to: 1024 },
  mobile: { from: 0, to: 767 },
};

export const getDevice = () => {
  const { innerWidth } = window;
  return (
    Object.keys(DEVICES_MAP).find((device) => {
      const { from, to } = DEVICES_MAP[device];
      return innerWidth >= from && innerWidth <= to;
    }) || "all"
  );
};
