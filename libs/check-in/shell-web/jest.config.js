module.exports = {
  name: 'check-in-shell-web',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/check-in/shell-web',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
