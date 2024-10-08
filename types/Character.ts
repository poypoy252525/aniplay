export interface Character {
  voiceActors: {
    image: string;
    name: {
      full: string;
    };
  }[];
  name: {
    full: string;
  };
  image: string;
  role: string;
}
