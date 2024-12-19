import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  
  name: 'default',
  title: 'LGDA',

  projectId: 'pbg2oc94',
  dataset: 'production',


  schema: {
    types: schemaTypes,
  },
})
