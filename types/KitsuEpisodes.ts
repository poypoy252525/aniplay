export interface KitsuEpisode {
  id: string;
  attributes: {
    description: string;
    titles: {
      en_us: string;
      en: string;
      en_jp: string;
      ja_jp: string;
    };
    canonicalTitle: string;
    thumbnail: {
      original: string;
    };
    number: number;
    airdate: string;
  };
}
