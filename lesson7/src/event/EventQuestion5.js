import { useState } from "react";
import "./EventQ5.css";
export default function EventQuestion5() {
  const menuList = [
    { id: 1, icon: "Ai ", name: "" },
    { id: 2, icon: "Md ", name: "" },
    { id: 3, icon: "Im ", name: "" },
    { id: 4, icon: "Ai ", name: "" },
    { id: 5, icon: "Vs ", name: "" },
    { id: 6, icon: "Fa ", name: "" },
    { id: 7, icon: "Bs ", name: "" },
    { id: 8, icon: "Bi ", name: "" },
    { id: 9, icon: "Ai ", name: "" },
  ];
  const [listMenu, setListMenu] = useState(menuList);
  const [widthMain, setWidthMain] = useState("50px");
  const [widthLink, setWidthLink] = useState("0px");
  const handleHover = () => {
    const menusUpdate = [
      { id: 1, icon: "Ai ", name: "Dashboard" },
      { id: 2, icon: "Md ", name: "Stars Components" },
      { id: 3, icon: "Im ", name: "Forms" },
      { id: 4, icon: "Ai ", name: "Pages" },
      { id: 5, icon: "Vs ", name: "Graphs and Statistics" },
      { id: 6, icon: "Fa ", name: "Quotes" },
      { id: 7, icon: "Bs ", name: "Tables" },
      { id: 8, icon: "Bi ", name: "Maps" },
      { id: 9, icon: "Ai ", name: "Documents" },
    ];
    setListMenu(menusUpdate);
    setWidthMain("250px");
    setWidthLink("230px");
  };
  const handleLeave = () => {
    setListMenu(menuList);
    setWidthMain("50px");
    setWidthLink("0px");
  };
  return (
    <div className="container">
      <div>
        <nav
          className="main-menu"
          style={{ width: widthMain }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <ul className="nav-menu">
            {listMenu.map((menu) => {
              return (
                <li key={menu.id} className="nav-items">
                  <a href="#" className="nav-link" style={{ width: widthLink }}>
                    <i
                      style={{
                        display: "inline-block",
                        textAlign: "center",
                        width: "30px",
                      }}
                    >
                      {menu.icon}
                    </i>{" "}
                    <span style={{ paddingLeft: "10px" }}>{menu.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
