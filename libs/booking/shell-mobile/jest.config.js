module.exports = {
  name: 'booking-shell-mobile',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/shell-mobile',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
