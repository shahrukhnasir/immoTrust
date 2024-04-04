'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import '../SideBarMenu/SideBarStyles.css';
import { BsCalendar2Check, BsPerson } from 'react-icons/bs';
import { SlLock } from 'react-icons/sl';
import { TbBox, TbCrown } from 'react-icons/tb';
import { TfiHeart } from 'react-icons/tfi';
import { RiArrowDropDownLine } from "react-icons/ri";

const SideBarMenu = () => {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  // Custom PDF label component
const PdfLabel = () => (

  <span>
    PDF <RiArrowDropDownLine />
  </span>
);
  const Menu = [
    {
      icon: <BsPerson />,
      label: 'Immobilienlexikon',
      desc: 'Immobilienwissen für alle Fälle.',
      route: '/page1',
      title: 'KI'
    },
    {
      icon: <SlLock />,
      label: 'Preisschätzung',
      desc: 'Den Wert Ihres Hauses schätzen lassen.',
      route: '/page2',
      title: 'LINK'
    },
    {
      icon: <BsCalendar2Check />,
      label: 'Checklisten',
      desc: 'Praktische Checklisten für jeden Schritt.',
      route: '/page3',
      title: <PdfLabel/> 

    },
    {
      icon: <TbBox />,
      label: 'Ratgeber',
      desc: 'Immobilien-Expertenrat für Eigentümer.',
      route: '/page4',
      title: <PdfLabel/>
    },
    {
      icon: <TbCrown />,
      label: 'Mandatsnavigator',
      desc: 'Verständlich zum Verkaufsabschluss.',
      route: '/page5',
      title: 'KI'
    },
    {
      icon: <TfiHeart />,
      label: 'Wohntraumfinder',
      desc: 'Zum Traumheim mit KI-Unterstützung.',
      route: '/page6',
      title: 'KI'
    },
  ];

  return (
    <section className="side_menu_section">
      <div className="inner_section">
        <div className="top">
          <span style={{ alignContent: 'center' }}>
            <img src={'/assets/images/shiningStar.png'} className="img-fluid" alt="" />
          </span>
          <span className="rounded_box">
            <small className="smallText"> NACHTMODUS</small>
          </span>
        </div>
        <div className="d-flex justify-content-center">
          <img src={'/assets/images/Immo-Logo-dark.png'} className="img-fluid w-50" alt="" />
        </div>
        <div className="sideBarMenu">
          {Menu.map((menu, i) => (
            <div key={i} className={pathname === menu.route ? 'active' : ''}>
              <Link href={menu.route}>
                <div className="sidemenu">
                  <div className="d-flex">
                    <span className="menuIcon">{menu?.icon}</span>
                    <span className="label">{menu?.label}</span>
                    <span className="box" onClick={(e) => {
                      if (menu.title === <PdfLabel/> && pathname === menu.route) {
                        handleToggleMenu(e);
                      }
                    }}>{menu?.title}</span>
                  </div>
                  <div className='desc'>{menu?.desc}</div>
                  {menu?.title === 'PDF' && pathname === menu.route && toggleMenu && (
                    <div className="dropdown-content show">
                      <ul>
                        <li>
                          <a href="/page1">KI</a>
                        </li>
                        <li>
                          <a href="/page2">LINK</a>
                        </li>
                        <li>
                          <a href="/page3">PDF</a>
                        </li>
                        <li>
                          <a href="/page4">PDF</a>
                        </li>
                        <li>
                          <a href="/page5">PDF</a>
                        </li>
                        <li>
                          <a href="/page6">PDF</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBarMenu;
