import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  basePath: '/studio',

  name: 'default',
  title: 'PigeonDev Portfolio',

  projectId: 'nm9nhxds',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
