module.exports = {
  name: 'check-in-feature-check-in',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/check-in/feature-check-in',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
