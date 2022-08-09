import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menuTitle">
        <div className="menuList">
          {MenuList.map((item, key) => {
            return (
              <MenuItem
                key={key}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
