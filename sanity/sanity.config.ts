import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'Developer Portfolio',

  projectId: 'bkirb3we',
  dataset: 'production',

  plugins: [
      deskTool(),
    vercelDeployTool(),
    visionTool(),
    ...(isDev ? devOnlyPlugins : [])
  ],

  schema: {
    types: schemaTypes,
  },
})

