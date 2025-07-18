function Location() {
    return (
        <section style={{ padding: '40px 20px', textAlign: 'center', position: "relative", backgroundColor: '#edf3f7' }}>
            <h2 style={{ marginBottom: '20px' }}>Мы находимся:</h2>

            <div style={{ maxWidth: '1000px', margin: '0 auto', }}>
                <iframe
                 title="Google Map"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1453.1676853427966!2d76.8351539569309!3d43.24439262354492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369e5c31e3db5%3A0x3755415992310b45!2sAsia%20Park!5e0!3m2!1sru!2skz!4v1752512887158!5m2!1sru!2skz"
                 width="100%" 
                 height="400"
                 style={{ border: 0, borderRadius: '12px' }}
                 allowfullscreen="" 
                 loading="lazy" 
                 referrerpolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
        </section>
    );
}

export default Location;