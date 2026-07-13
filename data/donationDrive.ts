// Photos from KhelSetu's first donation drive (July 2026).
// The 15 best shots curated from public/donationdriveimages — every photo
// is a distinct moment (no duplicates or near-identical frames).
// All images are landscape (1600x1200 or 1600x900).

const selected = [
  '004', // volunteers at the orphanage banner
  '007', // big group, kids holding equipment
  '009', // kids with ball, bats and rackets, candid
  '015', // handing cricket bats, kids watching
  '020', // small kid reaching for a bat
  '042', // unpacking the equipment sack
  '043', // volunteers handing out badminton rackets
  '044', // kid receiving a racket, lively group
  '048', // small boy reaching for a racket
  '060', // smiling boy receives a racket
  '065', // two boys posing with a racket
  '068', // volunteer handing a racket to a boy
  '070', // volunteer teaching a boy the grip
  '077', // keeper-gloves handover
  '081', // strapping a helmet on a child
];

export const driveGalleryImages = selected.map(n => ({
  src: `/donationdriveimages/drive-${n}.jpeg`,
}));
