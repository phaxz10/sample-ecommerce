type Props = {
  children: React.ReactNode[];
};

const ShopCardsContainer = ({ children }: Props) => {
  return (
    <div className="shop_cards_container">
      <div className="shop_card_container flex-1 md:max-w-[33%]">
        {children[0]}
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        <div className="shop_card_container col-span-full">{children[1]}</div>

        <div className="flex gap-4 flex-col md:flex-row col-span-full">
          <div className="shop_card_container">{children[2]}</div>
          <div className="shop_card_container">{children[3]}</div>
        </div>
      </div>
    </div>
  );
};

export default ShopCardsContainer;
