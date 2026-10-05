/**
 * =====================================================================
 * OUR LITTLE CORNER OF TIME — MEMORY MAP ENGINE (Leaflet.js)
 * =====================================================================
 */

class MemoryMap {
  constructor(placesData) {
    this.places = placesData || [];
    this.map = null;
    this.markers = [];
    this.activePlaceId = null;
  }

  init() {
    const mapContainer = document.getElementById('leaflet-map');
    if (!mapContainer || this.places.length === 0) return;

    // Check if Leaflet L is available
    if (typeof L === 'undefined') {
      this.renderFallbackGrid(mapContainer);
      return;
    }

    try {
      // Average coordinate for center
      const defaultCenter = this.places[0].coordinates || [40.7128, -74.0060];

      this.map = L.map('leaflet-map', {
        center: defaultCenter,
        zoom: 12,
        scrollWheelZoom: false,
        attributionControl: false
      });

      // CartoDB Positron / Muted Voyager Tile Layer with warm sepia aesthetic
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd'
      }).addTo(this.map);

      const bounds = [];

      this.places.forEach((place) => {
        if (!place.coordinates) return;

        bounds.push(place.coordinates);

        // Custom pulsing warm-gold pin icon
        const customIcon = L.divIcon({
          className: 'custom-pin-wrapper',
          html: `<div class="custom-leaflet-pin" data-id="${place.id}" title="${place.name}">
                   <span>✦</span>
                 </div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });

        const marker = L.marker(place.coordinates, { icon: customIcon }).addTo(this.map);

        marker.on('click', () => {
          this.openMemoryModal(place);
          this.highlightChip(place.id);
        });

        this.markers.push({ id: place.id, marker, place });
      });

      if (bounds.length > 1) {
        this.map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
      }

      this.renderPlacesChips();
    } catch (err) {
      console.warn('Leaflet initialization skipped:', err);
      this.renderFallbackGrid(mapContainer);
    }
  }

  renderFallbackGrid(container) {
    container.innerHTML = `
      <div style="padding: 40px; text-align: center; color: var(--text-dark-secondary);">
        <p style="font-family: var(--font-serif-display); font-size: 1.3rem; margin-bottom: 8px;">Places That Became Ours</p>
        <p style="font-size: 0.9rem; color: var(--text-dark-muted);">Click any location below to open our memories from there.</p>
      </div>
    `;
    this.renderPlacesChips();
  }

  renderPlacesChips() {
    const strip = document.getElementById('places-chips-strip');
    if (!strip) return;

    strip.innerHTML = '';
    this.places.forEach((place, idx) => {
      const chip = document.createElement('button');
      chip.className = `place-chip-btn ${idx === 0 ? 'active' : ''}`;
      chip.setAttribute('data-place-id', place.id);
      chip.innerHTML = `
        <span>📍</span>
        <strong>${place.name}</strong>
        <span class="chip-tag">• ${place.tag}</span>
      `;

      chip.addEventListener('click', () => {
        this.selectPlace(place);
      });

      strip.appendChild(chip);
    });
  }

  selectPlace(place) {
    this.highlightChip(place.id);

    if (this.map && place.coordinates) {
      this.map.flyTo(place.coordinates, 14, {
        duration: 1.2
      });
    }

    this.openMemoryModal(place);
  }

  highlightChip(placeId) {
    document.querySelectorAll('.place-chip-btn').forEach((btn) => {
      if (btn.getAttribute('data-place-id') === placeId) {
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        btn.classList.remove('active');
      }
    });
  }

  openMemoryModal(place) {
    const overlay = document.getElementById('memory-card-modal');
    if (!overlay) return;

    const modalImg = document.getElementById('modal-card-image');
    const modalDate = document.getElementById('modal-card-date');
    const modalTag = document.getElementById('modal-card-tag');
    const modalTitle = document.getElementById('modal-card-title');
    const modalText = document.getElementById('modal-card-text');
    const modalNote = document.getElementById('modal-card-note');

    if (modalImg) {
      modalImg.onerror = () => { modalImg.src = 'assets/images/fallback.svg'; };
      modalImg.src = place.photo || 'assets/images/fallback.svg';
    }
    if (modalDate) modalDate.textContent = place.date || '';
    if (modalTag) modalTag.textContent = place.tag || '';
    if (modalTitle) modalTitle.textContent = place.name || '';
    if (modalText) modalText.textContent = place.whatHappened || '';
    if (modalNote) modalNote.textContent = `“${place.personalNote || ''}”`;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeMemoryModal() {
    const overlay = document.getElementById('memory-card-modal');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
}

window.MemoryMap = MemoryMap;
