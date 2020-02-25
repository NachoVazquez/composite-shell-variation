module.exports = {
  name: 'booking-shell-web',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/shell-web',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
