import { withFederation, shareAll } from '@angular-architects/module-federation/rspack'

export default withFederation({
  options: {

    name: 'host',

    exposes: {
      './Component': './src/app/app.component.ts',
    },

    shared: {
      ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    },

  },
  skip: [
    // Add the names of packages, entrypoints 
    // and libs you don't want to share here
    // Strings are compared with ===

    // Examples:
    // 'rxjs/ajax'
    // p => p.startsWith('rxjs/ajax')
    // /^rxjs\/ajax/
  ]
});
