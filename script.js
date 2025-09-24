document.addEventListener('DOMContentLoaded', function () {
  // ==========================
  // Firebase Initialization
  // ==========================
  const firebaseConfig = {
    apiKey: "AIzaSyAvgEkGU9xizy_XFg-aGD7NnkvtDBdGBtA",
    authDomain: "freelankarx-portfolio.firebaseapp.com",
    projectId: "freelankarx-portfolio",
    storageBucket: "freelankarx-portfolio.firebasestorage.app",
    messagingSenderId: "966215425239",
    appId: "1:966215425239:web:237a699174bfa98b006492",
    measurementId: "G-702ZQ97XWP"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // ==========================
  // Sidebar Toggle (Mobile Nav)
  // ==========================
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('closeBtn');

  if (hamburger && sidebar && closeBtn) {
    hamburger.addEventListener('click', () => {
      sidebar.style.left = "0";
    });

    closeBtn.addEventListener('click', () => {
      sidebar.style.left = "-250px";
    });

    // Close sidebar if clicked outside
    window.addEventListener('click', (e) => {
      if (e.target !== sidebar && e.target !== hamburger && !sidebar.contains(e.target)) {
        sidebar.style.left = "-250px";
      }
    });
  }
  /* Overlay sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


  // ==========================
  // Section Reveal on Scroll
  // ==========================
  const sections = document.querySelectorAll('.section');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => revealObserver.observe(section));

  // ==========================
  // GSAP Animations (Hero + Socials)
  // ==========================
  gsap.from('.hero-content h1', { opacity: 0, y: -50, duration: 1.5, ease: 'power2.out' });
  gsap.from('.hero-content p', { opacity: 0, y: 50, duration: 1.5, delay: 0.3, ease: 'power2.out' });
  gsap.from('.btn', { opacity: 0, scale: 0.8, duration: 1.5, delay: 0.6, ease: 'back.out(1.7)' });

  const socialLinks = document.querySelectorAll('.social-icons a');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => gsap.to(link, { scale: 1.2, duration: 0.3 }));
    link.addEventListener('mouseleave', () => gsap.to(link, { scale: 1, duration: 0.3 }));
  });

  // ==========================
  // Reviews (Firestore + Cloudinary Upload)
  // ==========================
  const reviewForm = document.getElementById('reviewForm');
  const reviewsContainer = document.getElementById('reviewsContainer');

  async function uploadVideoToCloudinary(file) {
    const cloudName = "dflqyatre";
    const unsignedPreset = "freelankarx portfolio";
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", unsignedPreset);

    try {
      const response = await fetch(url, { method: "POST", body: formData });
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading video:", error);
      return "";
    }
  }

  if (reviewForm) {
    reviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = reviewForm.name.value;
      const reviewText = reviewForm.review.value;
      const rating = reviewForm.rating.value;
      const videoFile = reviewForm.video.files[0];

      let videoURL = "";
      if (videoFile) {
        videoURL = await uploadVideoToCloudinary(videoFile);
      }

      await db.collection('reviews').add({
        name,
        review: reviewText,
        rating,
        videoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      reviewForm.reset();
      loadReviews();
    });
  }

  function loadReviews() {
    if (!reviewsContainer) return;
    reviewsContainer.innerHTML = "";
    db.collection('reviews').orderBy('timestamp', 'desc').get().then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `
          <h4>${data.name}</h4>
          <p>${data.review}</p>
          <p>⭐ ${data.rating} / 5</p>
          ${data.videoURL ? `<video controls src="${data.videoURL}" width="300"></video>` : ""}
          <button class="delete-btn" data-id="${doc.id}">Delete</button>
        `;
        reviewsContainer.appendChild(reviewDiv);
      });
      document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          db.collection('reviews').doc(btn.getAttribute('data-id')).delete().then(loadReviews);
        });
      });
    });
  }
  loadReviews();

  // ==========================
  // Portfolio Modal
  // ==========================
  const modal = document.getElementById('portfolioModal');
  const modalImg = document.getElementById('modalImage');
  const closeModal = document.getElementById('closeModal');

  if (modal && modalImg && closeModal) {
    document.querySelectorAll('.portfolio-item img').forEach(img => {
      img.addEventListener('click', function () {
        modal.style.display = 'flex';
        modalImg.src = this.src;
      });
    });
    closeModal.addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }

  // ==========================
  // Video Upload Validation + Preview
  // ==========================
  const videoInput = document.querySelector('input[name="videoFile"]');
  if (videoInput) {
    videoInput.addEventListener('change', function (event) {
      const file = event.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('video/')) {
        alert("Please upload a valid video file.");
        event.target.value = "";
        return;
      }
      const url = URL.createObjectURL(file);
      const preview = document.createElement('video');
      preview.src = url;
      preview.controls = true;
      preview.style.maxWidth = "100%";
      const parent = event.target.parentNode;
      const existing = parent.querySelector('video');
      if (existing) existing.remove();
      parent.appendChild(preview);
    });
  }
});

