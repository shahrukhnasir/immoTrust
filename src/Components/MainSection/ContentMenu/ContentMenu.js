"use client"
import React from 'react'
import "../ContentMenu/ContentMenuStyles.css"
import SliderCard from '@/Components/SliderCard/SliderCard'
import CommanButton from '@/Components/CommanButton/CommanButton'
import Slider from 'react-slick'
// // Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ContentMenu = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section className='right_section'>

        <div className='top_secion'>
          <div className="slider-container">

            <Slider {...settings}>
              <div>
                <SliderCard
                  title="Immobilien im Scheidungsfall"
                  description="Bei Scheidung Immobilien gerecht aufteilen und rechtliche Fallstricke sicher vermeiden."
                  image={'/assets/images/hear-icon.png'}
                  icon={'/assets/images/play-icon.png'} />
              </div>
              <div>
                <SliderCard
                  title="Immobilien im Scheidungsfall"
                  description="Bei Scheidung Immobilien gerecht aufteilen und rechtliche Fallstricke sicher vermeiden."
                  image={'/assets/images/hear-icon.png'}
                  icon={'/assets/images/play-icon.png'} />
              </div>
              <div>
                <SliderCard
                  title="Immobilien im Scheidungsfall"
                  description="Bei Scheidung Immobilien gerecht aufteilen und rechtliche Fallstricke sicher vermeiden."
                  image={'/assets/images/hear-icon.png'}
                  icon={'/assets/images/play-icon.png'} />
              </div>
              <div>
                <SliderCard
                  title="Immobilien im Scheidungsfall"
                  description="Bei Scheidung Immobilien gerecht aufteilen und rechtliche Fallstricke sicher vermeiden."
                  image={'/assets/images/hear-icon.png'}
                  icon={'/assets/images/play-icon.png'} />
              </div>
              <div>
                <SliderCard
                  title="Immobilien im Scheidungsfall"
                  description="Bei Scheidung Immobilien gerecht aufteilen und rechtliche Fallstricke sicher vermeiden."
                  image={'/assets/images/hear-icon.png'}
                  icon={'/assets/images/play-icon.png'} />
              </div>
              <div>
                <SliderCard
                  title="Immobilien im Scheidungsfall"
                  description="Bei Scheidung Immobilien gerecht aufteilen und rechtliche Fallstricke sicher vermeiden."
                  image={'/assets/images/hear-icon.png'}
                  icon={'/assets/images/play-icon.png'} />
              </div>
              <div>
                <SliderCard
                  title="Immobilien im Scheidungsfall"
                  description="Bei Scheidung Immobilien gerecht aufteilen und rechtliche Fallstricke sicher vermeiden."
                  image={'/assets/images/hear-icon.png'}
                  icon={'/assets/images/play-icon.png'} />
              </div>
              <div>
                <SliderCard
                  title="Immobilien im Scheidungsfall"
                  description="Bei Scheidung Immobilien gerecht aufteilen und rechtliche Fallstricke sicher vermeiden."
                  image={'/assets/images/hear-icon.png'}
                  icon={'/assets/images/play-icon.png'} />
              </div>
            </Slider>
          </div>

        </div>




        <section className='content_section'>
          {/* Content 1st sec */}

          <div className='d-flex'>
            <span className='rounded_circl'>
              E
            </span>

            <span className='main_dec'>
              Ich werde in 4 Wochen geschieden, bin 54 Jahre alt, männlich, und wir besitzen gemeinsam ein Haus im Wert von 3.4 Millionen CHF. Was steht mir zu?
            </span>
          </div>
          {/* line  */}
          <hr />

          {/* Cookie Section */}
          <div className='d-flex'>
            <span className='cookie_icon'>
              <img src={'/assets/images/half-cookie.png'} alt='half-cookie' />
            </span>

            <span className='description'>
              Es ist wichtig zu wissen, dass bei einer Scheidung in der Schweiz die Vermögensteilung und die Zuteilung des ehelichen Heims stark von den spezifischen Umständen abhängig sind. Allgemein gesagt, wird bei einer Scheidung das Vermögen, das während der Ehe erworben wurde (das sogenannte Errungenschaftsbeteiligung), zwischen den beiden Parteien aufgeteilt. Das Heim, in dem wir zusammen gelebt haben, gehört zu diesem Vermögen und wird also unter Umständen im Rahmen dieser Teilung berücksichtigt.
            </span>
          </div>



          {/* Cookie Section */}
          <div className='d-flex py-4'>
            <span className='cookie_icon'></span>

            <span className='description'>
              Es ist wichtig zu wissen, dass bei einer Scheidung in der Schweiz die Vermögensteilung und die Zuteilung des ehelichen Heims stark von den spezifischen Umständen abhängig sind. Allgemein gesagt, wird bei einer Scheidung das Vermögen, das während der Ehe erworben wurde (das sogenannte Errungenschaftsbeteiligung), zwischen den beiden Parteien aufgeteilt. Das Heim, in dem wir zusammen gelebt haben, gehört zu diesem Vermögen und wird also unter Umständen im Rahmen dieser Teilung berücksichtigt.
            </span>
          </div>
          {/* Line  */}
          <hr />




          {/* Content 1st sec */}

          <div className='d-flex py-4'>
            <span className='rounded_circl'>
              E
            </span>

            <span className='main_dec'>
              Gibt es eine Möglichkeit, dass meine Frau und ich zu einer Einigung finden, die uns beiden zugutekommt? Falls nicht, wie kann ich mich am besten schützen?
            </span>
          </div>
          {/* line  */}
          <hr />

          {/* Cookie Section */}
          <div className='d-flex'>
            <span className='cookie_icon'>
              <img src={'/assets/images/half-cookie.png'} alt='half-cookie' />
            </span>

            <span className='description'>
              Es ist wichtig zu wissen, dass bei einer Scheidung in der Schweiz die Vermögensteilung und die Zuteilung des ehelichen Heims stark von den spezifischen Umständen abhängig sind. Allgemein gesagt, wird bei einer Scheidung das Vermögen, das während der Ehe erworben wurde (das sogenannte Errungenschaftsbeteiligung), zwischen den beiden Parteien aufgeteilt. Das Heim, in dem wir zusammen gelebt haben, gehört zu diesem Vermögen und wird also unter Umständen im Rahmen dieser Teilung berücksichtigt.
            </span>
          </div>



          {/* Cookie Section */}
          <div className='d-flex py-4'>
            <span className='cookie_icon'></span>

            <span className='description'>
              Es ist wichtig zu wissen, dass bei einer Scheidung in der Schweiz die Vermögensteilung und die Zuteilung des ehelichen Heims stark von den spezifischen Umständen abhängig sind. Allgemein gesagt, wird bei einer Scheidung das Vermögen, das während der Ehe erworben wurde (das sogenannte Errungenschaftsbeteiligung), zwischen den beiden Parteien aufgeteilt. Das Heim, in dem wir zusammen gelebt haben, gehört zu diesem Vermögen und wird also unter Umständen im Rahmen dieser Teilung berücksichtigt.
            </span>
          </div>
          {/* Line  */}
          <hr />


          <div className='d-flex py-4'>
            <span className='rounded_circl'>
              E
            </span>
            <span className='main_dec'>
              Ich werde in 4 Wochen geschieden, bin 54 Jahre alt, männlich, und wir besitzen gemeinsam ein Haus im Wert von 3.4 Millionen CHF. Was steht mir zu?
            </span>
          </div>
        </section>

        {/* text write section Start✌  */}

        <div className='d-flex px-5'>

          <input
            type="email"
            className="form-control inputField"
            placeholder='Geben sie hier ihre Nachricht ein....'

          />

          <CommanButton label="Anfrage Absenden" icon={'/assets/images/arrow-icon.png'} />

        </div>

        <hr />


        {/* text write section✌ */}

        {/* footer section  */}
        <div className='pb-3'>

          <div className='d-flex justify-content-center align-items-center'>
            <span className='brand_name'>
              Bereitgestellt von
            </span>
            <span className='mx-2'>
              <img src={"/assets/images/dotwebLogo.png"} alt="" />
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContentMenu;