class ChloroplethMap {
    /**
     * Class constructor with basic chart configuration
     * @param {Object}
     * @param {Array}
     */
    constructor(_config, _dispatcher, _data) {
        // Configuration object with defaults
        this.config = {
            parentElement: _config.parentElement,
            colorScale: _config.colorScale,
            containerWidth: _config.containerWidth,
            containerHeight: _config.containerHeight,
            margin: { top: 50, right: 25, bottom: 40, left: 50 },
        }
        this.initVis()
    }

    /**
     * Initialize scales/axes and append static elements, such as axis titles
     */
    initVis() {
        let vis = this

    }

    updateVis() {
        let vis = this

        vis.renderVis()
    }

    /**
     * Bind data to visual elements
     */
    renderVis() {
        let vis = this
    }
}
