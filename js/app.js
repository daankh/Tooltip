document.addEventListener('DOMContentLoaded', function () {
    var tooltips = document.querySelectorAll('.tooltip')

    tooltips.forEach(tooltip => {

        tooltip.addEventListener('mouseover', function () {
            var tooltipEl = document.createElement('span')
            tooltipEl.classList.add('tooltipText')
            tooltipEl.innerText = tooltip.dataset.text
            tooltip.appendChild(tooltipEl)
        })

        tooltip.addEventListener('mouseout', function () {
            this.removeChild(this.querySelector('.tooltipText'))
        })
    })
})