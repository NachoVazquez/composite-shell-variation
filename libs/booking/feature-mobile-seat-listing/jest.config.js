module.exports = {
  name: 'booking-feature-mobile-seat-listing',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/booking/feature-mobile-seat-listing',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
