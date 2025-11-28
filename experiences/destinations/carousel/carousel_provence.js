'use strict';

class CarouselProvence {
  constructor(el) {
    this.el = el;
    this.carouselData = [
      { id: '1', src: '../../images/provence/provence3.jpg' },
      { id: '2', src: '../../images/provence/provence2.jpg' },
      { id: '3', src: '../../images/provence/provence1.jpg' },
      { id: '4', src: '../../images/provence/provence5.jpg' },
      { id: '5', src: '../../images/provence/provence4.jpg' }
    ];
    this.items = [];
    this.current = Math.floor(this.carouselData.length / 2);
    this.carouselContainer = null;
  }

  mounted() {
    this.setupCarousel();
    this._keyHandler = (e) => {
      if (e.key === 'ArrowLeft') this.previous();
      if (e.key === 'ArrowRight') this.next();
    };
    document.addEventListener('keydown', this._keyHandler);
    window.addEventListener('resize', () => this.updatePositions());
  }

  setupCarousel() {
    const container = document.createElement('div');
    container.className = 'carousel-container';
    container.style.position = 'relative';
    container.style.height = '100%';
    this.carouselContainer = container;

    this.carouselData.forEach((imgData, i) => {
      const img = document.createElement('img');
      img.src = imgData.src;
      img.alt = `image-${imgData.id}`;
      img.className = 'carousel-item';
      img.dataset.index = i;
      img.style.position = 'absolute';
      img.style.left = '50%';
      img.style.top = '50%';
      img.style.transform = 'translate(-50%, -50%)';
      img.style.cursor = 'pointer';

      img.addEventListener('click', () => {
        const idx = Number(img.dataset.index);
        if (idx !== this.current) {
          this.current = idx;
          this.updatePositions();
        }
      });

      container.appendChild(img);
      this.items.push(img);
    });

    this.el.innerHTML = '';
    this.el.appendChild(container);
    this.setControls();
    this.updatePositions();
  }

  setControls() {
    const controls = document.createElement('div');
    controls.className = 'carousel-controls';
    controls.style.position = 'absolute';
    controls.style.top = '50%';
    controls.style.left = '0';
    controls.style.width = '100%';
    controls.style.display = 'flex';
    controls.style.justifyContent = 'space-between';
    controls.style.transform = 'translateY(-50%)';
    controls.style.pointerEvents = 'none';

    const btnPrev = document.createElement('button');
    btnPrev.innerHTML = '&#10094;';
    btnPrev.style.pointerEvents = 'auto';
    btnPrev.addEventListener('click', () => this.previous());

    const btnNext = document.createElement('button');
    btnNext.innerHTML = '&#10095;';
    btnNext.style.pointerEvents = 'auto';
    btnNext.addEventListener('click', () => this.next());

    controls.appendChild(btnPrev);
    controls.appendChild(btnNext);
    this.el.appendChild(controls);
  }

  updatePositions() {
    const n = this.items.length;
    const center = this.current;
    const width = this.carouselContainer.offsetWidth;
    const spacing = Math.round(width * 0.35);

    this.items.forEach((itm, i) => {
      let diff = i - center;
      if (diff > n / 2) diff -= n;
      if (diff < -n / 2) diff += n;

      itm.style.pointerEvents = 'auto';
      itm.style.transition = 'transform 420ms cubic-bezier(.2,.8,.2,1), opacity 300ms ease';

      if (diff === 0) {
        itm.style.transform = `translate(-50%, -50%) translateX(0px) translateY(-8px) scale(1.06) rotateY(0deg)`;
        itm.style.zIndex = 60;
        itm.style.opacity = '1';
      } else if (Math.abs(diff) === 1) {
        const sign = diff > 0 ? 1 : -1;
        itm.style.transform = `translate(-50%, -50%) translateX(${sign * spacing}px) translateY(0) scale(0.92) rotateY(${-10 * sign}deg)`;
        itm.style.zIndex = 40;
        itm.style.opacity = '0.95';
      } else if (Math.abs(diff) === 2) {
        const sign = diff > 0 ? 1 : -1;
        itm.style.transform = `translate(-50%, -50%) translateX(${sign * spacing * 1.9}px) translateY(4px) scale(0.78) rotateY(${-18 * sign}deg)`;
        itm.style.zIndex = 20;
        itm.style.opacity = '0.7';
        itm.style.pointerEvents = 'none';
      } else {
        const sign = diff > 0 ? 1 : -1;
        itm.style.transform = `translate(-50%, -50%) translateX(${sign * spacing * 3.2}px) translateY(8px) scale(0.6)`;
        itm.style.zIndex = 5;
        itm.style.opacity = '0';
        itm.style.pointerEvents = 'none';
      }
    });
  }

  previous() {
    this.current = (this.current - 1 + this.items.length) % this.items.length;
    this.updatePositions();
  }

  next() {
    this.current = (this.current + 1) % this.items.length;
    this.updatePositions();
  }
}

document.querySelectorAll('.carousel').forEach(el => {
  const carousel = new CarouselProvence(el);
  carousel.mounted();
});
