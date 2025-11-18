// Hero thumbnail click -> update hero image
(function(){
  const main = document.getElementById('hero-main');
  const thumbs = document.querySelectorAll('.hero-thumbs img');
  thumbs.forEach(t => t.addEventListener('click', ()=>{
    const src = t.dataset.full || t.src;
    if(main) main.style.backgroundImage = `url('${src}')`;
    thumbs.forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
  }));
})();

// Gallery clicks -> open WhatsApp with prefilled message
(function(){
  const galleryImgs = document.querySelectorAll('#gallery .card img');
  galleryImgs.forEach(img => img.addEventListener('click', ()=>{
    const text = `Hi! I like this design (${img.alt}). Can I get a quote?`;
    const link = `https://wa.me/14372439010?text=${encodeURIComponent(text)}`;
    window.open(link,'_blank');
  }));
})();

// Order form submit -> open WhatsApp with summary
(function(){
  const form = document.getElementById('orderForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')||'';
    const phone = data.get('phone')||'';
    const date = data.get('date')||'';
    const pickup = data.get('pickup_or_delivery')||'';
    const details = data.get('details')||'';
    const message = `Hi Ollies Delight! I'd like to order.\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nPickup/Delivery: ${pickup}\nDetails: ${details}`;
    const wa = `https://wa.me/14372439010?text=${encodeURIComponent(message)}`;
    window.open(wa,'_blank');
    alert('We opened WhatsApp with your order summary. If WhatsApp didn\'t open, please message +1 (437) 243-9010 manually.');
    form.reset();
  });
})();

// Small accessibility: enable keyboard focus styles
(function(){
  document.body.addEventListener('mousedown', ()=>document.body.classList.add('using-mouse'));
})();