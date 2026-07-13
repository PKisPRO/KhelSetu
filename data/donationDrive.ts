// Photos from KhelSetu's first donation drive (July 2026).
// Curated from public/donationdriveimages — exact duplicate files and
// unusable shots (blurred, backs to camera, empty frames) are excluded.
// All images are landscape (1600x1200 or 1600x900).

const selected = [
  '001', '002', '004', '005', '006', '007', '008', '009', '010', '011',
  '012', '013', '015', '018', '019', '020', '024', '034', '035', '038',
  '039', '042', '043', '044', '048', '049', '050', '054', '055', '056',
  '060', '061', '064', '065', '068', '069', '070', '076', '077', '080',
  '081', '082', '086', '087', '092', '093', '096', '097', '102',
];

export const driveGalleryImages = selected.map(n => ({
  src: `/donationdriveimages/drive-${n}.jpeg`,
}));
