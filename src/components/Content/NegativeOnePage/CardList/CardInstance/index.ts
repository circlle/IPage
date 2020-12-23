import Calendar from "./Calendar";
import Power from "./Power";
import Gallery from "./Gallery";

export type CardInstance = {
  appId: number;
  component: React.FC;
};
const CardInstanceList: CardInstance[] = [
  { appId: 1, component: Calendar },
  { appId: 2, component: Power },
  { appId: 3, component: Gallery },
];

export default CardInstanceList;
