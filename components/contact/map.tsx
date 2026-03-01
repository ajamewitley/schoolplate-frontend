import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { FaBolt } from 'react-icons/fa';

const Map = () => {
  return (
    <section id="map" className="py-16 lg:py-20 bg-card">
      <h2 className="text-3xl text-primary text-center font-bold mb-6">Our Office</h2>
      <div className="grid lg:grid-cols-3 gap-10 items-center">
        <div className="px-6">
          <ul className="space-y-3 lg:space-y-5">
            <li className="flex gap-3">
              <MapPin className="text-amber shrink-0" />
              Address: 123 Unity Avenue, Bastos Yaoundé, Cameroon
            </li>
            <li className="flex gap-3">
              <Phone className="text-amber shrink-0" />
              Phone: +237 6 71 66 85 64
            </li>
            <li className="flex gap-3">
              <Mail className="text-amber shrink-0" />
              Email: darius38130@gmail.com
            </li>
            <li className="flex gap-3">
              <Clock className="text-amber shrink-0" />
              Working hours: 8AM - 6PM
            </li>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.615171136546!2d11.50084059938157!3d3.8816326380551103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfbe019ebd31%3A0x62e5e7078b706413!2sBastos!5e0!3m2!1sen!2scm!4v1771927358220!5m2!1sen!2scm"
          aria-label="map"
          allowFullScreen
          loading="lazy"
          className="w-full h-[33vh] min-h-125 lg:col-span-2"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
