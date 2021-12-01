import { Tooltip } from '../../../../../../../../../Downloads/bootstrap-5.0.2'

window.addEventListener('load', () => {
  [].concat(...document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    .map(tooltipNode => new Tooltip(tooltipNode))
})
