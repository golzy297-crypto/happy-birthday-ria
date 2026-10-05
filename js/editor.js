/**
 * =====================================================================
 * OUR LITTLE CORNER OF TIME — IN-BROWSER CUSTOMIZER / MEMORY EDITOR
 * =====================================================================
 */

class MemoryEditor {
  constructor(data, onUpdateCallback) {
    this.data = data;
    this.onUpdate = onUpdateCallback;
    this.storageKey = 'our_corner_of_time_birthday_data';
  }

  init() {
    this.loadFromStorage();
    this.bindDrawerEvents();
  }

  loadFromStorage() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        Object.assign(this.data.couple, parsed.couple || {});
        const todayObj = this.data.chapter10_today || this.data.chapter8_today;
        if (parsed.finalLetter && todayObj && todayObj.finalLetter) {
          Object.assign(todayObj.finalLetter, parsed.finalLetter);
        }
      }
    } catch (e) {
      console.warn('Could not read custom data from storage', e);
    }
  }

  bindDrawerEvents() {
    const trigger = document.getElementById('customizer-trigger');
    const overlay = document.getElementById('customizer-overlay');
    const closeBtn = document.getElementById('customizer-close');
    const saveBtn = document.getElementById('customizer-save');
    const copyBtn = document.getElementById('customizer-copy-json');
    const resetBtn = document.getElementById('customizer-reset');

    if (trigger && overlay) {
      trigger.addEventListener('click', () => {
        this.populateFields();
        overlay.classList.add('open');
      });
    }

    if (closeBtn && overlay) {
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('open');
      });
    }

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('open');
        }
      });
    }

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        this.saveFields();
        overlay.classList.remove('open');
        if (this.onUpdate) this.onUpdate();
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        this.copyConfigToClipboard();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset all personalized text back to default values?')) {
          localStorage.removeItem(this.storageKey);
          location.reload();
        }
      });
    }
  }

  populateFields() {
    const herName = document.getElementById('edit-her-name');
    const myName = document.getElementById('edit-my-name');
    const herAge = document.getElementById('edit-her-age');
    const metDate = document.getElementById('edit-met-date');
    const metLocation = document.getElementById('edit-met-location');
    const letterBody = document.getElementById('edit-letter-body');

    if (herName) herName.value = this.data.couple.herName || '';
    if (myName) myName.value = this.data.couple.myName || '';
    if (herAge) herAge.value = this.data.couple.herAge || 23;
    if (metDate) metDate.value = this.data.howItStarted.metDate || '';
    if (metLocation) metLocation.value = this.data.howItStarted.metLocation || '';
    const todayObj = this.data.chapter10_today || this.data.chapter8_today;
    if (letterBody) {
      letterBody.value = (todayObj && todayObj.finalLetter) 
        ? todayObj.finalLetter.body 
        : '';
    }
  }

  saveFields() {
    const herName = document.getElementById('edit-her-name')?.value.trim();
    const myName = document.getElementById('edit-my-name')?.value.trim();
    const herAge = parseInt(document.getElementById('edit-her-age')?.value) || 23;
    const letterBody = document.getElementById('edit-letter-body')?.value;
    const todayObj = this.data.chapter10_today || this.data.chapter8_today;

    if (herName) {
      this.data.couple.herName = herName;
      if (todayObj && todayObj.birthdayWish) {
        todayObj.birthdayWish.headline = `Happy Birthday, ${herName}.`;
      }
    }
    if (myName) this.data.couple.myName = myName;
    if (herAge) this.data.couple.herAge = herAge;
    if (letterBody && todayObj && todayObj.finalLetter) {
      todayObj.finalLetter.body = letterBody;
      todayObj.finalLetter.salutation = `Dear ${herName || 'Rhea'},`;
      todayObj.finalLetter.signature = myName || 'Dhruv';
    }

    const payload = {
      couple: this.data.couple,
      finalLetter: todayObj ? todayObj.finalLetter : {}
    };

    localStorage.setItem(this.storageKey, JSON.stringify(payload));
  }

  copyConfigToClipboard() {
    const code = `// Updated memoryData.js configuration\nconst memoryData = ${JSON.stringify(this.data, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) module.exports = memoryData;\nif (typeof window !== 'undefined') window.memoryData = memoryData;`;
    navigator.clipboard.writeText(code).then(() => {
      alert('✓ Configuration copied to clipboard! You can paste it into data/memoryData.js');
    }).catch(() => {
      prompt('Copy this updated JSON:', code);
    });
  }
}

window.MemoryEditor = MemoryEditor;
