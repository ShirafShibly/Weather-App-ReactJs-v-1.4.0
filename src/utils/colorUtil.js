import Colors from "../constants/Colors";

export function getRandomColorClass() {
  const randomIndex = Math.floor(Math.random() * Colors.length);
  return `color-${randomIndex}`;
}
