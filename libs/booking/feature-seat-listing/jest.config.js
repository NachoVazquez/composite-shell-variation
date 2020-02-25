module.exports = {
  name: 'booking-feature-seat-listing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/feature-seat-listing',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
