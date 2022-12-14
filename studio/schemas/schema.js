// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas

// object schemas
import blockContent from './object/blockContent'
import menuItem from './object/menuItem'
import socialLink from './object/socialLink'
import accessibleImage from './object/accessibleImage'

// document schemas
import category from './document/category'
import post from './document/post'
import author from './document/author'
import event from './document/event'
import siteSettings from './document/siteSettings'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    event,
    siteSettings,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    menuItem,
    socialLink,
    accessibleImage,
  ]),
})
