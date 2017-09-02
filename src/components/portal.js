import subSites from '../data/sub-sites.json'
import Wrapper from './sub-site-wrapper.js'

module.exports = subSites.map(site => [
    Wrapper,
    site.path,
    site.name,
    site.address
])
