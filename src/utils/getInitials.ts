export const getInitials = (name?: string, maxLetters: number = 2): string => {
  if (!name) return "CL";

  const words = name
    .trim()
    .split(" ")
    .filter(Boolean);

  if (words.length === 1) {
    return words[0].substring(0, maxLetters).toUpperCase();
  }

  return words
    .slice(0, maxLetters)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};