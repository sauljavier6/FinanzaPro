// src/utils/dateHelpers.ts

import dayjs from "./dayjs";

const formatRelativeTime = (
  date?: string | Date | null
): string => {
  if (!date) return "-";

  return dayjs(date)
    .tz("America/Tijuana")
    .fromNow();
};

export default formatRelativeTime;