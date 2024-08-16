class GuidedEnergyConfigCard extends HTMLElement {
  setConfig(config) {
      this.config = config;
      this.render();
  }

  render() {
      this.innerHTML = `
          <ha-card>
              <div class="card-content">
                  ${this.createStepsHtml(this.config.steps)}
              </div>
          </ha-card>
      `;
  }

  createStepsHtml(steps) {
    return steps.map(step => `
      <div class="step">
        <h2>${step.title}</h2>
        <p>${step.description}</p>
        <div class="options">
          ${step.options.map(option => `
            <button class="option-button" ${option.url ? `onclick="window.location.href='${option.url}'"` : ''}>
              ${option.name}
            </button>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  set hass(hass) {
      // Handle state updates
  }
}

customElements.define("guided-energy-config-card", GuidedEnergyConfigCard);
