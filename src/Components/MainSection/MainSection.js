import React from 'react'
import SideBarMenu from './SideBarMenu/SideBarMenu';
import ContentMenu from './ContentMenu/ContentMenu';

const MainSection = () => {
    return (
        <>
            <section>
                {   /* Container here we use */}
                <div className='container'>
                    <div className='row g-0'>


                        {/* side bar menu section  */}

                        <div className='col-lg-3'>
                            <SideBarMenu />
                        </div>


                        {/* content section  */}

                        <div className='col-lg-9'>

                            <ContentMenu />
                        </div>
                    </div>
                </div>

            </section>



        </>
    )
}

export default MainSection;