module.exports = {
  name: 'check-in-feature-ticket-finder',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/check-in/feature-ticket-finder',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
