import React, { useReducer } from "react";
import { Header, Mask } from "../../common";
import CardList from "./CardList";
import Search from "./Search";
import type { CardState } from "./CardList";

export type Action = DeleteAction;
export type DeleteAction = { type: "delete"; payload: { appId: number } };
const reducer = (state: CardState, action: Action): CardState => {
  switch (action.type) {
    case "delete": {
      return {
        cardList: state.cardList.filter(
          (card) => card.appId !== action.payload.appId
        ),
      };
    }
    default: {
      return { ...state };
    }
  }
};
const initialState: CardState = {
  cardList: [
    { appId: 1, themeColor: "cyan" },
    { appId: 2, themeColor: "cyan" },
    { appId: 3, themeColor: "cyan" },
  ],
};
const NegativeOnePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="nagative-one-page">
      <Mask>
        <div style={{ transform: "translateZ(10px)" }}>
          <Header color="#666" />
        </div>
        <Search />
        <CardList cardState={state} />
      </Mask>
    </div>
  );
};

export default NegativeOnePage;
