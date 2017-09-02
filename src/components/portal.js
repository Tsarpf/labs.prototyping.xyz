import subSites from '../data/sub-sites.json'
import Wrapper from './sub-site-wrapper.js'
import ReactLoader from './react-loader.js'

module.exports = subSites.map(site => [
    site.iframe ? Wrapper : ReactLoader,
    site.path,
    site.name,
    site.address
])