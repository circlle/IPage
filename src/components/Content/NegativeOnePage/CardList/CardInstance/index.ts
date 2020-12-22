import Calendar from "./Calendar";

export type CardInstance = {
  appId: number;
  component: React.FC;
};
const CardInstanceList: CardInstance[] = [{ appId: 1, component: Calendar }];

export default CardInstanceList;
