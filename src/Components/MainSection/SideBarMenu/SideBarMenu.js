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

  const [activeAccordion, setActiveAccordion] = useState(null); // Initialize activeAccordion state

  const handleToggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  // Custom PDF label component
  // const PdfLabel = () => (

  //   <span>
  //     PDF <RiArrowDropDownLine />
  //   </span>
  // );
  const Menu = [
    {
      icon: <BsPerson />,
      label: 'Immobilienlex',
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
      title: "PDF"

    },
    {
      icon: <TbBox />,
      label: 'Ratgeber',
      desc: 'Immobilien-Expertenrat für Eigentümer.',
      route: '/page4',
      title: "PDF"
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
                  <span className="menuIcon">{menu?.icon}</span>
                  <div className="d-flex justify-align-content-between">
                    <span className="label">{menu?.label}</span>
                    <div className='mini_box'>
                      {menu.title === "PDF" ?
                        <span className="box" onClick={(e) => {
                          if (menu.title === "PDF" && pathname === menu.route) {
                            handleToggleMenu(e);
                          }
                        }}>
                          {menu?.title}<img src={'/assets/images/sidebaricons/dropArrow.png'} className="img-fluid" alt="" />

                        </span>
                        :
                        <span className="box" onClick={(e) => {
                          if (menu.title !== "PDF" && pathname === menu.route) {
                            handleToggleMenu(e);
                          }
                        }}>
                          {menu?.title}

                        </span>}

                    </div>


                  </div>
                </div>
                <div className='desc'>{menu?.desc}</div>
              </Link>

              {menu?.title === 'PDF' && pathname === menu.route && toggleMenu && (
                <div className="dropDown">
                  <ul className='unOrderList'>
                    < li className='list'>
                      <span >Bewirtschaftung einer Immobilie</span>
                    </li><li className='list'>
                      <span >Bewirtschaftung einer Immobilie</span>
                    </li><li className='list'>
                      <span >Bewirtschaftung einer Immobilie</span>
                    </li><li className='list'>
                      <span >Bewirtschaftung einer Immobilie</span>
                    </li><li className='list'>
                      <span >Bewirtschaftung einer Immobilie</span>
                    </li><li className='list'>
                      <span >Bewirtschaftung einer Immobilie</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* profile */}


        < div class="card_profile" >
          <div class="card_img">
            <img src="/assets/images/profile.png" alt="user-image" />
          </div>
          <div class="card_info">
            <h2>Immotrust AG </h2>
            <p>Vertrauensvolle</p>
            <p> Immobilienberatung seit 2008.</p>
          </div>
          <div className='card_etc'>

            <span>Carlos Kuk - Eigentümer</span>
          </div>
        </div>


        <div className='bottom_text'>
          <span>Impressum & Datenschutzcenter</span>
        </div>
      </div>
    </section>
  );
};

export default SideBarMenu;
