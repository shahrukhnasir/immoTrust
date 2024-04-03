import React from 'react'
import "../ContentMenu/ContentMenuStyles.css"
import SliderCard from '@/Components/SliderCard/SliderCard'
const ContentMenu = () => {
  return (
    <>
      <section>

        <div className='top_secion'>

          <SliderCard 
          title="Immobilien im Scheidungsfall"
           description="Bei Scheidung Immobilien gerecht aufteilen und rechtliche Fallstricke sicher vermeiden." 
           image={'/assets/images/hear-icon.png'}
           icon={'/assets/images/play-icon.png'} />

        </div>

      </section>


















    </>
  )
}

export default ContentMenu