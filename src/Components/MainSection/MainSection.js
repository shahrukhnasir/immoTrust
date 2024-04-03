import React from 'react'
import SideBarMenu from './SideBarMenu/SideBarMenu';
import ContentMenu from './ContentMenu/ContentMenu';

const MainSection = () => {
    return (
        <>
            <section>
                {   /* Container here we use */}
                <div className='container'>
                    <div className='row'>


                        {/* side bar menu section  */}

                        <div className='col-lg-4'>
                            <SideBarMenu />
                        </div>


                        {/* content section  */}

                        <div className='col-lg-8'>

                            <ContentMenu />
                        </div>
                    </div>
                </div>

            </section>



        </>
    )
}

export default MainSection;