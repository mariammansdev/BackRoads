import Title from './Title'
import Service from './Service'
import { services } from '../data'

function Services() {
  return (
    <>
     <section className="section services" id="services">
        <Title title='our' subtitle='services'/>
        <div className="section-center services-center">
          {services.map((service) => 
              <Service key={service.id} {...service} />
            )
          }
        </div>
      </section>
    </>
  )
}

export default Services