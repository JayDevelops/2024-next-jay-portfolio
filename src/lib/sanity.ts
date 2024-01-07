import {createClient} from 'next-sanity'

const projectId: string = "bkirb3we"
const dataset: string = "production"
const apiVersion: string = "2023-01-01"



export const client = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion,
    useCdn: true,
})