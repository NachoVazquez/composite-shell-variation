module.exports = {
  name: 'airline-mobile-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/airline-mobile-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
