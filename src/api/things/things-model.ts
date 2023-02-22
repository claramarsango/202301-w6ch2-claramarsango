export interface ThingIKnow {
  id: string;
  subject: string;
}

export const thingsIAlreadyKnow: ThingIKnow[] = [
  { id: '0', subject: 'react' },
  { id: '1', subject: 'css' },
  { id: '3', subject: 'jest' },
  { id: '4', subject: 'flux' },
];

export const findById = (id: string) =>
  thingsIAlreadyKnow.find(thing => thing.id === id);
