export type PartKey = 'body' | 'eyes' | 'mouth' | 'hair' | 'arms' | 'legs';

export const PART_ORDER: PartKey[] = ['body', 'eyes', 'mouth', 'hair', 'arms', 'legs'];

export interface PartOption {
  id: string;
  label: string;
}

export const PART_OPTIONS: Record<PartKey, PartOption[]> = {
  body: [
    { id: 'round', label: 'Round' },
    { id: 'blobby', label: 'Blobby' },
    { id: 'square', label: 'Blocky' },
    { id: 'star', label: 'Starry' },
    { id: 'diamond', label: 'Diamond' },
  ],
  eyes: [
    { id: 'happy', label: 'Happy' },
    { id: 'surprised', label: 'Surprised' },
    { id: 'sleepy', label: 'Sleepy' },
    { id: 'wink', label: 'Wink' },
    { id: 'love', label: 'Loving' },
  ],
  mouth: [
    { id: 'big_smile', label: 'Big Smile' },
    { id: 'laugh', label: 'Laughing' },
    { id: 'sad', label: 'Sad' },
    { id: 'surprised', label: 'Surprised' },
    { id: 'silly', label: 'Silly' },
  ],
  hair: [
    { id: 'spiky', label: 'Spiky' },
    { id: 'curly', label: 'Curly' },
    { id: 'pigtails', label: 'Pigtails' },
    { id: 'mohawk', label: 'Mohawk' },
    { id: 'bald', label: 'Bald Cap' },
  ],
  arms: [
    { id: 'normal', label: 'Hands' },
    { id: 'wings', label: 'Wings' },
    { id: 'fins', label: 'Fins' },
    { id: 'claws', label: 'Claws' },
    { id: 'tentacles', label: 'Tentacles' },
  ],
  legs: [
    { id: 'normal', label: 'Feet' },
    { id: 'hooves', label: 'Hooves' },
    { id: 'flippers', label: 'Flippers' },
    { id: 'paws', label: 'Paws' },
    { id: 'springs', label: 'Springs' },
  ],
};

export const PART_LABELS: Record<PartKey, string> = {
  body: 'Body',
  eyes: 'Eyes',
  mouth: 'Mouth',
  hair: 'Hair',
  arms: 'Arms',
  legs: 'Legs',
};

export interface Selections {
  body: string;
  eyes: string;
  mouth: string;
  hair: string;
  arms: string;
  legs: string;
  colors: Record<PartKey, string>;
}

export type ActionId = 'dance' | 'jump' | 'wave' | 'spin' | 'laugh' | 'sleep' | 'excited';

export interface ActionScenario {
  id: ActionId;
  label: string;
  emoji: string;
  animation: string;
}

export const ACTIONS: ActionScenario[] = [
  { id: 'dance', label: 'Dance!', emoji: '🎵', animation: 'action-dance' },
  { id: 'jump', label: 'Jump!', emoji: '⬆️', animation: 'action-jump' },
  { id: 'wave', label: 'Wave!', emoji: '👋', animation: 'action-wave' },
  { id: 'spin', label: 'Spin!', emoji: '🌀', animation: 'action-spin' },
  { id: 'laugh', label: 'Laugh!', emoji: '😄', animation: 'action-laugh' },
  { id: 'sleep', label: 'Sleep!', emoji: '💤', animation: 'action-sleep' },
  { id: 'excited', label: 'Excited!', emoji: '🌟', animation: 'action-excited' },
];

export const DEFAULT_COLORS: Record<PartKey, string> = {
  body: '#FF6B6B',
  eyes: '#4ECDC4',
  mouth: '#FF8C42',
  hair: '#FFE66D',
  arms: '#A8E6CF',
  legs: '#FF6B9D',
};
