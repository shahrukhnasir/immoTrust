import React from 'react';
import "../Header/HeaderStyles.css";
import Image from 'next/image';
const Header = () => {
    return (
        <>
            <header>
                <div className="w-100 d-flex justify-content-center  gradient-radial-background" id="header">
                    <div className="col-12 d-flex max-width px-4 px-xxl-0">
                        <div className="col-12 d-flex flex-row-reverse flex-lg-row justify-content-between align-items-center py-3">
                            <div className="col-4 d-flex justify-content-end justify-content-lg-start ">
                                <a href="" className="h-auto d-none d-md-block" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
                                    <svg data-name="Component 8 – 6" width="38" height="20.968" viewBox="0 0 38 20.968" className="hamburger-menu">
                                        <rect className="hamburger-line-1" data-name="Rectangle 290" width="2.968" height="28" transform="translate(28) rotate(90)" fill="#fff"></rect>
                                        <rect className="hamburger-line-2" data-name="Rectangle 348" width="2.968" height="31" transform="translate(38 9) rotate(90)" fill="#fff"></rect>
                                        <rect data-name="Rectangle 349" width="2.968" height="38" transform="translate(38 18) rotate(90)" fill="#fff"></rect>
                                        <rect className="hamburger-line-3" data-name="Rectangle 347" width="2.968" height="28" transform="translate(61) rotate(90)" fill="#fff"></rect>
                                    </svg>
                                </a>
                                <a href="" className="h-auto d-block d-md-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenuMobile" aria-controls="offcanvasMenu">
                                    <svg data-name="Component 8 – 6" width="38" height="20.968" viewBox="0 0 38 20.968" className="hamburger-menu">
                                        <rect className="hamburger-line-1" data-name="Rectangle 290" width="2.968" height="28" transform="translate(28) rotate(90)" fill="#fff"></rect>
                                        <rect className="hamburger-line-2" data-name="Rectangle 348" width="2.968" height="31" transform="translate(38 9) rotate(90)" fill="#fff"></rect>
                                        <rect data-name="Rectangle 349" width="2.968" height="38" transform="translate(38 18) rotate(90)" fill="#fff"></rect>
                                        <rect className="hamburger-line-3" data-name="Rectangle 347" width="2.968" height="28" transform="translate(61) rotate(90)" fill="#fff"></rect>
                                    </svg>
                                </a>
                            </div>
                            <div className="col-auto col-md-4 d-flex justify-content-start justify-content-lg-center">
                                <a href="" className="d-flex justify-content-start">
                                    <Image src={'/assets/images/Immo-Logo-white.svg'} alt="" className="main-logo" width={200} height={100}/>
                                </a>
                            </div>
                            <div className="col-4 d-none d-lg-flex d-flex justify-content-end align-iitems-center" style={{display:'flex',alignItems:'center'}}>
                                <a href="" className="pe-3" target="_blank">
                                    <img src={'/assets/images/linkedin-icon.svg'} alt="" className="" />
                                </a>
                                <a href="" className="pe-3" target="_blank">
                                    <img src={'/assets/images/instagram-icon.svg'} alt="" className="" />
                                </a>
                                <a href="" className="color-white ps-">
                                    <span className="website_name">KONTAKT</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            
            </header>
        </>
    )
}

export default Header;
