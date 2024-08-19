const previews = [
  {
    "file": "Oxxo",
    "preview": "assets/brands/Oxxo.png"
  },
  {
    "file": "Mabe",
    "preview": "assets/brands/mabe.png"
  },
  {
    "file": "SonyMusic",
    "preview": "assets/brands/SonyMusic.png"
  },
  {
    "file": "Conair",
    "preview": "assets/brands/Conair.png"
  },
  {
    "file": "Cuisinart",
    "preview": "assets/brands/Cuisinart.png"
  },
  {
    "file": "Moet-Chandon",
    "preview": "assets/brands/Moet.png"
  },
  {
    "file": "Svelty",
    "preview": "assets/brands/Svelty.png"
  },
  {
    "file": "Taurus",
    "preview": "assets/brands/Taurus.png"
  },
  {
    "file": "Toyota",
    "preview": "assets/brands/Toyota.png"
  },
  {
    "file": "Nestea",
    "preview": "assets/brands/Nestea.png"
  },
  {
    "file": "Coronado.png",
    "preview": "assets/brands/Coronado.png"
  },
  {
    "file": "Anahuac",
    "preview": "assets/brands/Anahuac.png"
  },
  {
    "file": "LaSalle",
    "preview": "assets/brands/LaSalle.png"
  },
  {
    "file": "Ibero",
    "preview": "assets/brands/Ibero.png"
  },
  {
    "file": "Skiny",
    "preview": "assets/brands/Skiny.png"
  },
  {
    "file": "Optima",
    "preview": "assets/brands/Optima.png"
  },
  {
    "file": "Puppy&Co",
    "preview": "assets/brands/PuppyCo.png"
  },
  {
    "file": "Merz",
    "preview": "assets/brands/Merz.png"
  },
  {
    "file": "Top&Bottoms",
    "preview": "assets/brands/TopAndBottoms.png"
  },
  {
    "file": "MusicTech",
    "preview": "assets/brands/MusicTech.png"
  },
  {
    "file": "Azimut",
    "preview": "assets/brands/Azimut.png"
  },
]
document.addEventListener('DOMContentLoaded', () => {
  const imageContainer = document.getElementById('imageContainer');

  previews.forEach(preview => {
    const wrapper = document.createElement('div');
    wrapper.className = 'imageWrapper';

    const imgElement = document.createElement('img');
    imgElement.src = preview.preview;
    imgElement.alt = preview.file;

    wrapper.appendChild(imgElement);
    imageContainer.appendChild(wrapper);
  });
});