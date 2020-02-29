module.exports = {
  name: 'shared-utils-transloco-config',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/utils-transloco-config',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
