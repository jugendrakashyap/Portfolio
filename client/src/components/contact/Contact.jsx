import './contact.css'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

function Contact() {
    const position = [28.6139, 77.2090]; // New Delhi

    return (
        <div id='Contact'>
            <div className='maps-container' style={{ height: "450px", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden" }}>
                <iframe
                    className='maps'
                    src="https://maps.google.com/maps?q=28.6552361,77.2297823&z=12&t=k&output=embed"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sacramento Map"
                ></iframe>
            </div>
            <div className='contact_box'>
                <h1>Contact Form</h1>
                <form className='contact_form' action="">
                    <div className='input_boxes'>
                        <input type="text" placeholder='Full name' />
                        <input type="email" name="" id="" placeholder='Email' />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>
                    <button className='send_btn'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact