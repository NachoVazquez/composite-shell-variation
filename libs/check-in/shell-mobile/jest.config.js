module.exports = {
  name: 'check-in-shell-mobile',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/check-in/shell-mobile',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
