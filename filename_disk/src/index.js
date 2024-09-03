import ModuleComponent from './module.vue'

export default {
  id: 'custom',
  name: 'Custom',
  icon: 'box',
  filename,
  type,
  folder,
  filenameDisk,
  metadata,
  routes: [
    {
      path: '/drl',
      component: ModuleComponent
    }
  ]
}

// class Models {
//   // Your existing code goes here

//   async uploadFile (filename, type, folder, metadata = []) {
//     const domain = process.env.DOMAIN || 'example.com'

//     const filenameDisk = formatUrl(domain, filename)

//     const fileId = await directus.files.uploadFile(
//       filename,
//       type,
//       folder,
//       filenameDisk,
//       metadata
//     )

//     return fileId
//   }
// }
