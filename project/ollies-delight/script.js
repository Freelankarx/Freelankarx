document.addEventListener('DOMContentLoaded', function() {

  // Hero thumbnail click - change hero background
  (function(){
    const main = document.getElementById('hero-main');
    const thumbs = document.querySelectorAll('.hero-thumbs img');
    if (!thumbs || thumbs.length === 0) return;
    thumbs.forEach(t => t.addEventListener('click', () => {
      const src = t.dataset.full || t.src;
      if (main) main.style.backgroundImage = `url('${src}')`;
      thumbs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
    }));
  })();

  // Gallery click -> WhatsApp message
  (function(){
    const galleryImgs = document.querySelectorAll('#gallery .card img');
    galleryImgs.forEach(img => {
      img.addEventListener('click', () => {
        const text = `Hi! I like this design (${img.alt}). Can I get a quote?`;
        const link = `https://wa.me/14372439010?text=${encodeURIComponent(text)}`;
        window.open(link, '_blank');
      });
    });
  })();

  // Order form -> build message to WhatsApp
  (function(){
    const form = document.getElementById('orderForm');
    if (!form) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const phone = data.get('phone') || '';
      const date = data.get('date') || '';
      const pickup = data.get('pickup_or_delivery') || '';
      const details = data.get('details') || '';
      const message = `Hi Ollies Delight! I'd like to order.\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nPickup/Delivery: ${pickup}\nDetails: ${details}`;
      const wa = `https://wa.me/14372439010?text=${encodeURIComponent(message)}`;
      window.open(wa, '_blank');
      // mobile-friendly notice
      setTimeout(()=>{ try { form.reset(); } catch(e){} }, 500);
    });
  })();

});